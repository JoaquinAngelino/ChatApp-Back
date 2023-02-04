
export const UserSchemas = {
  user: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      password: { format: 'pass' },
      email: { type: 'string', format: 'email' }
    },
    required: ['name', 'email', 'password'],
    additionalProperties: false
  }
}
