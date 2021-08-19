const Discord = require('discord.js');
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

module.exports = async(message, client) => {
    try {

        let button = new Discord.MessageButton()
        button.setStyle('SUCCESS')
        button.setEmoji('✔️')
        button.setCustomId('okbtn')
        let btn2 = new Discord.MessageButton()
        .setStyle('SUCCESS')
        .setEmoji('❌')
        .setCustomId('btn2')        
        let btn3 = new Discord.MessageButton()
        .setStyle('SUCCESS')
        .setEmoji('❌')
        .setCustomId('btn3')
        let btn4 = new Discord.MessageButton()
        .setStyle('SUCCESS')
        .setEmoji('❌')
        .setCustomId('btn4')
        let btn5 = new Discord.MessageButton()
        .setStyle('SUCCESS')
        .setEmoji('❌')
        .setCustomId('btn5')
        let btn6 = new Discord.MessageButton()
        .setStyle('SUCESS')
        .setEmoji('❌')
        .setCustomId('btn6')
        let arr = [];
        arr.push(button, btn2, btn3, btn4, btn5, btn6)
        let array = shuffle(arr);
        

        let row = new Discord.MessageActionRow();
        row.addComponents(button)
        let msg = await message.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                .setTitle(`Click the button!`)
                .setColor('RANDOM')
                .setDescription(`Click it fast!!`)
            ], components: [row]})

            const filter = (interaction) => interaction.customId === 'button' && interaction.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({ filter, time: 40000 });
            collector.on('collect', async (i) => {
            let time1 = msg.createdTimestamp - i.createdTimestamp;
            msg.channel.send(`Wow you clicked the button in ${time1}ms!`)
            
            })
    } catch (e) {
console.log(`Jelly-Djs Error: ${e}`)
    }
}