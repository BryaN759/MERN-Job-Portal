import express from 'express';
import * as Controllers from '../controllers/user.controllers';

const router = express.Router();

router.get('/', Controllers.testController);

export default router;
