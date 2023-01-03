import { Request, Response, NextFunction } from "express";
import { checkID } from "./checkID";


export const ChatValidations = {
  validatePostChat: async (req: Request, res: Response, next: NextFunction) => {
    const [user1, user2] = req.body as any;
    try {
      checkID(user1)
      checkID(user2)
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  },

  validateGetChats: async (req: Request, res: Response, next: NextFunction) => {
    const { userID } = req.params as any;
    try {
      checkID(userID)
      next()
    } catch (error) {
      res.status(400).send("Invalid Request")
    }
  }
}

// const validate = async (schema, reqData, res, next) => {
//   try {
//     await schema.validate(reqData, { abortEarly: false });
//     next();
//   } catch (e) {
//     const errors = e.inner.map(({ path, message, value }) => ({
//       path,
//       message,
//       value,
//     }));
//     sendError(res, errors, "Invalid Request");
//   }
// };
