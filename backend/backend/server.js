const express = require('express');
const router = require('./router/loginRouter');
const examRouter = require('./router/examDettailsRouter');
const database = require('./db/database');
const studentSchema = require('./modelSchema/userSchema');
const examDetail = require('./modelSchema/examDetailSchema');
const question = require('./modelSchema/questionSchema');
const questionRouter = require('./router/questionRouter');
const cors = require('cors');
const app = express();

const port  = 2000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/question',questionRouter);
app.use('/api/exam',examRouter);
app.use('/api', router);



app.listen(port, ()=>{
    console.log(`The port is working on ${port}`);
})