const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);

class report extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'report',
            group: 'fun',
            memberName: 'report',
            description: 'report',
            throttling:{
                usages: 1,
                duration: 20
            }
        })
    }
async run(message) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else

var args = message.content.split(/ +/).slice(1);
let reason = args.slice(1).join(' '); 
var user = message.guild.members.get(args[0]) || message.mentions.users.first()

if(!user) return message.channel.send(`Reporting no one.`)
if(!reason.length) return message.channel.send(`Put a reason`)

message.channel.send(`Reported \`${user.tag}\` for ${reason}`)

await message.react(`☑`)

}}

module.exports = report;