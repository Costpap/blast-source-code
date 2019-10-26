const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class fight extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'fight',
            group: 'fun',
            memberName: 'fight',
            description: 'fight'
        })
    }
async run(message) {

if(message.author.bot) return message.channel.send(`I'm sorry, but two bots fighting are NOT a thing! (They are but for me, no...)`)
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to fight in a DM channel?!`)
else

if(!message.member.roles.get(botconfig.trustedroles) && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to fight.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to fight, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.author.id) return message.channel.send(`You can try to fight yourself all you want, but I'm keeping your hands from hitting yourself.`)
else

var phrases = [
    `So \`${message.author.tag}\` tried to fight <@${user.id}>... but they blocked them just in time!`,
    `<@${user.id}> is getting hit by \`${message.author.tag}\`... with a laptop.`,
    `\`${message.author.tag}\` was trying to fight <@${user.id}> but cried from onions \`${message.guild.members.random().user.tag}\` was peeling!`,
    `\`${message.author.tag}\` was going to fight <@${user.id}> with cereal, but it wasn't that effective...`,
    `<@${user.id}> is getting hit by \`${message.author.tag}\` with client mods.`,
    `\`${message.author.tag}\` tried to fight <@${user.id}> but the coder was too lazy to think of an object.`,
    `\`${message.author.tag}\` is hitting <@${user.id}> with tissues.`,
    `<@${user.id}> is getting caught by \`${message.author.tag}\`'s fehlerjäger net!`
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}

module.exports = fight;