import { isValidObjectId } from 'mongoose';
import { IMessage } from '../../../interfaces/message.interface';

export const isMessage = (object: unknown): object is IMessage => {
  if (object !== null && typeof object === 'object') {
    if ('text' in object && 'sender' in object && 'time' in object) {
      const { text, sender, time } = object
      return typeof text === 'string' && isValidObjectId(sender) && typeof time === 'number'
    }
  }
  return false
}