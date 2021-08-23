const { Database } = require('quickmongo')
class db {
    constructor(mongoURL) {
        if(!mongoURL) throw new Error('Jelly-Djs Error: Please provided a mongoDB URl')
this.mongoURL = mongoURL;
    }
    
    async set(key, value) {
        console.log(this.mongoURL)
        let data = new Database(this.mongoURL);
        data.set(key, value);
        
    }
    async fetch(key) {
        let data = new Database(this.mongoURL);
        let value = await data.fetch(key);
        return value;
    }
    async add(key, value) {
        if(!key || !value) throw new Error('JElly-djs Error: Provide a key or value');
        let m = await data.fetch(key) || 0;
        if(typeof m !== 'number') throw new Error(`JElly-djs Error: Existing value must be a number, got ${typeof m}`);
        if(typeof value !== 'number') throw new Error('JElly-djs Error: Value must be a number!');

        let data = new Database(this.mongoURL);
        data.add(key, value);


    }
    async sub(key, value) {
        if(!key || !value) throw new Error('JElly-djs Error: Provide a key or value');
        let m = await data.fetch(key) || 0;
        if(typeof m !== 'number') throw new Error(`JElly-djs Error: Existing value must be a number, got ${typeof m}`);
        if(typeof value !== 'number') throw new Error('JElly-djs Error: Value must be a number!');

        let data = new Database(this.mongoURL);
        data.subtract(key, value);
    }
    async push(key, value) {
        if(!key || !value) throw new Error('JElly-djs Error: Provide a key or value');
        let m = await data.fetch(key) || [];
        if(typeof m !== 'array') throw new Error(`JElly-djs Error: Existing value must be an array, got ${typeof m}`);
        if(typeof value !== 'number') throw new Error('JElly-djs Error: Value must be a number!');

    
    
}

module.exports = db;
