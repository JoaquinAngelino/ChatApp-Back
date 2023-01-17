import { IUser } from "../interfaces/user.interface"
import { UserModel } from "../models/User.model"

export const UserDAO = {

  async postUser(user: IUser): Promise<IUser> {

    return user as IUser
  },
  
  async updateUser(user: IUser): Promise<IUser> {

    return user as IUser
  },
  
  async getUser(userId: string): Promise<IUser> {
    const finded = await UserModel.findById(userId).populate('chats')
    if (!finded) { throw new Error('Usuario no encontrado en DB') }

    return finded as IUser
  }

}