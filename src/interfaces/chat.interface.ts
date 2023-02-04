import { type Types } from 'mongoose'
import { type IMessage } from './message.interface'
import { type IUser } from './user.interface'

export interface IChat {
  _id?: Types.ObjectId
  messages: Array<Types.ObjectId | IMessage>
  members: Array<Types.ObjectId | IUser>
}
