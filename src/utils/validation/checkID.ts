import { isValidObjectId, ObjectId } from 'mongoose';


export const isObjectId = (arg: unknown): arg is ObjectId => {
  return isValidObjectId(arg)
}

// export const checkID = (...args: unknown[]): boolean => {
//   for (let i = 0; i < args.length; i++) {
//     if (!isObjectId(args[i])) {
//       return false
//     }
//   }
//   return true
// }

// declare global {
  //   interface Array<T> {
//     isObjectId(): this is ObjectId
//   }
// }

// Array.prototype.isObjectId = function () {
//   let i = 0
//   while (this[i]) {
//     if (!isValidObjectId(this[i])) { return false }
//     i++
//   }
//   return true
// } 