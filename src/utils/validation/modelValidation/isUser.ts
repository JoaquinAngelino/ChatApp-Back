import { IUser } from '../../../interfaces/user.interface';
import { isObjectIdArr } from './isObjectId';

export const isUser = (obj: unknown): obj is IUser => {
  if (obj !== null && typeof obj === 'object') {
    if ('name' in obj && 'email' in obj && 'password' in obj) {

      if ('chats' in obj && !isObjectIdArr(obj['chats'])) { return false }
      if ('contacts' in obj && !isObjectIdArr(obj['contacts'])) { return false }
      if ('blocked' in obj && !isObjectIdArr(obj['blocked'])) { return false }
      if ('groups' in obj && !isObjectIdArr(obj['groups'])) { return false }

      const { name, email, password } = obj
      return typeof name === 'string' && typeof email === 'number' && typeof password === 'string'
    }
  }
  return false
}