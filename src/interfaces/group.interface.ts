import { type Types } from 'mongoose'
import { type IMessage } from './message.interface'
import { type IUser } from './user.interface'

export interface IGroup {
  _id?: Types.ObjectId
  admin: Types.ObjectId
  name: string
  description: string
  messages: Array<Types.ObjectId | IMessage>
  members: Array<Types.ObjectId | IUser>
}
