import { IMessage } from '../interfaces/message.interface';
import { isObjectId } from './isObjectId';

export const isMessage = (object: unknown): object is IMessage => {
  if (object !== null && typeof object === 'object') {
    if ('text' in object && 'sender' in object && 'time' in object) {
      const { text, sender, time } = object
      return typeof text === 'string' && isObjectId(sender) && typeof time === 'number'
    }
  }
  return false
}

export const isMessageArr = (arr: unknown): arr is IMessage[] => {
  if (!Array.isArray(arr)) { return false }
  for (let e of arr) {
    if (!isMessage(e)) { return false }
  }
  return true
}