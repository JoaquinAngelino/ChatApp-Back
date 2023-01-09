import { Request, Response, NextFunction } from "express";
import { isObjectId } from "./checkID";
import { isMessage } from "./isMessage";


export const ChatValidations = {
  async validatePostChat(_req: Request, res: Response, next: NextFunction) {
    // const [user1, user2] = req.body as any;
    try {
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },

  async validateGetChats(_req: Request, res: Response, next: NextFunction) {
    // const { userID } = req.params as any;
    try {
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },

  async validatePostMessage(req: Request, res: Response, next: NextFunction) {
    const { chatId } = req.params
    if (!isMessage(req.body) || !isObjectId(chatId)) {
      return res.status(400).send('Bad Request')
    }
    const { text, sender, time } = req.body
    req.body = { text, sender, time }
    next()
  },

  async validateDeleteMessage(_req: Request, _res: Response, next: NextFunction) {
    next()
  },
  
  async validateDeleteChat(_req: Request, _res: Response, _next: NextFunction){
  }
}

