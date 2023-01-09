import { isValidObjectId, ObjectId } from 'mongoose';


export const isObjectId = (arg: unknown): arg is ObjectId => {
  return isValidObjectId(arg)
}