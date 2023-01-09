import { ObjectId } from "mongoose"
import { IMessage } from "../interfaces/message.interface"

export const MessageService = {
  async postMessage(_message: IMessage): Promise<IMessage> {
    return {} as IMessage
  },

  async getMessage(_messageId: ObjectId): Promise<IMessage> {

    return {} as IMessage
  },

  async deleteMessage(_messageId: ObjectId, _userId: ObjectId): Promise<IMessage>{

    return {} as IMessage
  }
}