import { Schema, model, SchemaTypes } from 'mongoose';
import { IMessage } from '../interfaces/message.interface';

export const MessageSchema = new Schema<IMessage>(
  {
    text: {
      type: String,
      required: true
    },
    sender: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    },
    time: {
      type: Number,
      required: true
    },
  },
  { versionKey: false }
);

export const MessageModel = model<IMessage>('Message', MessageSchema);
