import { Types } from 'mongoose';
import { IMessage } from './message.interface';

export interface IGroup {
  _id?: Types.ObjectId
  name: string
  description: string
  messages: IMessage[]
  members: Types.ObjectId
  admin: Types.ObjectId

}
