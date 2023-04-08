const mongoose = require('mongoose')
const schema = mongoose.Schema

const comment_schema = new schema({
    plan_type:{
        type: String,
    },
    price: {
            type: Number,
    },
    expiring_date: {
            type: String,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref :'user'
},
    
    
createdAt : {
    type: Date,
    default:Date.now
}

})

const subscription_model = mongoose.model('subscription',comment_schema)
module.exports = subscription_model