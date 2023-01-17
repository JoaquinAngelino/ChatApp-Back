
export const user_DTO_Schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    password: { type: 'string' },
  },
  required: ['name', 'email', 'password'],
  additionalProperties: false
}