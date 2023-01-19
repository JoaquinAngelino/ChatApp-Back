import { IChat } from "../interfaces/chat.interface"
import { IMessage } from "../interfaces/message.interface"
import { ChatModel } from "../models/Chat.model"
import { MessageModel } from "../models/Message.model"
import { UserModel } from "../models/User.model"


export const ChatDAO = {
  async postChat(chat: IChat, userId: string): Promise<IChat> {

    const user = await UserModel.findById(userId)
    if (!user) { throw new Error('Usuario no encontrado en DB') }

    const created = await ChatModel.create(chat)
    if (!created) { throw new Error('No se pudo crear el chat') }

    user.chats.push(created.id)
    await user.save()

    return created as IChat
  },

  async addMessage(chatId: string, message: IMessage): Promise<void> {

    const finded = await ChatModel.findById(chatId)
    if (!finded) { throw new Error('Chat no encontrado en DB') }

    const created = await MessageModel.create(message)
    if (!created) { throw new Error('No se puedo crear el mensaje') }

    finded.messages.unshift(created.id)
    await finded.save()
  },


  //  ! NO UTILIZAR 
  //  ? eliminar el chat de un solo usuario, no ambos / Definir funcionamiento
  async deleteChat(chatId: string, userId: string): Promise<IChat> {

    const user = await UserModel.findById(userId)
    if (!user) { throw new Error('Usuario no encontrado en DB') }

    if (!user.chats.some(e => String(e) === chatId)) { throw new Error('Usuario el chatId no coincide con los de este usuario') }

    user.chats = user.chats.filter(e => String(e) === chatId)

    return {} as IChat
  }
}