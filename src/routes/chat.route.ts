import { Router } from "express";
import { ChatController } from "../controllers/chat.controller";
import { ChatValidations } from "../utils/validation/chat.validation";

const router: Router = Router()
/*
    CHAT ROUTES /chat/...
*/
// GET /
router.get('/:userId', ChatValidations.validateGetChats, ChatController.getChat)

// POST /
router.post('/', ChatValidations.validatePostChat, ChatController.postChat)

// POST /message/:chatId
router.post('/message/:chatId', ChatValidations.validatePostMessage, ChatController.postChat)

// DELETE /message/:chatId
router.post('/message/:chatId', ChatValidations.validateDeleteMessage, ChatController.postChat)

// DELETE /:chatId
router.delete('/:chatId', ChatValidations.validateDeleteChat, ChatController.deleteChat)

export default router