import { Router } from "express";
import { ChatController } from "../controllers/chat.controller";
import { ChatValidations } from "../utils/validation/chat.validation";

const router: Router = Router()
/*
    CHAT ROUTES
*/
router.get('/:userID', ChatValidations.validateGetChats, ChatController.getChats)

router.post('/', ChatValidations.validatePostChat, ChatController.postChat)

router.delete('/:chatID', ChatValidations.validateDeleteChat, ChatController.deleteChat)

export default router