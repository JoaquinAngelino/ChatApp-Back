import { Router } from "express";


const router: Router = Router()
/*
    Group ROUTES
*/

router.get('/groups', GroupValidations.validateGetGroup, GroupController.getGroups)

router.post('/group', GroupController.postGroup)

router.delete('/group/:groupId', GroupController.deleteGroup)

export default router