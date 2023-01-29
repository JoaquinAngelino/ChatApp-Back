import { IUser } from "../interfaces/user.interface"
import { UserModel } from "../models/User.model"
import { hashHandler } from "../utils/hashHandler"


export const UserDAO = {

  async postUser(user: IUser): Promise<IUser> {
    const { password, name, email } = user

    const hashedEmail = hashHandler.hashEmail(email)
    const emailTaken = await UserModel.findOne({ email: hashedEmail })
    if (emailTaken) { throw new Error('Mail en uso') }

    const hashedPassword = await hashHandler.hashPassword(password)
    const created = await UserModel.create({ name, email: hashedEmail, password: hashedPassword })

    return created as IUser
  },

  async updateUser(user: IUser): Promise<IUser> {

    return user as IUser
  },

  async getUser(email: string, password: string): Promise<IUser> {
    const hashedEmail = hashHandler.hashEmail(email)
    const finded = await UserModel.findOne({ email: hashedEmail })
    if (!finded) { throw new Error('Usuario no encontrado en DB') }

    const correct = await hashHandler.comparePassword(password, finded.password)
    if (!correct) { throw new Error('Contraseña incorrecta') }

    console.log(finded);

    return finded as IUser
  }

}