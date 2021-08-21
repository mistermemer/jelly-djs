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
        btn2.setStyle('SUCCESS')
        btn2.setEmoji('❌')
        btn2.setCustomId('btn2')        
        let btn3 = new Discord.MessageButton()
        btn3.setStyle('SUCCESS')
        btn3.setEmoji('❌')
        btn3.setCustomId('btn3')
        let btn4 = new Discord.MessageButton()
        btn4.setStyle('SUCCESS')
        btn4.setEmoji('❌')
        btn4.setCustomId('btn4')
        let btn5 = new Discord.MessageButton()
        btn5.setStyle('SUCCESS')
        btn5.setEmoji('❌')
        btn5.setCustomId('btn5')
        let btn6 = new Discord.MessageButton()
        btn6.setStyle('SUCCESS')
        btn6.setEmoji('❌')
        btn6.setCustomId('btn6')
        let arr = [];
        arr.push(button, btn2, btn3, btn4, btn5, btn6);
        let array = shuffle(arr);


        

        let row1 = new Discord.MessageActionRow();
        let arow1 = array.slice(0, 3)
        arow1.forEach((g) => {
        row1.addComponents(g)
        })
        let row2 = new Discord.MessageActionRow();
        let arow2 = array.slice(3, 6);
        arow2.forEach((i) => {


        row2.addComponents(i)
        })
        row2.addComponents(array[array.length - 1])
        let msg = await message.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                .setTitle(`Click the button!`)
                .setColor('RANDOM')
                .setDescription(`Click it fast!!`)
            ], components: [row1, row2]})

            const filter = (interaction) => interaction.customId === 'okbtn' && interaction.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({ filter, time: 40000 });
            collector.on('collect', async (i) => {
            let time1 = i.createdTimestamp - msg.createdTimestamp;
            msg.channel.send(`Wow you clicked the button in ${time1}ms!`)
            
            })
    } catch (e) {
console.log(`Jelly-Djs Error: ${e}`)
    }
}