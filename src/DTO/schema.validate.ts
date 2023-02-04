import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { isObjectId } from '../modelValidation/isObjectId'
import { Chat_Schemas } from './schemas/chat.schema'
import { User_Schemas } from './schemas/user.schema'
const ajv = new Ajv()
addFormats(ajv)

ajv.addFormat('pass', {
  type: 'string',
  validate: (prop: string) => prop.length > 7
})

ajv.addFormat('ObjectId', {
  type: 'string',
  validate: (prop: string) => isObjectId(prop)
})

export const validateUserSchema = ajv.compile(User_Schemas.user)
export const validatePostChatSchema = ajv.compile(Chat_Schemas.chat)
export const validateChatGetMessagesSchema = ajv.compile(Chat_Schemas.getMessages)
// export const validate_Group = ajv.compile(Group_Schema)
// export const validate_Session = ajv.compile(Session_Schema)
