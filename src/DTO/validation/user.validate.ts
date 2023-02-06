import { type Request, type Response, type NextFunction } from 'express'
import { isObjectId } from '../../modelValidation/isObjectId'
import { VALID_USER_GET, VALID_USER_POST, VALID_USER_UPDATE } from '../schema.validate'

export const UserValidations = {

  //    VALIDATE POST /USER
  validatePostUser: async (req: Request, res: Response, next: NextFunction) => {
    if (!VALID_USER_POST(req.body)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

  //    VALIDATE GET /USER
  validateGetUser: async (req: Request, res: Response, next: NextFunction) => {
    if (!VALID_USER_GET(req.body)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

  //    VALIDATE UPDATE /USER
  validateUserUpdate: async (req: Request, res: Response, next: NextFunction) => {
    if (!VALID_USER_UPDATE(req.body) || !isObjectId(req.params.id)) {
      return res.status(400).send('Bad Request')
    }
    next()
  }
}
