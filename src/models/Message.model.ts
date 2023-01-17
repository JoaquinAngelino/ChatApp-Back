import { Schema, model, SchemaTypes } from 'mongoose';
import { IMessage } from '../interfaces/message.interface';

const MessageSchema = new Schema<IMessage>(
  {
    text: {
      type: String,
      required: true,
      inmutable: true
    },
    sender: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
      inmutable: true
    },
    time: {
      type: Date,
      default: Date.now,
      inmutable: true
    },
  },
  { versionKey: false }
);

export const MessageModel = model<IMessage>('Message', MessageSchema);
