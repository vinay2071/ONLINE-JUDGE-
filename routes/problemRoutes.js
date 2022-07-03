const {Router} = require('express')
const {getProblems,ProblemId} = require("../controller/problemController")
const router = Router();


router.get('/',getProblems);
router.get('/:ProblemId',ProblemId)
module.exports = router;
