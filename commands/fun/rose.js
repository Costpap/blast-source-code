const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class rose extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'rose',
            group: 'fun',
            memberName: 'rose',
            description: 'rose'
        })
    }
async run(message) {

if(message.author.bot) return message.channel.send(`I'm sorry, giving roses to bots are NOT a thing!`)
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to give a rose to in a DM channel?!`)
else

if(!message.member.roles.get(botconfig.trustedroles) && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to give a rose.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone to give a rose to, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.author.id) return message.channel.send(`You can't give yourself a rose.`)
else
var roses = [
    `🌷`,
    `🌹`,
    `🌺`,
    `🌻`,
    `🌸`,
    `Bonus Bouquet! 💐`
]

var rose = roses[Math.floor(Math.random() * roses.length)]

message.channel.send(`<@${user.id}>, \`${message.author.tag}\` has decided to give you a rose! ${rose}`)

}}

module.exports = rose;