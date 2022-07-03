const {Router} = require('express')
const router = Router();
const authController = require('../controller/authController')


router.get('/signup',authController.signup_get);
router.get('/login',authController.login_get);
router.post('/signup',authController.signup_post)
router.post('/login',authController.longin_post)
router.get('/',authController.longin_post)
module.exports =router