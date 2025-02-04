const express = require('express');
const router = express.Router();
const authtController = require('../../controllers/users');
const authenticate = require('../../middlewares/authenticate');
const { ctrlWrapper } = require('../../helpers');
const upload = require('../../middlewares/upload');

router.post('/signup', ctrlWrapper(authtController.register));

router.get('/verify/:verificationToken', authenticate, ctrlWrapper(authtController.verify));
router.post('/verify', ctrlWrapper(authtController.resendEmail));

router.post('/login', ctrlWrapper(authtController.login));
router.get('/current', authenticate, ctrlWrapper(authtController.getCurrent));
router.get('/logout', authenticate, ctrlWrapper(authtController.logout));
router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  ctrlWrapper(authtController.updateAvatar)
);

module.exports = router;