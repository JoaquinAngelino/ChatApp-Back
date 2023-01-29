import { Router } from "express";
import { SessionController } from "../controllers/session.controller";


const router: Router = Router()
/*
    LOGIN ROUTES
*/
// router.get('/logout', SessionValidations.logout, SessionController.logout)

router.post('/register', SessionController.register)

router.post('/login', SessionController.login)

export default router
