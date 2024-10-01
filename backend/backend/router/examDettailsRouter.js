const express = require('express');
const router = express.Router();
const exam = require('../controller/examDetailsController');

router.get('/allexam',exam.showall);
router.delete('/delete/:id', exam.delete);
// router.delete('/delete', exam.delete);
router.put('/update/:id',exam.update);
router.post('/insert',exam.insert);

router.get('/getSubjects',exam.getUniqueSubject);


module.exports = router;