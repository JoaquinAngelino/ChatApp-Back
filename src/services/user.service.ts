import { IChat } from "../interfaces/chat.interface"

export const UserService = {
  async postChat(chat: IChat): Promise<IChat> {
    return {} as IChat
  },

  async getChat(chatId: string): Promise<IChat> {

    return {} as IChat
  },

  async getUserChats(userId: string): Promise<IChat[]> {

    return [] as IChat[]
  },

  async deleteChat(chatId: string, userId: string): Promise<IChat>{

    return {} as IChat
  }
}