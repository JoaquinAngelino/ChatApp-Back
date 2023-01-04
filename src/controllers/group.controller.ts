import { Request, Response, NextFunction } from "express";
import { ChatService } from "../services/chat.service";

export const GroupController = {

  /*    POST GROUP   */
  async postGroup(req: Request, res: Response, next: NextFunction) {
    const chat = req.body
    try {
      const created = await ChatService.postChat(chat)
      return res.status(200).json(created)
    } catch (error) {
      next(error);
    }
  },

  /*    GET GROUPS   */
  async getGroups(req: Request, res: Response, next: NextFunction) {
    const userId = req.params.userId as string
    try {
      const userChats = await ChatService.getUserChats(userId)
      return res.status(200).json(userChats)
    } catch (error) {
      next(error)
    }
  },

  /*    DELETE GROUP   */
  async deleteGroup(req: Request, res: Response, next: NextFunction) {
    const { chatId, userId } = req.query as { [key: string]: string}

    try {
      const deleted = await ChatService.deleteChat(chatId, userId)
      return res.status(200).json(deleted)
    } catch (error) {
      next(error)
    }
  }
}