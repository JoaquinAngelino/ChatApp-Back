
export const message_DTO_Schema = {
  type: 'object',
  properties: {
    sender: { type: 'string' },
    text: { type: 'string' },
    time: { type: 'date' }
  },
  required: ['sender', 'text'],
  additionalProperties: false
}