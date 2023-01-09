import { Types } from 'mongoose';
import { IChat } from './chat.interface';


export interface IUser {
  _id?: Types.ObjectId;
  name: String
  email: String,
  password: String,
  chats: Array<Types.ObjectId | IChat>;
  contacts: Array<Types.ObjectId | IUser>;
  blocked: Array<Types.ObjectId | IUser>;
  groups: Array<Types.ObjectId | IUser>;
}
