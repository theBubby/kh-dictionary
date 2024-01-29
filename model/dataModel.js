const mongoose = require('mongoose')
const schema = mongoose.Schema
let dataSchema = new schema({
    userId:{
        type:String,
        require:true
    },
    khmerText:{
        type:String,
        require:true
    },
    englishText:{
        type:String,
        require:true
    },
    pictureLink:{
        type:String,
        require:true
    },
    description:{
        type:String,
    },

})
module.exports=mongoose.model('tbldata',dataSchema)