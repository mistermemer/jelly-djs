const Discord = require('discord.js');
function shuffle(array) {
    var currentIndex = array.length, randomIndex;

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

module.exports = async (message, client) => {
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
        let btn7 = new Discord.MessageButton()
        btn7.setStyle('SUCCESS')
        btn7.setEmoji('❌')
        btn7.setCustomId('btn7')
        let btn8 = new Discord.MessageButton()
        btn8.setStyle('SUCCESS')
        btn8.setEmoji('❌')
        btn8.setCustomId('btn8')
        let btn9 = new Discord.MessageButton()
        btn9.setStyle('SUCCESS')
        btn9.setEmoji('❌')
        btn9.setCustomId('btn9')
        let arr = [];
        arr.push(button, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9)
        let array = shuffle(arr);






        let row1 = new Discord.MessageActionRow();
        row1.addComponents(array.slice(0, 3))
        let row2 = new Discord.MessageActionRow();
        row2.addComponents(array.slice(3, 6))
        let row3 = new Discord.MessageActionRow();
        row3.addComponents(array.slice(6, 9))

        row2.addComponents(array[array.length - 1])
        let msg = await message.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                    .setTitle(`Click the button!`)
                    .setColor('RANDOM')
                    .setDescription(`Click it fast!!`)
            ], components: [row1, row2, row3]
        })

        const filter = (interaction) => interaction.customId === 'okbtn' && interaction.user.id === message.author.id;
        const collector = msg.createMessageComponentCollector({ filter, time: 40000 });
        collector.on('collect', async (i) => {
            let time1 = i.createdTimestamp - msg.createdTimestamp;
            i.reply({
                embeds: [
                    new Discord.MessageEmbed()
                        .setTitle(`Click Complete`)
                        .setDescription(`You have succesfully clicked the button`)
                        .addField(`Time Taken`, `**${time1}ms**\n**${time1 / 1000}s**`)
                ],
                ephemeral: true
            })

        })
    } catch (e) {
        console.log(`Jelly-Djs Error: ${e}`)
    }
}