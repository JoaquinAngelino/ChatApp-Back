import { IGroup } from "../interfaces/group.interface"
import { IMessage } from "../interfaces/message.interface"
import { GroupModel } from "../models/Group.model"
import { MessageModel } from "../models/Message.model"
import { UserModel } from "../models/User.model"


export const GroupDAO = {
  // * POST GROUP
  async postGroup(group: IGroup): Promise<IGroup> {

    const user = await UserModel.findById(group.admin)
    if (!user) { throw new Error('Usuario no encontrado en DB') }

    const created = await GroupModel.create(group)
    if (!created) { throw new Error('No se pudo crear el group') }

    user.groups.push(created.id)
    await user.save()

    return created as IGroup
  },

  // * ADD MESSAGE TO A GROUP
  async addMessage(groupId: string, message: IMessage): Promise<void> {

    const finded = await GroupModel.findById(groupId)
    if (!finded) { throw new Error('group no encontrado en DB') }

    const created = await MessageModel.create(message)
    if (!created) { throw new Error('No se puedo crear el mensaje') }

    finded.messages.unshift(created.id)
    await finded.save()
  },

  /**
   // * DELETE GROUP
   * ? como eliminar el group de un solo usuario, no ambos
   */
  async deleteGroup(groupId: string, userId: string): Promise<IGroup> {

    const user = await UserModel.findById(userId)
    if (!user) { throw new Error('Usuario no encontrado en DB') }

    if (!user.groups.some(e => String(e) === groupId)) { throw new Error('Usuario el groupId no coincide con los de este usuario') }

    user.groups = user.groups.filter(e => String(e) === groupId)

    return {} as IGroup
  }
}