const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix; "x!"

module.exports = client => {
console.log('>> Oynuyor Kısmı Başarıyla Güncellendi. <<');
console.log('>> Bot Hazır Giriş Yapıldı! <<');
  client.user.setStatus("Rahatsız Etmeyin");
   var oyun = [
"✨x!yardım✨",
"❤Xecutioner❤",
"💞En İyisiyiz!💞",
"🍷| HerGün Yeni Komutlar.", 
"🎆| 7/24 Aktif! Türk Bot.", 
"🎟| x!davet Yazarak Botu Sunucunuza Ekleyebilirsiniz.",
"Botta Bazenleri Kesintiler Olabilir."

     
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+0)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/xxsemihproxx");
        }, 12 * 500);
}
