import mongoose from 'mongoose';
import rawData from './raw-data/raw-data';
import TaskItem from '../models/TaskItem';
import UserInfo from '../models/UserInfo';
import Attention from '../models/Attention';

mongoose.Promise = require('bluebird');

const modelsMap = {
    TaskItem, UserInfo,Attention
};

let docs = Object.keys(rawData);

console.log(docs);


mongoose.connect('mongodb://localhost/my_database');

Object.keys(rawData).forEach(v => {
    modelsMap[v].remove(()=> {
        modelsMap[v].create(rawData[v], ()=> {
            docs = docs.filter(doc => doc !== v);
            console.log(`The data of ${v} created`);
            if (docs.length === 0) {
                console.log(`All data refreshed`);
                process.exit(0);
            }
        });
    });
});

