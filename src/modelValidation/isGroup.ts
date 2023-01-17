import { IGroup } from '../interfaces/group.interface';
import { isMessageArr } from './isMessage';
import { isObjectId, isObjectIdArr } from './isObjectId';
import { isUserArr } from './isUser';

export const isGroup = (obj: unknown): obj is IGroup => {
  if (obj !== null && typeof obj === 'object') {
    if ('name' in obj && 'admin' in obj && 'description' in obj) {
      if (typeof obj['name'] !== 'string') { return false }
      if (typeof obj['description'] !== 'string') { return false }
      if (!isObjectId(obj['admin'])) { return false }

      if ('members' in obj) {
        if (!isObjectIdArr(obj['members']) && !isUserArr(obj['members'])) { return false }
        if (obj['members'].length !== 0 && obj['members'].length !== 2) { return false }
      }

      if ('messages' in obj) {
        if (!isObjectIdArr(obj['messages']) && !isMessageArr(obj['messages'])) { return false }
      }
      return true
    }
  }
  return false
}


export const isGroupArr = (arr: unknown): arr is IGroup[] => {
  if (!Array.isArray(arr)) { return false }
  for (let e of arr) {
    if (!isGroup(e)) { return false }
  }
  return true
}