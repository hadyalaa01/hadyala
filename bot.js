const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538892444645720064")
setInterval(function() {
channel.send(`iTzSemba.isHere`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
