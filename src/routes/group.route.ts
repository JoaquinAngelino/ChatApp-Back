import { Router } from "express";
import { GroupController } from "../controllers/group.controller";
import { GroupValidations } from "../dto-validation/group.validation";


const router: Router = Router()
/*
    Group ROUTES
*/


router.post('/', GroupValidations.validatePostGroup, GroupController.postGroup)

// POST /message/:chatId
router.post('/message/:groupId', GroupValidations.validateAddMessage, GroupController.addMessage)

// DELETE /message/:chatId
router.delete('/message/:groupId', GroupValidations.validateDeleteMessage, GroupController.deleteMessage)

router.delete('/:groupId', GroupValidations.validateDeleteGroup, GroupController.deleteGroup)

export default router