import { Types } from 'mongoose';


export interface IUser {
  _id?: Types.ObjectId;
  name: String
  email: String,
  password: String,
  chats: Types.ObjectId[];
  contacts: Types.ObjectId[];
  blocked: Types.ObjectId[];
  groups: Types.ObjectId[];
}
