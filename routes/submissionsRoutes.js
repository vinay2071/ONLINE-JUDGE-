const {Router} = require('express');
const router = Router();
const {getQuestionsById,getQuestions,newSubmission,submission_readone} = require("../controller/submissionsController");

// router.get('/',getQuestions);
// router.get('/:id',getQuestionsById);
router.post('/solutions',newSubmission);
router.get('/solutions/:id',submission_readone);

module.exports = router;