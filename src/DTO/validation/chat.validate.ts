import { Request, Response, NextFunction } from "express";
import { isObjectId } from "../../modelValidation/isObjectId";
import { isMessage } from "../../modelValidation/isMessage";
import { isChat } from "../../modelValidation/isChat";


export const ChatValidations = {

  //    VALIDATE POST /CHAT
  async validatePostChat(req: Request, res: Response, next: NextFunction) {

    if (!isChat(req.body) || !isObjectId(req.params.userId)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

  //    VALIDATE GET /CHAT
  async validateGetChats(req: Request, res: Response, next: NextFunction) {
    if (!isObjectId(req.params.userId) || !isObjectId(req.params.chatId)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

  //    VALIDATE POST /CHAT/MESSAGE
  async validateAddMessage(req: Request, res: Response, next: NextFunction) {

    if (!isMessage(req.body) || !isObjectId(req.params.chatId)) {
      return res.status(400).send('Bad Request')
    }
    const { text, sender, time } = req.body
    req.body = { text, sender, time }
    next()
  },

  //    VALIDATE GET /CHAT/MESSAGE
  async validateDeleteMessage(_req: Request, _res: Response, next: NextFunction) {
    next()
  },

  //    VALIDATE GET /CHAT
  async validateDeleteChat(_req: Request, _res: Response, _next: NextFunction) {

  }
}

