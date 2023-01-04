import { Schema, model, SchemaTypes } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

export const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: [{
      type: String,
      required: true
    }],
    chats: [{
      type: SchemaTypes.ObjectId,
      ref: 'Chat'
    }],
    contacts: [{
      type: SchemaTypes.ObjectId,
      ref: 'User'
    }],
    groups: [{
      type: SchemaTypes.ObjectId,
      ref: 'Group'
    }]
  },
  { versionKey: false }
);

export const UserModel = model<IUser>('User', UserSchema);