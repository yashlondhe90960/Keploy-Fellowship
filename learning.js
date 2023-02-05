const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
    data : {
        type: String,
        default : Date.now,
    }

});

module.exports = mongoose.model("Posts", PostSchema);
