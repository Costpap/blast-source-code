const Discord = require('discord.js')
const Commando = require('discord.js-commando')
const botconfig = require('./botconfig.json')
const pkg = require('./package.json')

var client = new Commando.Client({
    disableEveryone: true,
    owner: `${botconfig.owner}`,
    unknownCommandResponse: false,
    commandPrefix: `${botconfig.prefix}`
})

client.login(botconfig.token)

require("./util/eventhandler")(client)
client.registry.registerGroup('fun', 'Fun');
client.registry.registerGroup('util','Util');
client.registry.registerDefaultTypes()
client.registry.registerDefaultGroups();
client.registry.registerDefaultCommands({
  help: false,
  prefix: false,
  eval_: false,
  ping: false
});
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('guildCreate', async (guild) => {
    if(client.guilds.size > 1) {
     guild.leave()
     throw new Error(`There is a guild limit of 1, just for the server I'm supposed to be in. Leaving guild.`)
  }})
  
  client.on('ready', async () => {
    if(botconfig.prefix.length >= 5) {
    client.destroy()
     throw new Error(`Prefix too long, shutting bot down.`)
  }else return})

    
  client.on('ready', async () => {
    if(!client.guilds.get(botconfig.server)) {
    client.destroy()
     throw new Error(`Can't find the guild ID I was provided with! Shutting bot down.`)
  }else return})

  client.on('message', async (msg) => {
    if(msg.content !== `${botconfig.prefix}version`) return
    else
    msg.delete()
    client.user.setActivity(`Version ${pkg.version}`, {type: "PLAYING"})
  })

  client.on('message', async (msg) => {
    if(msg.author.bot) return
    else
    if(!msg.content.includes(`@someone`)) return
    else
    if(msg.channel instanceof Discord.DMChannel) return
    else
    var content = msg.content
    let count = (content.match(/\@someone+/g) || []).length;
    console.log(count)
    if(count > 6 ) return
    else
    while (count > 0) {
      count--
      msg.channel.send(`\`${msg.guild.members.random().user.tag}\``)
    }
  
  })