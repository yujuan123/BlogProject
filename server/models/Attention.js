import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

const Attention = mongoose.model('Attention',{
    username:String,
    friends:Array,
    fans:Array
});

export  default Attention;