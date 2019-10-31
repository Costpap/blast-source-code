const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);
const pkg = require('../../package.json')

class cl extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'changelog',
            group: 'fun',
            memberName: '!changelog',
            description: 'cl'
        })
    }
async run(message) {

if(message.author.bot) return 
else
if(message.channel instanceof Discord.DMChannel) return
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to view help.`)
else

message.channel.send(`What's new in **${pkg.version}**
${pkg.version}, Ratelimiting:
• Added ratelimiting to some commands: 2 usages every 10 seconds. (Except the following: ${botconfig.prefix}mock (1 usage every 15 seconds), and ${botconfig.prefix}rep (1 usage every 24 hours.))`)

}}

module.exports = cl;