# JELLY-DJS 
### jelly-djs is a fun module with discord.js v13 support. For extra support you can join our discord server with this link - [DISCORD](https://discord.gg/YhpFXWwh7F)
#### Akinator Command - 
```js
const jelly = require('jelly-djs')
<client>.on('messageCreate', async(msg) => {
  jelly.akinator(msg, <client>)//client is the variable u use to define ur discord client.  
})
```
#### Meme command -
```js
const jelly = require('jelly-djs')
<client>.on('messageCreate', async(msg) => {
  jelly.meme(msg, <client>)//client is the variable u use to define ur discord client.  
})
```
#### Black Jack - 
```js
const { blackjack } = require("jelly-djs");
client.on('messageCreate', async(msg) => {
  if(msg.content === '!blackjack'){
        
        let game = blackjack(msg, client)
        
        switch (game.result) {
            
          case 'Win':
            // do win stuff here
            break;
          case 'Tie':
            // do tie stuff here
            break;
          case 'Lose':
            // do lose stuff here
            break;
          case 'Double Win':
            // do double win stuff here
            break;
          case 'Double Lose':
            // do double lose stuff here
            break;
          case 'ERROR':
            // do whatever you want
            break;
            
        }
  } 
    })
```
### Quick Click command - 
```js
const jelly = require('jelly-djs')
<client>.on('messageCreate', async(msg) => {
  jelly.quickclick(msg, <client>)//client is the variable u use to define ur discord client.  
})
```