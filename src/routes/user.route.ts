import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserValidations } from "../utils/user.validation";

const router: Router = Router()
/*
    USER ROUTES
*/
router.get('/user/:userID', UserValidations.validateGetUsers, UserController.getUser)

router.post('/user', UserValidations.validatePostUser, UserController.postUser)

router.patch('user/:userID', UserValidations.validateUserUpdate, UserController.updateUser)

// router.delete('/user/:userID', UserController.deleteUser)

export default router