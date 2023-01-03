import { Router } from "express";
import { ChatController } from "../controllers/chat.controller";
import { ChatValidations } from "../utils/validation/chat.validation";

const router: Router = Router()
/*
    CHAT ROUTES
*/
router.get('/chats/:userID', ChatValidations.validateGetChats, ChatController.getChats)

router.post('/chat', ChatValidations.validatePostChat, ChatController.postChat)

router.delete('/chat/:chatID', ChatController.deleteChat)

export default router