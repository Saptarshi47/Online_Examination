const mongoose = require('mongoose');


const main = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/examdb')
}

main().then(()=>{
    console.log(`The database is connected`);
}).catch((err)=>{
    console.log(`The error is ${err}`);
})

module.exports = mongoose;