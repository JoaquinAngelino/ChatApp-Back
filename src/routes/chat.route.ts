import { Router } from 'express'
import { ChatController } from '../controllers/chat.controller'
import { ChatValidations } from '../DTO/validation/chat.validate'

const router: Router = Router()
/*
    CHAT ROUTES /chat/...
*/
// GET /
// router.get('/:userId', ChatValidations.validateGetChats, ChatController.getChat)

// POST /
router.post('/', ChatValidations.validatePostChat, ChatController.postChat)

// POST /message/:chatId
router.post('/message/:chatId', ChatValidations.validateAddMessage, ChatController.addMessage)

// DELETE /message/:chatId
// router.delete('/message/:chatId', (ChatValidations.validateDeleteMessage) as RequestHandler, (ChatController.deleteMessage) as RequestHandler)

// DELETE /:chatId
// router.delete('/:chatId', ChatValidations.validateDeleteChat, ChatController.deleteChat)

export default router
