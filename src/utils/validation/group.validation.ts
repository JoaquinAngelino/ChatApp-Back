import { Request, Response, NextFunction } from "express";
import { isGroup } from "./modelValidation/isGroup";
import { isObjectId } from "./modelValidation/isObjectId";


export const GroupValidations = {

  //    VALIDATE POST /GROUP
  async validatePostGroup(req: Request, res: Response, next: NextFunction) {

    if (!isGroup(req.body) || isObjectId(req.params.adminId)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

  //    VALIDATE GET /GROUP
  async validateGetGroups(req: Request, res: Response, next: NextFunction) {

    if (!isObjectId(req.params.userId)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

  //    VALIDATE DELETE /GROUP
  async validateDeleteGroup(req: Request, res: Response, next: NextFunction) {

    if (!isObjectId(req.params.groupId) || isObjectId(req.params.adminId)) {
      return res.status(400).send('Bad Request')
    }
    next()
  },

}
