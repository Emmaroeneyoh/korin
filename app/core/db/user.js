const mongoose = require('mongoose')
const schema = mongoose.Schema

const comment_schema = new schema({
    username:{
        type: String,
    },
    intro: {
            type: String,
    },
    equity: {
            type: Number,
    },
   
experience: [],
    
    
createdAt : {
    type: Date,
    default:Date.now
}

})

const user_model = mongoose.model('user',comment_schema)
module.exports = {
    user_model
}