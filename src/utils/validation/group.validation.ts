import { Request, Response, NextFunction } from "express";


export const GroupValidations = {
  async validatePostGroup(req: Request, res: Response, next: NextFunction) {
    const { user1, user2 } = req.body as any;
    try {
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },

  async validateGetGroups(req: Request, res: Response, next: NextFunction) {
    const { userID } = req.params as any;
    try {
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  }


}
