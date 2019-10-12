const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Özel DM den göndermek İstediğiniz Mesajı Yazınız.');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('**' + mesaj + '**')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 4,
  kategori: 'moderasyon'
};

exports.help = {
  name: 'herkesedm',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'herkesedm [duyurmak istediğiniz şey]'
};