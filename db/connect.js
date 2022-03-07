const mongoose = require('mongoose')

// Works in SYNC    
const connectDB = (url) =>{
    return mongoose.connect(url , {
            // Removing deprication warnings 
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
    })
}

// Works in ASYNC
// mongoose.connect(connectionKey , {
//     // Removing deprication warnings 
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     })
//     .then(()=>{
//     console.log('[NOTE] Connected to the database...');
//     })
//     .catch((err)=>{
//     console.log(err);
//     })    


module.exports = connectDB

