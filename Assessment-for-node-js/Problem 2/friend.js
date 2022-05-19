const mongoose = require("mongoose");

const friendSchema = mongoose.Schema({ // friend schema
    _id: {
        type: Number,
    },
    name: {
        type: String,
    }
},{ versionKey: false, });

const Friend = mongoose.model("Friend", friendSchema);  // friend model

// const me = new Friend({
//     _id: 1,
//     name: "Alemantrix Ofcourse"
// })

// me.save().then(() => {
//     console.log("saved finally", me)
// }).catch((e) => {
//     console.log("this is the error", e)
// })

module.exports = Friend;