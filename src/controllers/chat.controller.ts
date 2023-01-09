import { Request, Response, NextFunction } from "express";
import { ChatService } from "../services/chat.service";

export const ChatController = {

  //    POST CHAT
  // creates a new chat
  async postChat(req: Request, res: Response, next: NextFunction) {
    const chat = req.body
    try {
      const created = await ChatService.postChat(chat)
      return res.status(200).json(created)
    } catch (error) {
      next(error);
    }
  },

  //    GET CHAT
  // returns a specific chat with it's messages
  async getChat(req: Request, res: Response, next: NextFunction) {
    const chatId = req.params.chatId as string;
    try {
      const chat = await ChatService.getChat(chatId);
      return res.status(200).json(chat);
    } catch (error) {
      next(error);
    }
  },

  //    DELETE CHAT
  // deletes a chat with all it's messages included   
  async deleteChat(req: Request, res: Response, next: NextFunction) {
    const { chatId, userId } = req.query as { [key: string]: string}

    try {
      const deleted = await ChatService.deleteChat(chatId, userId)
      return res.status(200).json(deleted)
    } catch (error) {
      next(error)
    }
  },

  //    GET MESSAGES
  // returns 15 messages from a chat (will need the offset)
  async getMessages(_req: Request, res: Response, _next: NextFunction) {
    // MessageService.getMessage()
    res.send('getMessages200')
  },

  //    POST MESSAGE
  // appends a new message to a specific chat
  async postMessage(_req: Request, res: Response, _next: NextFunction) {
    // MessageService.postMessage()
    res.send('postMessages200')
  },

  //    DELETE MESSAGE
  // deletes a specific message from a chat
  async deleteMessage() {

  },
}