var config = require("../botconfig.json")
module.exports = bot => {
    console.log(`${bot.user.username} is online`)

    bot.user.setStatus(`online`);

    bot.user.setActivity(`a game called ${config.prefix}help`, {type: "PLAYING"})

}