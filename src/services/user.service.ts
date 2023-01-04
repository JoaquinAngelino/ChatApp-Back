import { IChat } from "../interfaces/chat.interface"

export const UserService = {
  async postChat(_chat: IChat): Promise<IChat> {
    return {} as IChat
  },

  async getChat(_chatId: string): Promise<IChat> {

    return {} as IChat
  },

  async getUserChats(_userId: string): Promise<IChat[]> {

    return [] as IChat[]
  },

  async deleteChat(_chatId: string, _userId: string): Promise<IChat>{

    return {} as IChat
  }
}