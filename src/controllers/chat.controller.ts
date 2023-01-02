import { Request, Response, NextFunction } from "express";
import { ChatService } from "../services/chat.service";

export const ChatController = {

  /*    POST CHAT   */
  async postChat(req: Request, res: Response, next: NextFunction) {
    const chat = req.body
    try {
      const created = await ChatService.postChat(chat)
      return res.status(200).json(created)
    } catch (error) {
      next(error);
    }
  },

  /*    GET CHAT   */
  async getChat(req: Request, res: Response, next: NextFunction) {
    const chatId = req.params.chatId as string;
    try {
      const chat = await ChatService.getChat(chatId);
      return res.status(200).json(chat);
    } catch (error) {
      next(error);
    }
  },

  /*    GET CHATS   */
  async getChats(req: Request, res: Response, next: NextFunction) {
    const userId = req.params.userId as string
    try {
      const userChats = await ChatService.getUserChats(userId)
      return res.status(200).json(userChats)
    } catch (error) {
      next(error)
    }
  },

  /*    DELETE CHAT   */
  async deleteChat(req: Request, res: Response, next: NextFunction) {
    const { chatId, userId } = req.query as { [key: string]: string}

    try {
      const deleted = await ChatService.deleteChat(chatId, userId)
      return res.status(200).json(deleted)
    } catch (error) {
      next(error)
    }
  }
}