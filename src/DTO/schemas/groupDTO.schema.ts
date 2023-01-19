
export const Group_DTO_Schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    admin: { type: 'string', format: 'email' },
    description: { type: 'string' },
  },
  required: ['name', 'admin', 'description'],
  additionalProperties: false
}