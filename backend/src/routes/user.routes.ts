import express from 'express';
import * as Controllers from '../controllers/user.controllers';

const router = express.Router();

// /api/user

router.post('/sign-in', Controllers.signInController);
router.post('/sign-up', Controllers.signUpController);
router.post('/sign-out', Controllers.signOutController);

export default router;
