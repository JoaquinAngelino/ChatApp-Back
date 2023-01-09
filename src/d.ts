import { ObjectId } from "mongoose"
import { IChat } from "./interfaces/chat.interface"
import { IGroup } from "./interfaces/group.interface"
import { IMessage } from "./interfaces/message.interface"
import { IUser } from "./interfaces/user.interface"
import { isChat } from "./utils/validation/modelValidation/isChat"
import { isGroup } from "./utils/validation/modelValidation/isGroup"
import { isMessage } from "./utils/validation/modelValidation/isMessage"
import { isObjectId } from "./utils/validation/modelValidation/isObjectId"
import { isUser } from "./utils/validation/modelValidation/isUser"

export { }
declare global {
  interface Array<T> {
    isObjectIdArr(): this is ObjectId[]
    isChatArr(): this is IChat[]
    isMessageArr(): this is IMessage[]
    isUserArr(): this is IUser[]
    isGroupArr(): this is IGroup[]
  }
}

Array.prototype.isObjectIdArr = function () {
  let i = 0
  while (this[i]) {
    if (!isObjectId(this[i])) { return false }
    i++
  }
  return true
}

Array.prototype.isChatArr = function () {
  let i = 0
  while (this[i]) {
    if (!isChat(this[i])) { return false }
    i++
  }
  return true
}

Array.prototype.isMessageArr = function () {
  let i = 0
  while (this[i]) {
    if (!isMessage(this[i])) { return false }
    i++
  }
  return true
}

Array.prototype.isUserArr = function () {
  let i = 0
  while (this[i]) {
    if (!isUser(this[i])) { return false }
    i++
  }
  return true
}

Array.prototype.isGroupArr = function () {
  let i = 0
  while (this[i]) {
    if (!isGroup(this[i])) { return false }
    i++
  }
  return true
}
