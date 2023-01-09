import { Request, Response, NextFunction } from "express";

export const UserValidations = {
  validatePostUser: async (_req: Request, res: Response, next: NextFunction) => {
    // const data = req.body as any;
    try {

      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },

  validateGetUsers: async (_req: Request, res: Response, next: NextFunction) => {
    // const { userID } = req.params as any;
    try {
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },
  
  validateUserUpdate: async (_req: Request, res: Response, next: NextFunction) => {
    // const { userID } = req.params as any;
    // const data = req.body as any;
    try {
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  }
}