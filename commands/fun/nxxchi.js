const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);
const pkg = require('../../package.json')

class nooc extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'nxxchi',
            group: 'fun',
            memberName: 'nxxchi',
            description: 'nxxchi'
        })
    }
async run(message) {
if(message.author.id !== `329023088517971969`) return
else
if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else

var embed = new Discord.RichEmbed()
    .setTitle(`Help Command`,true)
    .setAuthor(`Page 1 (1/3)`)
    .addField(`Prefix`, `**${botconfig.prefix}**`,true)
    .addField(`Exclusive to`, `**${message.client.guilds.get(botconfig.server).name}**`,true)
    .addField(`Version`, `**${pkg.version}**`)
    .addField(`Role required`, `<>`,true)
    .addBlankField()
    .addField(`**${botconfig.prefix}test** <test>`, `1`, true)
    .setFooter(``)
    .setColor(`#f53220`)
    .setTimestamp()

    var embed2 = new Discord.RichEmbed()
    .setTitle(`Help Command`,true)
    .setAuthor(`Page 2 (2/3)`)
    .addField(`Prefix`, `**${botconfig.prefix}**`,true)
    .addField(`Exclusive to`, `**${message.client.guilds.get(botconfig.server).name}**`,true)
    .addField(`Version`, `**${pkg.version}**`)
    .addField(`Role required`, `<>`,true)
    .addBlankField()
    .addField(`**${botconfig.prefix}test** <test>`, `2`, true)
    .setFooter(``)
    .setColor(`#f53220`)
    .setTimestamp()

    var embed3 = new Discord.RichEmbed()
    .setTitle(`Help Command`,true)
    .setAuthor(`Page 3 (3/3)`)
    .addField(`Prefix`, `**${botconfig.prefix}**`,true)
    .addField(`Exclusive to`, `**${message.client.guilds.get(botconfig.server).name}**`,true)
    .addField(`Version`, `**${pkg.version}**`)
    .addField(`Role required`, `<>`,true)
    .addBlankField()
    .addField(`**${botconfig.prefix}test** <test>`, `3`, true)
    .setFooter(``)
    .setColor(`#f53220`)
    .setTimestamp()

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

module.exports = nooc;