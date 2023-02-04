import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { isObjectId } from '../modelValidation/isObjectId'
import { ChatSchemas } from './schemas/chat.schema'
import { UserSchemas } from './schemas/user.schema'
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

export const ajvUser = ajv.compile(UserSchemas.user)
export const ajvChat = ajv.compile(ChatSchemas.chat)
export const ajvChatGetMessages = ajv.compile(ChatSchemas.getMessages)
// export const ajvGroup = ajv.compile(GroupSchema)
// export const ajvSession = ajv.compile(SessionSchema)
