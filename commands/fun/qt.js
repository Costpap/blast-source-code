const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class qt extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'qt',
            group: 'fun',
            memberName: 'qt',
            description: 'qt'
        })
    }
async run(message) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to call someone a qt.`)
else

var args = message.content.split(' ').slice(1);
let user = message.mentions.members.first() || message.guild.members.get(args[0])
let everyone = args[0]

if(!user && everyone !== `everyone`) return message.channel.send(`You need to call someone a qt, please \`ping\` someone or use their \`ID\`!`)
else

var nou = new Discord.RichEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .addField(`QT Tag`, message.author)
    .addField(`ID`, message.author.id)
    .setColor(`#ff00bb`)
    .setTimestamp()

    let id = ''
    let url = ''
    let tag = ''

    if(user) {
        console.log(`fail`)
        id = user.id
        url = user.user.avatarURL
        tag = user.user.tag
    }


    if(!user) {
        console.log(`success`)
        user = `@${everyone}`
        id = message.guild.id
        url = null
        tag = `everyone#0000`
    } else

message.delete()
if(user !== message.client.user) return message.channel.send(nou)
else
var embed = new Discord.RichEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(tag, url)
    .addField(`QT Tag`, user)
    .addField(`ID`, id)
    .setColor(`#ff00bb`)
    .setTimestamp()

message.channel.send(embed)

}}

module.exports = qt;