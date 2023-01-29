import { Request, Response, NextFunction } from "express";
import { isObjectId } from "../../modelValidation/isObjectId";
import { isUser } from "../../modelValidation/isUser";
import { validate_User } from "../schema.validate";

export const UserValidations = {

  //    VALIDATE POST /USER
  validatePostUser: async (req: Request, res: Response, next: NextFunction) => {

    if (!validate_User(req.body)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

  //    VALIDATE GET /USER
  validateGetUser: async (req: Request, res: Response, next: NextFunction) => {
    if (!isObjectId(req.params.chatId)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

  //    VALIDATE UPDATE /USER
  validateUserUpdate: async (req: Request, res: Response, next: NextFunction) => {
    if (!isUser(req.body) || !isObjectId(req.params.userId)) {
      return res.status(400).send('Bad Request')
    }
    next()
  }
}