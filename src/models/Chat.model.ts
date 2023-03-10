import { Schema, model, SchemaTypes } from 'mongoose'
import { type IChat } from '../interfaces/chat.interface'

const ChatSchema = new Schema<IChat>(
  {
    members: [{
      type: SchemaTypes.ObjectId,
      ref: 'User'
    }],
    messages: [{
      type: SchemaTypes.ObjectId,
      ref: 'Message'
    }]
  },
  { versionKey: false }
)

export const ChatModel = model<IChat>('Chat', ChatSchema)
