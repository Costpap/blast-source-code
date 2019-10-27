var config = require("../botconfig.json")
module.exports = bot => {
    console.log(`${bot.user.username} is online`)

    bot.user.setStatus(`online`);

    let statuses = [
        `${config.prefix}help for help!`,
        `Version 2.2.0`
    ]
setInterval(() => {     

    var status = statuses[Math.floor(Math.random() * statuses.length)]

    bot.user.setActivity(status, {type: "PLAYING"})

}, 10000);
}