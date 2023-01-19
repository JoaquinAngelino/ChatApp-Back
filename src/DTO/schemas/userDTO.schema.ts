
export const User_DTO_Schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    password: { format: 'pass' },
    email: { type: 'string', format: 'email' },
  },
  required: ['name', 'email', 'password'],
  additionalProperties: false
}

