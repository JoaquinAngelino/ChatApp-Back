import { IUser } from '../interfaces/user.interface';
import { isChatArr } from './isChat';
import { isObjectIdArr } from './isObjectId';

export const isUser = (obj: unknown): obj is IUser => {

  if (obj === null || typeof obj !== 'object') { return false }
  if (!('name' in obj) || !('email' in obj) || !('password' in obj)) { return false }

  if ('chats' in obj) {
    if (!isObjectIdArr(obj['chats']) && isChatArr(obj['chats'])) { return false }
  }
  if ('contacts' in obj) {
    if (!isObjectIdArr(obj['contacts']) && !isUserArr(obj['contacts'])) { return false }
  }
  if ('blocked' in obj) {
    if (!isObjectIdArr(obj['blocked']) && !isUserArr(obj['blocked'])) { return false }
  }
  if ('groups' in obj) {
    if (!isObjectIdArr(obj['groups']) && !isUserArr(obj['groups'])) { return false }
  }

  const { name, email, password } = obj
  return typeof name == 'string' && typeof email == 'number' && typeof password == 'string'
}

export const isUserArr = (arr: unknown): arr is IUser[] => {
  if (!Array.isArray(arr)) { return false }
  for (let e of arr) {
    if (!isUser(e)) { return false }
  }
  return true
}