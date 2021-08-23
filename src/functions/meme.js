const axios = require('axios');
const { MessageEmbed } = require('discord.js')
const got = require('got')
module.exports = async(message, client) => {
    try {
   if(!client) throw new Error('Jelly-Djs Error: Please provide a client.')

got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        let embed = new MessageEmbed()
        embed.setTitle(`${memeTitle}`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('RANDOM')
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
        message.channel.send({embeds: [embed]});
})
    } catch(e) {
        console.log(`Jelly-Djs Error: ${e}`)
    }
}