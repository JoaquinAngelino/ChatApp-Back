import { Schema, model, SchemaTypes } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: [{
      type: String,
      required: true,
    }],
    password: [{
      type: String,
      required: true
    }],
    chats: [{
      type: SchemaTypes.ObjectId,
      ref: 'Chat',
      default: []
    }],
    blocked: [{
      type: SchemaTypes.ObjectId,
      ref: 'User'
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
