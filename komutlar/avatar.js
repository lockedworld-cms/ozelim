const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    let user;
	
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const avatar = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("» Buyur Avatarınız.")
        .setImage(user.avatarURL)
    message.channel.sendEmbed(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp"],
  permLevel: `Yetki gerekmiyor.` ,
  kategori: 'Kullanıcı'
};

exports.help = {
  name: 'avatar',
  category: 'kullanıcı',
  description: 'Belirtilen Kişinin veya Komutu Yazan Kişinin ppsini Atar.',
  usage: 'sh!avatar <@kişi-etiket> veya sh!avatar'
};