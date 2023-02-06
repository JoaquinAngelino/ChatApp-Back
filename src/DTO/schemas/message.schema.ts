
export const MessageSchemas = {

  getMessages: {
    type: 'object',
    properties: {
      id: { type: 'string', format: 'ObjectId' },
      offset: { type: 'number' }
    },
    required: ['chatId', 'offset'],
    additionalProperties: false
  },

  addMessage: {
    type: 'object',
    properties: {
      sender: { type: 'string', format: 'ObjectId' },
      text: { type: 'string' }
      // time: { type: 'date' }
    },
    required: ['sender', 'text'],
    additionalProperties: false
  }
}
