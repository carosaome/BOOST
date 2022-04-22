const mongoose = require('mongoose')
async function connectDataBase(){
    try {
await mongoose.connect(process.env.MONGODB_URI);
        console.log('sucess');
    } catch (error) {
        console.log('fail');
        
    }
}
module.exports = connectDataBase