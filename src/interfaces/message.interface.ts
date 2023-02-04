import { type Types } from 'mongoose'

export interface IMessage {
  _id?: Types.ObjectId
  text: string
  sender: Types.ObjectId
  time: Date
}

export interface PaginatedIMessages {
  messages: IMessage[]
  page: number
}
