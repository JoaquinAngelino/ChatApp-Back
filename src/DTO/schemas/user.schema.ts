
export const UserSchemas = {

  post: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', format: 'pass' }
    },
    required: ['name', 'email', 'password'],
    additionalProperties: false
  },

  update: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      password: { format: 'pass' },
      email: { type: 'string', format: 'email' }
    },
    additionalProperties: false
  },

  get: {
    type: 'object',
    properties: {
      password: { format: 'pass' },
      email: { type: 'string', format: 'email' }
    },
    required: ['email', 'password'],
    additionalProperties: false
  }
}
