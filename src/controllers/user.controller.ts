import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

export const UserController = {

  //    POST USER
  // creates a new user
  async postUser(req: Request, res: Response, next: NextFunction) {
    const chat = req.body
    try {
      const created = await UserService.postChat(chat)
      return res.status(200).json(created)
    } catch (error) {
      next(error);
    }
  },

  //    GET USER
  // return a user info with all the groups/chats 
  async getUser(req: Request, res: Response, next: NextFunction) {
    const chatId = req.params.chatId as string;
    try {
      const chat = await UserService.getChat(chatId);
      return res.status(200).json(chat);
    } catch (error) {
      next(error);
    }
  },
  
  //    UPDATE USER
  // modifies an existing user
  async updateUser(req: Request, res: Response, next: NextFunction) {
    const chatId = req.params.chatId as string;
    try {
      const chat = await UserService.getChat(chatId);
      return res.status(200).json(chat);
    } catch (error) {
      next(error);
    }
  },

  //    DELETE USER   
  // deletes a user    
  // async deleteChat(req: Request, res: Response, next: NextFunction) {
  //   const { chatId, userId } = req.query as { [key: string]: string}

  //   try {
  //     const deleted = await UserService.deleteChat(chatId, userId)
  //     return res.status(200).json(deleted)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}