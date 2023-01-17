import { IChat } from '../interfaces/chat.interface';
import { isMessageArr } from './isMessage';
import { isObjectIdArr } from './isObjectId';
import { isUserArr } from './isUser';

export const isChat = (obj: unknown): obj is IChat => {
  if (obj !== null && typeof obj === 'object') {
    if ('members' in obj) {
      if (!isObjectIdArr(obj['members']) && !isUserArr(obj['members'])) { return false }
      if (![0, 2].includes(obj['members'].length)) { return false }
    }
    if ('messages' in obj) {
      if (!isObjectIdArr(obj['messages']) && !isMessageArr(obj['messages'])) { return false }
    }
    return true
  }
  return false
}

export const isChatArr = (arr: unknown): arr is IChat[] => {
  if (!Array.isArray(arr)) { return false }
  for (let e of arr) {
    if (!isChat(e)) { return false }
  }
  return true
}







