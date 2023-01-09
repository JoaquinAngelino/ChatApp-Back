import { IGroup } from '../../../interfaces/group.interface';
import { isObjectId } from './isObjectId';

export const isGroup = (obj: unknown): obj is IGroup => {
  if (obj !== null && typeof obj === 'object') {
    if ('name' in obj && 'admin' in obj && 'description' in obj) {
      if (typeof obj['name'] !== 'string') { return false }
      if (typeof obj['description'] !== 'string') { return false }
      if (!isObjectId(obj['admin'])) { return false }

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
  }
  return false
}