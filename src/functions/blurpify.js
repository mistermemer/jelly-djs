const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports.run = async (msg , bot) => {
    try {
fetch(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${msg.author.avatarURL()}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle(`Let's Go Blurple!`)
            .setImage(data.message)
            .setTimestamp()
            message.channel.send({embeds: [embed]})
        })
    } catch (e) {
        console.log(`Jelly-Djs Error: ${e}`)
    }
}