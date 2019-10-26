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

if(!message.member.roles.get(botconfig.trustedroles) && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to call someone a qt...`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need to call someone a qt, please \`ping\` someone or use their \`ID\`!`)
else
message.delete()
var embed = new Discord.RichEmbed()
    .setTitle(`New QT Incoming ✨`)
    .setAuthor(`${user.user.tag}`, user.user.avatarURL)
    .addField(`QT Tag`, user)
    .addField(`ID`, user.id)
    .setColor(`#ff00bb`)
    .setTimestamp()

message.channel.send(embed)

}}

module.exports = qt;