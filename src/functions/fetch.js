const db = require('quick.db');
module.exports = async(key, value) => {
    let data = await db.fetch(key);
    return data;
}