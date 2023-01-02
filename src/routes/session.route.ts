import { Router } from "express";


const router: Router = Router()
/*
    LOGIN ROUTES
*/
router.get('/logout', sessionValidations.validateGetsessions, sessionController.getsessions)

router.post('/login', sessionValidations.validatePostsession, sessionController.postsession)

export default router