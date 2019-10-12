const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et reis. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('İşte Bot Davet Linki : https://discordapp.com/oauth2/authorize?client_id=610590157590102250&scope=bot&permissions=8 Botun Destek Sunucusu https://discord.gg/4fbphDs');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu-ekle', 'botu-davet-et', 'botuekle'],
  permLevel: 0,
  kategori: 'moderasyon'
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini özelden atar.',
  usage: 'davet'
};