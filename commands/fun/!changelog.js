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
${pkg.version}, the qt update. Files modified:
• qt.js: IF you do ${botconfig.prefix}qt everyone, the bot will make an embed calling EVERYONE a qt!
• rose.js: More rose RNG, check <https://imgur.com/a/WTylynY>.
• index.js: Added debug command anyone has access to to do a thingy (doesn't affect user or guild).
• package.json: Basically changed version string to 2.4.0.

For past changelogs, please check the ||Github repo||`)

}}

module.exports = cl;