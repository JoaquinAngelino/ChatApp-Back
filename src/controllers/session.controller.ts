import { type Request, type Response } from 'express'
import { UserDAO } from '../DAO/user.dao'
import { TokenHandler } from '../utils/tokenHandler'

export const SessionController = {

  async login (req: Request, res: Response) {
    const { email, password } = req.body
    try {
      const user = await UserDAO.getUser(email, password)
      const token = TokenHandler.generateToken({ username: user.name, id: user._id })

      res.status(200).send({ token, user })
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },

  async logout (_req: Request, _res: Response) {

  }
}
