const fetch = require('node-fetch')

module.exports = async(message, client, country) => {
 let url;
    if(!country) {
        country = ''
        url = 'https://covid19.mathdro.id/api'
    } else {
        url = `https://covid19.mathdro.id/api/countries/${country}`
    }


    try {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let confirmed = data.confirmed.value.toLocaleString()
            let recovered = data.recovered.value.toLocaleString()
            let deaths = data.deaths.value.toLocaleString()

            const embed = new Discord.MessageEmbed()
            .setTitle(`Worldwide COVID-19 Stats 🌎`)
            .addField('Confirmed Cases', confirmed)
            .addField('Recovered', recovered)
            .addField('Deaths', deaths)

            message.channel.send({embeds: [embed]})
        }).catch(e => {
            return console.log(`Jelly-Djs Error: ${e}`)
        })
    } catch(i) {
        return console.log(`Jelly-Djs Error: ${i}`)
    }
}