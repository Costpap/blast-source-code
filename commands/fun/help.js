const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);
const pkg = require('../../package.json')

class help extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'fun',
            memberName: 'help',
            description: 'help'
        })
    }
async run(message) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to view help.`)
else

var embed = new Discord.RichEmbed()
    .setTitle(`Help Command`,true)
    .addField(`Prefix`, `**${botconfig.prefix}**`,true)
    .addField(`Exclusive to`, `**${message.client.guilds.get(botconfig.server).name}**`,true)
    .addField(`Version`, `**${pkg.version}**`)
    .addField(`Role required`, `<@&${message.guild.roles.get(botconfig.trustedroles[0]).id}>`,true)
    .addBlankField()
    .addField(`**${botconfig.prefix}dice** <number>`, `Roll the dice.`, true)
    .addField(`**${botconfig.prefix}hug** <user>`, `Hug someone.`, true)
    .addField(`**${botconfig.prefix}qt** <user>`, `Anonymously call someone a QT!`, true)
    .addField(`**${botconfig.prefix}remind** <timelength> <reason>`, `Remind yourself in a specific timelength to do a specific action.`, true)
    .addField(`**${botconfig.prefix}rep** <user>`, `Rep a user in stars`, true)
    .addField(`**${botconfig.prefix}rose** <user>`, `Give a rose to someone.`, true)
    .addField(`**${botconfig.prefix}help**`, `Shows this menu.`, true)
    .addField(`**${botconfig.prefix}kiss** <user>`, `Kiss someone.`, true)
    .addField(`**${botconfig.prefix}changelog**`, `Changelog for the bot!.`, true)
    .setColor(`#f53220`)
    .setTimestamp()
    .setFooter(`Friendly Commands (Page 1/3)`)

    var embed2 = new Discord.RichEmbed()
    .setTitle(`Help Command`,true)
    .addField(`Prefix`, `**${botconfig.prefix}**`,true)
    .addField(`Exclusive to`, `**${message.client.guilds.get(botconfig.server).name}**`,true)
    .addField(`Version`, `**${pkg.version}**`)
    .addField(`Role required`, `<@&${message.guild.roles.get(botconfig.trustedroles[0]).id}>`,true)
    .addBlankField()
    .addField(`**${botconfig.prefix}fight** <user>`, `Fight a user to express your anger`, true)
    .addField(`**${botconfig.prefix}flip** <user>`, `Flip a user.`, true)
    .addField(`**${botconfig.prefix}slap** <user>`, `Slap someone.`, true)
    .addField(`**${botconfig.prefix}cook** <user>`, `Cook someone.`, true)
    .addField(`**${botconfig.prefix}ban** <user> <reason>`, `Ban someone.`, true)
    .addField(`**${botconfig.prefix}bake** <user>`, `Bake someone.`, true)
    .addField(`**${botconfig.prefix}changelog**`, `Changelog for the bot!.`, true)
    .setColor(`#f53220`)
    .setTimestamp()
    .setFooter(`Feisty Commands (Page 2/3)`)

    var embed3 = new Discord.RichEmbed()
    .setTitle(`Help Command`,true)
    .addField(`Prefix`, `**${botconfig.prefix}**`,true)
    .addField(`Exclusive to`, `**${message.client.guilds.get(botconfig.server).name}**`,true)
    .addField(`Version`, `**${pkg.version}**`)
    .addField(`Role required`, `<@&${message.guild.roles.get(botconfig.trustedroles[0]).id}>`,true)
    .addBlankField()
    .addField(`(⚠) **${botconfig.prefix}kill** <user>`, `Put someone's name into a Minecraft death message.`, true)
    .addField(`(🚫) ~~**${botconfig.prefix}mock** <user>~~`, `~~Mock someone.~~`, true)
    .addField(`**${botconfig.prefix}changelog**`, `Changelog for the bot!.`, true)
    .setColor(`#f53220`)
    .setTimestamp()
    .setFooter(`Unsupported or Near Unsupported Commands (Page 3/3)`)

var m = await message.channel.send(embed)

    await m.react(`◀`)
    await m.react(`▶`)
    await m.react(`🗑`)

let pages = {
    1: embed,
    2: embed2,
    3: embed3
};

let page = 1;

const backfilter = (reaction, user) => reaction.emoji.name === `◀` && user.id === message.author.id
const forefilter = (reaction, user) => reaction.emoji.name === `▶` && user.id === message.author.id
const trasfilter = (reaction, user) => reaction.emoji.name === `🗑` && user.id === message.author.id

const back = m.createReactionCollector(backfilter, { time: 60000})
const fore = m.createReactionCollector(forefilter, { time: 60000})
const trash = m.createReactionCollector(trasfilter, { time: 60000})

 back.on('collect', async (r) => {
     if (page === 1) return
    page--;
    await r.remove(message.author.id)
    m.edit(pages[page])
    })
 fore.on('collect', async (r) => {
    if (page === pages.length) return
    page++;
    await r.remove(message.author.id)
    m.edit(pages[page])
 })
 trash.on('collect', async (r) => {
    m.delete()
 })

}}

module.exports = help;