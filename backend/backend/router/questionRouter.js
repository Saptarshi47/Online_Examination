const express = require('express');
const  QC = require('../controller/questionController');
const router = express.Router();

router.post('/getquestion',QC.getQuestion);
router.put('/update/:id',QC.update);
router.delete('/delete/:_id',QC.delete);
router.post('/insert',QC.insert);


module.exports = router;