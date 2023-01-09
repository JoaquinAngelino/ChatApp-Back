import { IChat } from '../../../interfaces/chat.interface';

export const isChat = (obj: unknown): obj is IChat => {
  if (obj !== null && typeof obj === 'object') {
    if ('members' in obj) {
      if (!Array.isArray(obj['members'])) { return false }
      if (!obj['members'].isObjectIdArr() && !obj['members'].isUserArr()) { return false }
      if (obj['members'].length !== 0 && obj['members'].length !== 2) { return false }
    }
    if ('messages' in obj) {
      if (!Array.isArray(obj['messages'])) { return false }
      if (!obj['messages'].isObjectIdArr() && !obj['messages'].isMessageArr) { return false }
    }
    return true
  }
  return false
}

// export const isChatArr = (arr: unknown): arr is IChat[] => {
//   if (arr !== null && Array.isArray(arr)) {
//     for (let e of arr) {
//       if (!isChat(e)) { return false }
//     }
//     return true
//   }
//   return false
// }