
const mongoose = require('mongoose')

const tiktok = new mongoose.Schema({
   url: String,
   channel: String,
   song: String,
   likes: String,
   message: String,
   description: String,
   share: String
})

//models

module.exports = mongoose.model("tiktokvideos",tiktok)