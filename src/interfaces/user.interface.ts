import { Types } from 'mongoose';


export interface IUser {
  _id?: Types.ObjectId;
  name: String
  email: String
  chats: Types.ObjectId[];
  contacts: Types.ObjectId[];
  groups: Types.ObjectId[];
}
