import { Router } from "express";
import { GroupController } from "../controllers/group.controller";
import { GroupValidations } from "../utils/validation/group.validation";


const router: Router = Router()
/*
    Group ROUTES
*/

router.get('/', GroupValidations.validateGetGroups, GroupController.getGroups)

router.post('/', GroupValidations.validatePostGroup, GroupController.postGroup)

router.delete('/:groupId', GroupValidations.validateDeleteGroup, GroupController.deleteGroup)

export default router