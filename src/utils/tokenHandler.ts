import { type Request, type Response, type NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config'

export const TokenHandler = {

  authenticateToken (req: Request, _res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1] ?? undefined

    if (token == null) { throw new Error('No authenticated') }

    jwt.verify(token, SECRET, (err, _user) => {
      if (err != null) { throw new Error('No valid token') }
      next()
    })
  },

  generateToken (obj: object): string {
    return jwt.sign(obj, SECRET)
  }

}
