import { Request, Response } from "express";
import { GroupDAO } from "../dao/group.dao";

export const GroupController = {

  // * POST GROUP   
  async postGroup(req: Request, res: Response) {
    const chat = req.body
    try {
      const created = await GroupDAO.postGroup(chat)
      return res.status(200).json(created)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },
  
  // * DELETE GROUP
  async deleteGroup(req: Request, res: Response) {
    const { groupId, userId } = req.query as { [key: string]: string }
    
    try {
      const deleted = await GroupDAO.deleteGroup(groupId, userId)
      return res.status(200).json(deleted)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },
  
  // * ADD MESSAGE
  async addMessage(req: Request, res: Response) {
    const message = req.body
    const { groupId } = req.params
    try {
      const added = await GroupDAO.addMessage(groupId, message)
      return res.status(200).send(added)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },

  // * DELETE MESSAGE
  async deleteMessage(req: Request, res: Response) {
    const { groupId, userId } = req.query as { [key: string]: string }
    
    try {
      const deleted = await GroupDAO.deleteGroup(groupId, userId)
      return res.status(200).json(deleted)
    } catch (error) {
      res.status(500).send({ message: (error as Error).message })
    }
  },
}