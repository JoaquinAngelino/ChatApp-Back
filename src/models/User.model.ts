import { Schema, model, SchemaTypes } from 'mongoose'
import { type IUser } from '../interfaces/user.interface'

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    chats: [{
      type: SchemaTypes.ObjectId,
      ref: 'Chat',
      default: []
    }],
    blocked: [{
      type: SchemaTypes.ObjectId,
      ref: 'User',
      default: []
    }],
    contacts: [{
      type: SchemaTypes.ObjectId,
      ref: 'User',
      default: []
    }],
    groups: [{
      type: SchemaTypes.ObjectId,
      ref: 'Group',
      default: []
    }]
  },
  { versionKey: false }
)

export const UserModel = model<IUser>('User', UserSchema)
