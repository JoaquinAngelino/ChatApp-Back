
import { Schema, model, SchemaTypes } from 'mongoose'
import { type IGroup } from '../interfaces/group.interface'

const GroupSchema = new Schema<IGroup>(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: '',
      maxLength: 100
    },
    messages: [{
      type: SchemaTypes.ObjectId,
      ref: 'RoomMessage'
    }],
    members: [{
      type: SchemaTypes.ObjectId,
      ref: 'User'
    }],
    admin: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { versionKey: false }
)

export const GroupModel = model<IGroup>('Group', GroupSchema)
