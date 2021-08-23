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
    async get(key) {
        let data = new Database(this.mongoURL);
        let value = await db.fetch(key);
        return value;
    }
    
    
}

module.exports = db;
