const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class flip extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'fun',
            memberName: 'flip',
            description: 'flip'
        })
    }
async run(message) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to flip in a DM channel?!`)
else

if(!message.member.roles.get(botconfig.trustedroles) && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to flip someone.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone to flip, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.author.id) return message.channel.send(`You need to break the laws of physics to flip yourself.`)
else

var phrases = [
    `\`${message.author.tag}\` flipped <@${user.id}> into a pile of client mods!`,
    `<@${user.id}> was almost flipped by \`${message.author.tag}\` with flimsy cardboard!`,
    `\`${message.author.tag}\` flipped <@${user.id}>'s table onto them!`,
    `\`${message.author.tag}\` tossed their computer at <@${user.id}>!`,
    `<@${user.id}> almost got flipped by \`${message.author.tag}\` but the coder was too lazy to think of an object.`,
    `\`${message.author.tag}\` tossed <@${user.id}> a rickroll video.`
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}

module.exports = flip;