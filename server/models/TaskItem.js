import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');


const TaskItem = mongoose.model('TaskItem', {
    username: String,
    content: String,
    regtime: String,
    comments:Array
});

export default TaskItem;