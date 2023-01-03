import { Request, Response, NextFunction } from "express";
import { checkID } from "./checkID";

export const UserValidations = {
  validatePostUser: async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as any;
    try {

      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },

  validateGetUsers: async (req: Request, res: Response, next: NextFunction) => {
    const { userID } = req.params as any;
    try {
      checkID(userID)
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },
  
  validateUserUpdate: async (req: Request, res: Response, next: NextFunction) => {
    const { userID } = req.params as any;
    const data = req.body as any;
    try {

      checkID(userID)
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  }
}