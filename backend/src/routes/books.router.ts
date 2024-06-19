import { Router } from "express";

const router = Router();

router.get('/'); // get all
router.get('/:id'); //get by id
router.post('/'); // create one
router.put('/:id') //update by id

export default router;