import { type Request, type Response } from 'express'
import { UserDAO } from '../DAO/user.dao'

export const UserController = {

  //  *  POST USER
  // creates a new user
  async postUser (req: Request, res: Response) {
    const user = req.body
    try {
      const created = await UserDAO.postUser(user)
      return res.status(200).json(created)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },
  //  *  GET USER
  // return a user info with all the groups/chats
  async getUser (req: Request, res: Response) {
    const { email, password } = req.body
    try {
      const user = await UserDAO.getUser(email, password)
      return res.status(200).json(user)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },

  //  *  UPDATE USER
  // modifies an existing user
  async updateUser (req: Request, res: Response) {
    const user = req.body
    try {
      const chat = await UserDAO.updateUser(user)
      return res.status(200).json(chat)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  }

  //  *   DELETE USER
  // deletes a user
  // async deleteChat(req: Request, res: Response) {
  //   const { chatId, userId } = req.query as { [key: string]: string}

  //   try {
  //     const deleted = await UserDAO.deleteChat(chatId, userId)
  //     return res.status(200).json(deleted)
  //   } catch (error) {
  //     res.status(500).send({ message: (error as Error).message })
  //   }
  // }
}
