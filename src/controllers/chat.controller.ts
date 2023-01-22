import { Request, Response } from "express";
import { ChatDAO } from "../DAO/chat.dao";

export const ChatController = {

  // *   POST CHAT
  // creates a new chat
  async postChat(req: Request, res: Response) {
    const chat = req.body
    const userId = req.params.userId
    try {
      const created = await ChatDAO.postChat(chat, userId)
      return res.status(200).json(created)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },

  //   * GET MESSAGES
  // ? returns 10 messages from a chat (will need the offset)
  async getMessages(req: Request, res: Response) {
    const { userId, chatId, offset } = req.body
    try {
      const messages = ChatDAO.getMessage(userId, chatId, offset)
      return res.status(200).send(messages)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },

  //  *  ADD MESSAGE
  // appends a new message to a specific chat
  async addMessage(req: Request, res: Response) {
    const chatId = req.params.chatId
    const message = req.body
    try {
      await ChatDAO.addMessage(chatId, message)
      res.status(200).send({ message: 'message added' })

    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },

  //  *  DELETE MESSAGE
  // deletes a specific message from a chat
  async deleteMessage() {

  },
}