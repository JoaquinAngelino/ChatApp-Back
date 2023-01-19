import Ajv from "ajv";
import addFormats from "ajv-formats";
// import { Chat_DTO_Schema } from "./schemas/chatDTO.schema";
// import { Group_DTO_Schema } from "./schemas/groupDTO.schema";
// import { Message_DTO_Schema } from "./schemas/messageDTO.schema";
// import { Session_DTO_Schema } from "./schemas/sessionDTO.schema";
import { User_DTO_Schema } from "./schemas/userDTO.schema";
const ajv = new Ajv()
addFormats(ajv)

ajv.addFormat('pass',{
  type: 'string',
  validate: (prop: string) => prop.length > 7
})

export const validate_User = ajv.compile(User_DTO_Schema)
// export const validate_Chat = ajv.compile(Chat_DTO_Schema)
// export const validate_Message = ajv.compile(Message_DTO_Schema)
// export const validate_Group = ajv.compile(Group_DTO_Schema)
// export const validate_Session = ajv.compile(Session_DTO_Schema)

