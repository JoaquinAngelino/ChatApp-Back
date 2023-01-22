
export const Group_Schema = {
  group: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      admin: { type: 'string', format: 'ObjectId' },
      description: { type: 'string' },
    },
    required: ['name', 'admin', 'description'],
    additionalProperties: false
  }
}