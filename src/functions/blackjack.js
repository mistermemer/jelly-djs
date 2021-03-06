const Discord = require("discord.js")
const shuffle = require("shuffle-array")
const games = new Set();

/** 
    * @param {Discord.Message} message The Message Object sent by the user
    * @param {Discord.Client} client The Discord Client
    * @returns String
    * @async
    * @example
    * const Discord = require("discord.js")
    * const blackjack = require("discord-blackjack")
    * const client = new Discord.Client(ws: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"])
    * const prefix = "-"
    * const token = "TOKEN_GOES_HERE"
    * 
    * client.on("ready", () => {
    *   console.log("Bot has logged in!")
    * })
    * 
    * client.on("message", async message => {
    *   if (message.author.bot || !message.content.startsWith("prefix")) return
    * 
    *   if (message.content == `${prefix}blackjack` || message.content == `${prefix}bj`) {
    *       let game = await blackjack(message, client)
    *       let result = game.result
    *       if (result == "Win") {
    *           // do win stuff here
    *       } else if (result == "Tie") {
    *           // do tie stuff here
    *       } else if (result == "Lose") {
    *           // do lose stuff here
    *       } else if (result == "Double Win") {
    *           // do double-down here
    *       }
    *   }
    * })
    * 
    * client.login(token)
*/

module.exports = async (message, client, options) => {
    let normalembed = false
    let copiedEmbed = {
        content: "",
        value: ""
    }
    let method = "None"
    if (!message) throw new Error("[DETAILS_NOT_PROVIDED]: The Message Object was not provided!")
    if (!client) throw new Error("[DETAILS_NOT_PROVIDED]: The Discord Client Object was not provided!")
    if (!options) options = {}
    if (typeof options != "object") throw new Error("[INVALID_DETAILS]: Options is expected to be an object!")
    if (!options.resultEmbed && options.resultEmbed != false) options.resultEmbed = true
    if (!options.normalEmbed && options.normalEmbed != false) options.normalEmbed = true
    if (!options.doubledown && options.doubledown != false) options.doubledown = true
    if (!options.split && options.split != false) options.split = true
    if (options.normalEmbed == false) {
        if (!options.normalEmbedContent) throw new Error("[DETAILS_NOT_PROVIDED]: The Embed object was not provided!")
        normalembed = options.normalEmbedContent
    }
    if (!message.id || !message.channel || !message.channel.id || !message.author) throw new Error("[INVALID_DETAILS]: The Message Object was invalid!")
    if (!client.user.id || !client.user) throw new Error("[INVALID_DETAILS]: The Discord Client Object was invalid!")
    if (!message.guild || !message.guild.me) throw new TypeError("[WRONG_USAGE]: This cannot be used in DMs!")

    if (games.has(message.author.id)) {
        return message.channel.send("You are already playing a game!")
    }
    games.add(message.author.id)
    try {
        let DECK = [
            { suit: 'clubs', rank: 'A', value: [1, 11], emoji: "??????" },
            { suit: 'clubs', rank: '2', value: 2, emoji: "??????" },
            { suit: 'clubs', rank: '3', value: 3, emoji: "??????" },
            { suit: 'clubs', rank: '4', value: 4, emoji: "??????" },
            { suit: 'clubs', rank: '5', value: 5, emoji: "??????" },
            { suit: 'clubs', rank: '6', value: 6, emoji: "??????" },
            { suit: 'clubs', rank: '7', value: 7, emoji: "??????" },
            { suit: 'clubs', rank: '8', value: 8, emoji: "??????" },
            { suit: 'clubs', rank: '9', value: 9, emoji: "??????" },
            { suit: 'clubs', rank: '10', value: 10, emoji: "??????" },
            { suit: 'clubs', rank: 'J', value: 10, emoji: "??????" },
            { suit: 'clubs', rank: 'Q', value: 10, emoji: "??????" },
            { suit: 'clubs', rank: 'K', value: 10, emoji: "??????" },

            { suit: 'diamonds', rank: 'A', value: [1, 11], emoji: "????????????????????????" },
            { suit: 'diamonds', rank: '2', value: 2, emoji: "??????" },
            { suit: 'diamonds', rank: '3', value: 3, emoji: "??????" },
            { suit: 'diamonds', rank: '4', value: 4, emoji: "??????" },
            { suit: 'diamonds', rank: '5', value: 5, emoji: "??????" },
            { suit: 'diamonds', rank: '6', value: 6, emoji: "??????" },
            { suit: 'diamonds', rank: '7', value: 7, emoji: "??????" },
            { suit: 'diamonds', rank: '8', value: 8, emoji: "??????" },
            { suit: 'diamonds', rank: '9', value: 9, emoji: "??????" },
            { suit: 'diamonds', rank: '10', value: 10, emoji: "??????" },
            { suit: 'diamonds', rank: 'J', value: 10, emoji: "??????" },
            { suit: 'diamonds', rank: 'Q', value: 10, emoji: "??????" },
            { suit: 'diamonds', rank: 'K', value: 10, emoji: "??????" },

            { suit: 'hearts', rank: 'A', value: [1, 11], emoji: "??????" },
            { suit: 'hearts', rank: '2', value: 2, emoji: "??????" },
            { suit: 'hearts', rank: '3', value: 3, emoji: "??????" },
            { suit: 'hearts', rank: '4', value: 4, emoji: "??????" },
            { suit: 'hearts', rank: '5', value: 5, emoji: "??????" },
            { suit: 'hearts', rank: '6', value: 6, emoji: "??????" },
            { suit: 'hearts', rank: '7', value: 7, emoji: "??????" },
            { suit: 'hearts', rank: '8', value: 8, emoji: "??????" },
            { suit: 'hearts', rank: '9', value: 9, emoji: "??????" },
            { suit: 'hearts', rank: '10', value: 10, emoji: "??????" },
            { suit: 'hearts', rank: 'J', value: 10, emoji: "??????" },
            { suit: 'hearts', rank: 'Q', value: 10, emoji: "??????" },
            { suit: 'hearts', rank: 'K', value: 10, emoji: "??????" },

            { suit: 'spades', rank: 'A', value: [1, 11], emoji: "??????" },
            { suit: 'spades', rank: '2', value: 2, emoji: "??????" },
            { suit: 'spades', rank: '3', value: 3, emoji: "??????" },
            { suit: 'spades', rank: '4', value: 4, emoji: "??????" },
            { suit: 'spades', rank: '5', value: 5, emoji: "??????" },
            { suit: 'spades', rank: '6', value: 6, emoji: "??????" },
            { suit: 'spades', rank: '7', value: 7, emoji: "??????" },
            { suit: 'spades', rank: '8', value: 8, emoji: "??????" },
            { suit: 'spades', rank: '9', value: 9, emoji: "??????" },
            { suit: 'spades', rank: '10', value: 10, emoji: "??????" },
            { suit: 'spades', rank: 'J', value: 10, emoji: "??????" },
            { suit: 'spades', rank: 'Q', value: 10, emoji: "??????" },
            { suit: 'spades', rank: 'K', value: 10, emoji: "??????" },
        ];

        let RESULTS = "Unknown"

        let NEWDECKS = shuffle(DECK)

        // all the variables
        let addco = ""
        for (let a = 0; a < NEWDECKS.length; a++) {
            if (NEWDECKS[a].rank == "A") {
                NEWDECKS[a].value = 11
            }
        }

        if (NEWDECKS[0].rank == "A") {
            addco = "Soft "
            if (NEWDECKS[2].rank == "A") {
                NEWDECKS[2].value = 1
            }
        }

        if (NEWDECKS[2].rank == "A") {
            addco = "Soft "
        }

        if (NEWDECKS[1].rank == "A") {
            if (NEWDECKS[3].rank == "A") {
                NEWDECKS[3].value = 1
            }
        }


        let startAt = 5

        let yourdeck = [NEWDECKS[0], NEWDECKS[2]].sort((a, b) => a.value - b.value)
        let yourrank = [NEWDECKS[0].rank, NEWDECKS[2].rank]
        let youremoji = [NEWDECKS[0].emoji, NEWDECKS[2].emoji]
        let yourcontent = [`${NEWDECKS[0].emoji} ${NEWDECKS[0].rank}`, `${NEWDECKS[2].emoji} ${NEWDECKS[2].rank}`]
        let value = NEWDECKS[0].value + NEWDECKS[2].value
        let dealerdeck = [NEWDECKS[1], NEWDECKS[3]].sort((a, b) => a.value - b.value)
        let dealerrank = [NEWDECKS[1].rank, NEWDECKS[3].rank]
        let dealeremoji = [NEWDECKS[1].emoji, NEWDECKS[3].emoji]
        let dealercontent = [`${NEWDECKS[1].emoji} ${NEWDECKS[1].rank}`, `${NEWDECKS[3].emoji} ${NEWDECKS[3].rank}`]
        let dvalue = dealerdeck[0].value + dealerdeck[1].value
        let usertag = message.author.tag
        let avatar = message.author.displayAvatarURL()
let hitbutton = new Discord.MessageButton()
hitbutton.setStyle('SUCCESS')
hitbutton.setLabel('Hit')
hitbutton.setCustomId('hitbutton')
let splitbtn = new Discord.MessageButton()
splitbtn.setStyle('PRIMARY')
splitbtn.setLabel('Split')
splitbtn.setCustomId('splitbtn')
let sbutton = new Discord.MessageButton()
sbutton.setStyle('PRIMARY')
sbutton.setLabel('Stand')
sbutton.setCustomId('sbutton')
let dbtn = new Discord.MessageButton()
dbtn.setStyle('PRIMARY')
dbtn.setLabel('Double Down')
dbrn.setCustomId('dd')
let endbutton = new Discord.MessageButton()
endbutton.setStyle('DANGER')
endbutton.setLabel('End')
endbutton.setCustomId('endbutton')
let row = new Discord.MessageActionRow()
row.addComponents(hitbutton, sbutton, endbutton);


        if (normalembed == false) {
            normalembed = new Discord.MessageEmbed()
                .setAuthor(usertag, avatar)
                .setColor("RANDOM")
                .addField(`Your Hand`, `Cards: [\`${yourcontent.join("\`](https://google.com) [\`")}\`](https://google.com)\nTotal: \`${addco}${value}\``, true)
                .addField(`${client.user.username}'s Hand`, `Cards: [\`${dealerdeck[0].emoji} ${dealerdeck[0].rank}\`](https://google.com) \` ? \`\nTotal: \` ? \``, true)
                .setTitle(`Blackjack Game`)
                        } else {
            normalembed.fields[0].value = normalembed.fields[0].value.replace(`{yourcontent}`, `[\`${yourcontent.join("\`](https://google.com) [\`")}\`](https://google.com)`).replace("{yvalue}", `${addco}${value}`)
            normalembed.fields[1].value = normalembed.fields[1].value.replace(`{dcontent}`, `[\`${dealerdeck[0].emoji} ${dealerdeck[0].rank}\`](https://google.com)   \` ? \``).replace("{dvalue}", `?`)
            copiedEmbed.content = `[\`${yourcontent.join("\`](https://google.com) [\`")}\`](https://google.com)`
            copiedEmbed.value = `${addco}${value}`
        }

        let winembed = new Discord.MessageEmbed()
            .setAuthor(usertag, avatar)
            .setColor("#008800")
            .addField(`Your Hand`, `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${addco}${value}\``, true)
            .addField(`${client.user.username}'s Hand`, `Cards: [\`${dealercontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${dvalue}\``, true)
            .setTitle(`You won!`)

        let loseembed = new Discord.MessageEmbed()
            .setAuthor(usertag, avatar)
            .setColor("#880000")
            .addField(`Your Hand`, `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}](https://google.com)\`\nTotal: \`${addco}${value}\``, true)
            .addField(`${client.user.username}'s Hand`, `Cards: [\`${dealercontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${dvalue}\``, true)
            .setTitle(`You lost!`)

        let tieembed = new Discord.MessageEmbed()
            .setAuthor(usertag, avatar)
            .setColor("#888800")
            .addField(`Your Hand`, `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}](https://google.com)\`\nTotal: \`${addco}${value}\``, true)
            .addField(`${client.user.username}'s Hand`, `Cards: [\`${dealercontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${dvalue}\``, true)
            .setTitle(`It's a tie!`)

        let cancelembed = new Discord.MessageEmbed()
            .setAuthor(usertag, avatar)
            .setColor("#880000")
            .setTitle("Game Canceled")
            .setFooter("Auhh, please stay next time!")
            .setDescription("Game has succesfully been canceled!")

        let noResEmbed = new Discord.MessageEmbed()
            .setAuthor(usertag, avatar)
            .setTitle(`Game Ended`)
            .setDescription(`**${message.author.username}, your Game has Ended due to 30 seconds of Inactivity.**`)
            .setColor("RANDOM")

        let normalcontent = `Click the below buttons`
        let doubledown = `Click the below buttons`
        let split = `Click The below buttons`
        let content = normalcontent

        let answers1 = ["hitbutton", "sbutton", "endbutton"] // normalcontent
        let answers2 = ['hitbutton', 'sbutton', 'endbutton', 'dd'] // doubledown
        let answers3 = ["hitbutton", "sbutton", "endbutton", "splitbtn"] // split


        let filter1 = (m) => m.author.id == message.author.id && answers1.includes(m.customId.toLowerCase()) // answers1
        let filter2 = (m) => m.author.id == message.author.id && answers2.includes(m.customId.toLowerCase()) // answers2
        let filter3 = (m) => m.author.id == message.author.id && answers3.includes(m.customId.toLowerCase()) // answers3
        let filter = filter1

        let doubledtrue = false

        let responsenow = "h"

        if (value == 21) {
            responsenow = "s"
            if (dvalue == 21) {
                if (options.resultEmbed == true) {
                    message.channel.send({ embeds: [tieembed] })
                }
                method = "Tie"
                RESULTS = "Tie"
            } else {
                if (options.resultEmbed == true) {
                    message.channel.send({ embeds: [winembed] })
                }
                method = "Blackjack"
                RESULTS = "Win"
            }
        }

        if (addco != "Soft ") {
            if (value == 9 || (value == 10 || value == 11 && dealerdeck[1].value < 10)) {
                content = doubledown
                filter = filter2
row = new Discord.MessageActionRow()
Row.addComponents(hitbutton, sbutton, splitbtn, endbutton)

            } else if (yourdeck[0].rank == yourdeck[1].rank) {
                content = split
                filter = filter3
row = new Discord.MessageActionRow()
row.addComponents(hitbutton, sbutton, dbtn, endbutton)
            }
        }

        if (RESULTS == "Unknown") {
            let ori = message.channel.send({ content: content, embeds: [normalembed], components: [row]})
            normalembed.fields[0].value = normalembed.fields[0].value.replace(copiedEmbed.value, `{yvalue}`)
           let collector =  await ori.createMessageComponentCollector({
                filter,
                max: 1,
                time: 30000
                 })
collector.on('collect', async (allresponses) => {
                    if (!allresponses.size) {
                        responsenow = "timeout"
                    } else {
                        let theanswer = String(allresponses.customId)
                        if (["hitbutton"].includes(theanswer)) {
                            let dealCard = NEWDECKS[startAt - 1]
                            yourdeck.push(dealCard)
                            if (dealCard.rank == "A") {
                                if (yourrank.includes("A")) {
                                    dealCard.value = 1
                                } else {
                                    dealCard.value = 11
                                    addco = "Soft "
                                }
                            }
                            value = value + dealCard.value
                            yourcontent.push(`${dealCard.emoji} ${dealCard.rank}`)
                            yourrank.push(dealCard.rank)
                            youremoji.push(dealCard.emoji)
                            let endtrue = false
                            if (value >= 21) {
                                if (addco == "Soft ") {
                                    addco = ""
                                    for (let e = 0; e < yourdeck.length; e++) {
                                        if (yourdeck[e].rank == "A") {
                                            yourdeck[e].value = 1
                                            value = value - 10
                                        }
                                    }
                                } else {
                                    if (dealCard.rank != "A") {
                                        endtrue = true
                                        responsenow = "s"
                                    } else {
                                        addco = "Soft "
                                    }
                                }

                            }

                            if (endtrue == false) {
                                if (value >= 21) {
                                    responsenow = "s"
                                } else {
                                    responsenow = "h"
                                }
                            }

                            if (responsenow != "s") {
                                if (options.normalEmbed == true) {
                                    normalembed.fields[0].value = `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${addco}${value}\``
                                } else {
                                    normalembed.fields[0].value = normalembed.fields[0].value.replace(copiedEmbed.content, `[\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)`).replace(`{yvalue}`, `${addco}${value}`)
                                    copiedEmbed.content = `[\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)`
                                    copiedEmbed.value = `${addco}${value}`
                                }
ori.edit({components: []})
                                ori = await message.channel.send({ content: normalcontent, embeds: [normalembed], components: [row]})
                                normalembed.fields[0].value = normalembed.fields[0].value.replace(copiedEmbed.value, `{yvalue}`)
                            }
                            startAt++
                        } else if (["endbutton"].includes(theanswer)) {
                            responsenow = "cancel"
                        } else if (['sbutton'].includes(theanswer)) {
                            responsenow = "s"
                        } else if (["dd"].includes(theanswer)) {
                            responsenow = "dd"
                        } else if (['splitbtn'].includes(theanswer)) {
                            responsenow = "split"
                        }
                    }
collector.stop()
                }
            )
collector.on('end', async(i) => {
})
        }

        while (responsenow == "dd") {
            doubledtrue = true
            let dealCard = NEWDECKS[startAt - 1]
            yourdeck.push(dealCard)
            if (dealCard.rank == "A") {
                if (yourrank.includes("A")) {
                    dealCard.value = 1
                } else {
                    dealCard.value = 11
                }
            }
            yourcontent.push(`${dealCard.emoji} ${dealCard.rank}`)
            yourrank.push(dealCard.rank)
            youremoji.push(dealCard.emoji)
            value = value + dealCard.value
            responsenow = "s"
        }

        while (responsenow == "split") {
            let deletedi = yourdeck.pop()
            value = value - deletedi.value
            yourrank.pop()
            youremoji.pop()
            yourcontent.pop()
            if (options.normalEmbed == true) {
                normalembed.fields[0].value = `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${addco}${value}\``
            } else {
                normalembed.fields[0].value = normalembed.fields[0].value.replace(copiedEmbed.content, `[\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)`).replace(`{yvalue}`, `${addco}${value}`)
                copiedEmbed.content = `[\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)`
                copiedEmbed.value = `${addco}${value}`
            }
            ori = message.channel.send({ content: normalcontent, embeds: [normalembed], components: [row]})
            normalembed.fields[0].value = normalembed.fields[0].value.replace(copiedEmbed.value, `{yvalue}`)
            responsenow = "h"
        }

        while (responsenow == "h") {

           let = collector1 = await ori.createMessageComponentCollector({
                filter1,
                max: 1,
                time: 30000 
            })
collector1.on('collect', async allresponses => {
                if (!allresponses.size) {
                    responsenow = "timeout"
                } else {
                    let theanswer = String(allresponses.customId)
                    if (["hitbutton"].includes(theanswer)) {
                        let dealCard = NEWDECKS[startAt - 1]
                        yourdeck.push(dealCard)
                        if (dealCard.rank == "A") {
                            if (yourrank.includes("A")) {
                                dealCard.value = 1
                            } else {
                                dealCard.value = 11
                                addco = "Soft "
                            }
                        }
                        value = value + dealCard.value
                        yourcontent.push(`${dealCard.emoji} ${dealCard.rank}`)
                        yourrank.push(dealCard.rank)
                        youremoji.push(dealCard.emoji)
                        let endtrue = false
                        if (value >= 21) {
                            if (addco == "Soft ") {
                                addco = ""
                                for (let usu = 0; usu < yourdeck.length; usu++) {
                                    if (yourdeck[usu].rank == "A") {
                                        yourdeck[usu].value = 1
                                        value = value - 10
                                    }
                                }

                            } else {
                                if (dealCard.rank != "A") {
                                    endtrue = true
                                    responsenow = "s"
                                } else {
                                    addco = "Soft "
                                }
                            }
                        }
                        if (endtrue == false) {
                            if (value >= 21) {
                                responsenow = "s"
                            } else {
                                responsenow = "h"
                            }
                        }

                        if (responsenow != "s") {
                            if (options.normalEmbed == true) {
                                normalembed.fields[0].value = `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${addco}${value}\``
                            } else {
                                normalembed.fields[0].value = normalembed.fields[0].value.replace(copiedEmbed.content, `[\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)`).replace(`{yvalue}`, `${addco}${value}`)
                                copiedEmbed.content = `[\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)`
                                copiedEmbed.value = `${addco}${value}`
                            }
ori.edit({components: []})
                            ori = message.channel.send({ content: normalcontent, embeds: [normalembed], components: [row]})
                            normalembed.fields[0].value = normalembed.fields[0].value.replace(copiedEmbed.value, `{yvalue}`)
                        }
                        startAt++
                    } else if (["endbutton"].includes(theanswer)) {
                        responsenow = "cancel"
                    } else {
                        responsenow = "s"
                    }
collector.stop()
                }
            })
collector1.on('end', async(i) => {
})

        }

        while (responsenow == "s") {
            games.delete(message.author.id)
            while (dvalue < 17) {
                let newcard = dealerdeck.push(NEWDECKS[startAt - 1])
                dealercontent.push(`${NEWDECKS[startAt - 1].emoji} ${NEWDECKS[startAt - 1].rank}`)
                dealerrank.push(NEWDECKS[startAt - 1].rank)
                dealeremoji.push(NEWDECKS[startAt - 1].emoji)
                if (newcard.rank == "A") {
                    if (dealerrank.includes("A")) {
                        NEWDECKS[startAt - 1].value = 1
                    } else {
                        NEWDECKS[startAt - 1].value = 11
                    }
                }
                dvalue = dvalue + NEWDECKS[startAt - 1].value
                if (dvalue > 21 && dealerrank.includes("A")) {
                    let unu = 0
                    dealerdeck.forEach(e => {
                        if (e.rank == "A") {
                            dealerdeck[unu].value = 1
                        }
                        unu++
                    })
                }
                startAt++
            }
            responsenow = "INVALID"

            if (value > 21 || (dvalue <= 21 && value < dvalue)) {
                if (value > 21) {
                    method = "Busted"
                } else if (dvalue == 21) {
                    method = "Dealer reached 21"
                } else {
                    method = "Dealer had more"
                }
                loseembed.fields[0].value = `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${addco}${value}\``
                loseembed.fields[1].value = `Cards: [\`${dealercontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${dvalue}\``
                if (options.resultEmbed == true) {
                    message.channel.send({ embeds: [loseembed] })
                }
                RESULTS = "Lose"
                if (doubledtrue == true) {
                    RESULTS = "Double Lose"
                }
            } else if (value == 21 || value > dvalue || dvalue > 21) {
                if (value == 21) {
                    method = "Blackjack"
                } else if (dvalue > 21) {
                    method = "Dealer Bust"
                } else {
                    method = "Player had more"
                }
                winembed.fields[0].value = `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${addco}${value}\``
                winembed.fields[1].value = `Cards: [\`${dealercontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${dvalue}\``
                if (options.resultEmbed == true) {
                    message.channel.send({ embeds: [winembed] })
                }
                RESULTS = "Win"
                if (doubledtrue == true) {
                    RESULTS = "Double Win"
                }
            } else if (value == dvalue) {
                method = "Tie"
                tieembed.fields[0].value = `Cards: [\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${addco}${value}\``
                tieembed.fields[1].value = `Cards: [\`${dealercontent.join("`](https://google.com)   [`")}\`](https://google.com)\nTotal: \`${dvalue}\``
                if (options.resultEmbed == true) {
                    message.channel.send({ embeds: [tieembed] })
                }
                RESULTS = "Tie"
            } else {
                let errEmbed = new Discord.MessageEmbed()
                    .setAuthor(usertag, avatar)
                    .setTitle("An Error Occured")
                    .setDescription("Uh oh! An error occured! Please join our server by clicking [here](https://discord.gg/DcC4xFfTnB)")
                    .setFooter("Oops")
                    .setColor("#FF0000")
                if (options.resultEmbed == true) {
                    message.channel.send({ embed: errEmbed })
                }
                RESULTS = "ERROR"
            }
        }


        while (responsenow == "cancel") {
            games.delete(message.author.id)
            if (options.resultEmbed == true) {
                message.channel.send({ embeds: [cancelembed] })
            }
            responsenow = "INVALID"
            RESULTS = "Cancel"
        }

        while (responsenow == "timeout") {
            games.delete(message.author.id)
            if (options.resultEmbed == true) {
                message.channel.send({ embeds: [noResEmbed] })
            }
            RESULTS = "Timeout"
            responsenow = "INVALID"
        }

        let FINALRESULTS = {
            result: RESULTS,
            method: method,
            yvalue: `${addco}${value}`,
            dvalue: dvalue,
            ycontent: `[\`${yourcontent.join("`](https://google.com)   [`")}\`](https://google.com)`,
            dcontent: `[\`${dealercontent.join("`](https://google.com)   [`")}\`](https://google.com)`,
            yrank: yourrank,
            yemoji: youremoji,
            drank: dealerrank,
            demoji: dealeremoji
        }
        

        return FINALRESULTS
    } catch (e) {
        console.log(`${e.message}`)
    }
}
