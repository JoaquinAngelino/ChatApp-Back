import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { isObjectId } from '../modelValidation/isObjectId'
import { ChatSchemas } from './schemas/chat.schema'
import { MessageSchemas } from './schemas/message.schema'
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

// USER endpoints validators
export const VALID_USER_POST = ajv.compile(UserSchemas.post)
export const VALID_USER_UPDATE = ajv.compile(UserSchemas.update)
export const VALID_USER_GET = ajv.compile(UserSchemas.get)
// CHAT endpoints validators
export const VALID_CHAT_POST = ajv.compile(ChatSchemas.chat)
// MESSAGE endpoints validators
export const VALID_MESSAGE_POST = ajv.compile(MessageSchemas.addMessage)
export const VALID_MESSAGE_GET = ajv.compile(MessageSchemas.getMessages)
// GROUP endpoints validators
// export const ajvGroup = ajv.compile(GroupSchema)
// SESSION endpoints validators
// export const ajvSession = ajv.compile(SessionSchema)
