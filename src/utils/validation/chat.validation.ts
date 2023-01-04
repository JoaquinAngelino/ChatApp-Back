import { Request, Response, NextFunction } from "express";
import { checkID } from "./checkID";


export const ChatValidations = {
  async validatePostChat(req: Request, res: Response, next: NextFunction) {
    const [user1, user2] = req.body as any;
    try {
      checkID(user1)
      checkID(user2)
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },

  async validateGetChats(req: Request, res: Response, next: NextFunction) {
    const { userID } = req.params as any;
    try {
      checkID(userID)
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },

  async validateDeleteChat(_req: Request, _res: Response, _next: NextFunction){
  }
}

