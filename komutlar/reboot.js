const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
message.channel.sendMessage('  **Yeniden başlıyayımmı Sahip ? <a:katil:611273421883572230>**')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet lütfen", {
    max: 1,
    time: 2800,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('  **Hemen Yeniden Başlıyorum..! <a:bekle:607839007614697492> **   ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Yeniden Başlıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' <a:ots:607839014103547906> **Yeniden Başlama İşlemini İptal Ettim.** ');
    });
});
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4,
  kategori: 'moderasyon'
};

exports.help = {
  name: 'reboot',
  description: '',
  usage: 'reboot'
};