exports.run = async(client, message) => {message.channel.send(`Pingim: **${client.ws.ping}** !`)};exports.conf = {aliases: ['p'],permLevel: 0};exports.help = {name: "ping"};