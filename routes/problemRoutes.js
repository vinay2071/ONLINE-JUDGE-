const {Router} = require('express')
const {getProblems,getProblemById} = require("../controller/problemController")
const router = Router();


router.get('/',getProblems);
router.get('/:id',getProblemById)
module.exports = router;
