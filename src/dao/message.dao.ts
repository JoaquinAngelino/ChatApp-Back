import { IMessage } from "../interfaces/message.interface"
import { MessageModel } from "../models/Message.model"

export const MessageDAO = {
  async postMessage(message: IMessage): Promise<IMessage> {
    const created = await MessageModel.create(message)
    if (!created) { throw new Error('No se puedo crear el mensaje') }

    return created as IMessage
  },

  async getMessage(_messageId: string): Promise<IMessage> {

    return {} as IMessage
  },

  async deleteMessage(_messageId: string, _userId: string): Promise<IMessage> {

    return {} as IMessage
  }
}