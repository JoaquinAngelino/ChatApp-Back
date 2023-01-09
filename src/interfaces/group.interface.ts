import { Types } from 'mongoose';
import { IMessage } from './message.interface';
import { IUser } from './user.interface';

export interface IGroup {
  _id?: Types.ObjectId
  admin: Types.ObjectId
  name: string
  description: string
  messages: Array<Types.ObjectId | IMessage>
  members: Array<Types.ObjectId | IUser>
}
