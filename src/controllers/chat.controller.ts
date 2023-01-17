import { Request, Response } from "express";
import { ChatDAO } from "../dao/chat.dao";

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

  //    GET CHAT
  // returns a specific chat with it's messages
  // async getChat(req: Request, res: Response) {
  //   const chatId = req.params.chatId as string;
  //   try {
  //     const chat = await ChatDAO.getChat(chatId);
  //     return res.status(200).json(chat);
  //   } catch (error) {
  //     res.status(500).send({ message: 'Server side Error' })
  //   }
  // },

  //   * GET MESSAGES
  // ? returns 15 messages from a chat (will need the offset)
  async getMessages(_req: Request, res: Response) {
    // MessageDAO.getMessage()
    res.send('getMessages200')
  },

  //    POST MESSAGE
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

  //    DELETE MESSAGE
  // deletes a specific message from a chat
  async deleteMessage() {

  },
}