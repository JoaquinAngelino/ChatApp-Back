import { isValidObjectId } from 'mongoose';

export const checkID = (param: any): void => {
  if (!isValidObjectId(param)) {
    throw new Error("the _id property must be a valid 'ObjectId'")
  }
}