import { IUser } from '../../../interfaces/user.interface';

export const isUser = (obj: unknown): obj is IUser => {

  if (obj === null || typeof obj !== 'object') { return false }
  if (!('name' in obj) || !('email' in obj) || !('password' in obj)) { return false }

  if ('chats' in obj) {
    if (!Array.isArray(obj['chats'])) { return false }
    if (!obj['chats'].isObjectIdArr() && obj['chats'].isChatArr()) { return false }
  }
  if ('contacts' in obj) {
    if (!Array.isArray(obj['contacts'])) { return false }
    if (!obj['contacts'].isObjectIdArr() && !obj['contacts'].isUserArr()) { return false }
  }
  if ('blocked' in obj) {
    if (!Array.isArray(obj['blocked'])) { return false }
    if (!obj['blocked'].isObjectIdArr() && !obj['blocked'].isUserArr()) { return false }
  }
  if ('groups' in obj) {
    if (!Array.isArray(obj['groups'])) { return false }
    if (!obj['groups'].isObjectIdArr() && !obj['groups'].isUserArr()) { return false }
  }

  const { name, email, password } = obj
  return typeof name == 'string' && typeof email == 'number' && typeof password == 'string'
}