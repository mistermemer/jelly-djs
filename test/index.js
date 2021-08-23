const db = require('../src/classes/database');
let data = new db('mongodb+srv://GentleScreamer:jelly@cluster0.wofjo.mongodb.net/test?retryWrites=true&w=majority')
data.set('test', true);