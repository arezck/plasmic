const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
exports.run = async(client, message, args) => {
const duration = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setAuthor(`${client.user.username} İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
.addField(":satellite: Gecikme", `**${client.ws.ping}** ms`, true)
.addField(":alarm_clock: Çalışma Süresi", duration, true)
.addField(":people_hugging: Kullanıcılar", client.users.cache.size, true)
.addField(":control_knobs: Kanallar", client.channels.cache.size, true)
.addField(":desktop: Sunucular", client.guilds.cache.size, true)
.addField(":comet: `discord.js` sürümü", Discord.version, true)
.setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
return message.channel.send(embed)
};
exports.conf = {
aliases: ['i', 'istatistik', 'bot-bilgi'],
permLevel: 4
};
exports.help = {
name: "botbilgi"
}