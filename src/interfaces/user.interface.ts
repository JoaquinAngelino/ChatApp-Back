import { type Types } from 'mongoose'
import { type IChat } from './chat.interface'

export interface IUser {
  _id?: Types.ObjectId
  name: string
  email: string
  password: string
  chats: Array<Types.ObjectId | IChat>
  contacts: Array<Types.ObjectId | IUser>
  blocked: Array<Types.ObjectId | IUser>
  groups: Array<Types.ObjectId | IUser>
}
