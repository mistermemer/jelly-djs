function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let results = '';
const Discord = require('discord.js');
module.exports = async (message, client, options) => {
    if (!options) options = {
        resultEmbed = true
    }
    let emb = options.resultEmbed;
    let rol1 = randomNum(6, 25);
    let rol2 = randomNum(6, 25);

    if (rol1 < rol2) {
        let embed = new Discord.MessageEmbed()
            .setTitle(`You have been Busted xD`)
            .setDescription(`I rolled more than you haha!`)
            .addField(`My's Roll`, `\`${rol2}\`♣️`)
            .addField(`Your Roll`, `\`${rol1}\`♣️`)
            .addField(`Ammount Lost`, `\`${amt}\`${ic}`)
            .setColor('RED')
        if (emb) {
            message.reply({ embeds: [embed] })
        }
        results = 'Loose';
    } else if (rol1 > rol2) {
        let embed = new Discord.MessageEmbed()

            .setTitle(`I have been Busted xD`)

            .setDescription(`You rolled more than me ..sed!`)

            .addField(`My's Roll`, `\`${rol2}\`♣️`)

            .addField(`Your Roll`, `\`${rol1}\`♣️`)
            .setColor('GREEN')


        if (emb) {
            message.reply({ embeds: [embed] })
        }
        results = 'Win';
    } else if (rol1 = rol2) {
        let embed = new Discord.MessageEmbed()
            .setTitle(`Dang it's a tie!`)
            .setDescription(`Noice we both rolled the same!`)
            .addField(`My's Roll`, `\`${rol2}\`♣️`)
            .addField(`Your Roll`, `\`${rol1}\`♣️`)
            .setColor('YELLOW')
        if (emb) {
            message.reply({ embeds: [embed] })
        }
        results = 'Tie';
    }

    let final = {
        outpout = result,
    }
    return final;

}
