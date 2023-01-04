import { Router } from "express";
import { GroupController } from "../controllers/group.controller";


const router: Router = Router()
/*
    Group ROUTES
*/

router.get('/', GroupController.getGroups)

router.post('/', GroupController.postGroup)

router.delete('/:groupId', GroupController.deleteGroup)

export default router