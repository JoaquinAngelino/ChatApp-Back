import { IUser } from "../interfaces/user.interface"
import { UserModel } from "../models/User.model"
import bcrypt from 'bcrypt'
import CryptoJS from 'crypto-js'

export const UserDAO = {

  async postUser(user: IUser): Promise<IUser> {
    const { password, name, email } = user

    const hashedEmail = CryptoJS.SHA256(email).toString();
    const emailTaken = await UserModel.findOne({ email: hashedEmail })
    if (emailTaken) { throw new Error('Mail en uso') }

    const hashedPassword = await bcrypt.hash(password, 8)
    const created = await UserModel.create({ name, email: hashedEmail, password: hashedPassword })

    return created as IUser
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