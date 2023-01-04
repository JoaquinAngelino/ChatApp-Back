import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { SECRET } from "../../config";

export const TokenController = {

  authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1] || undefined

    if (!token) { return res.send(401) }

    jwt.verify(token, SECRET, (err, _user) => {
      if (err) { return res.sendStatus(403) }
      next()
    })
  },

  generateToken(username: string, password: string): string {
    return jwt.sign({ username, password }, SECRET)
  }
}