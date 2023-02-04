
export const Chat_Schemas = {

  chat: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string' }
    },
    required: ['name', 'email', 'password'],
    additionalProperties: false
  },

  getMessages: {
    type: 'object',
    properties: {
      chatId: { type: 'string', format: 'ObjectId' },
      offset: { type: 'number' }
    },
    required: ['chatId', 'offset'],
    additionalProperties: false
  },

  addMessage: {
    type: 'object',
    properties: {
      sender: { type: 'string', format: 'ObjectId' },
      text: { type: 'string' },
      time: { type: 'date' }
    },
    required: ['sender', 'text'],
    additionalProperties: false
  }
}
