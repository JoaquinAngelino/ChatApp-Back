import { Router } from 'express'
import { UserController } from '../controllers/user.controller'
import { UserValidations } from '../DTO/validation/user.validate'

const router: Router = Router()
/*
    USER ROUTES
*/
router.get('/', UserValidations.validateGetUser, UserController.getUser)

router.post('/', UserValidations.validatePostUser, UserController.postUser)

router.patch('/:id', UserValidations.validateUserUpdate, UserController.updateUser)

// router.delete('/user/:userID', UserController.deleteUser)

export default router
