import { isValidObjectId, type ObjectId } from 'mongoose'

export const isObjectId = (arg: unknown): arg is ObjectId => {
  return isValidObjectId(arg)
}

export const isObjectIdArr = (arr: unknown): arr is ObjectId[] => {
  if (!Array.isArray(arr)) { return false }
  for (const e of arr) {
    if (!isObjectId(e)) { return false }
  }
  return true
}
