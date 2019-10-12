const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`:warning: Bu komutu kullanabilmek için **__Mesajları Yönet__** iznine sahip olmalısın!`);
  
  const tag = args[0]
  let rol = message.mentions.roles.first()
  const memberss = message.guild.members.filter(member => member.user.username.includes(tag));
  
  if(!tag) return message.reply(`:x: Bir Tag Girmelisiniz Örnek Kullanım; \n \`${ayarlar.prefix}tag-yetki ɾƈ @Üye\``)
  if(!rol) return message.reply(`:x: Bir Rol Girmelisiniz Örnek kullanım; \n \`${ayarlar.prefix}tag-yetki ɾƈ @Üye\``)
  
  
  const embed = new Discord.RichEmbed()
  .addField(`Kullanıcı Adında ${tag} Tagı Olan Kullanıcılara Yetkilerini Veriyorum...`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı Adında \`${tag}\` Tagı Bulunmuyor.`)
  .setColor("BLUE")
  message.channel.send({embed})
  message.guild.members.forEach(u => {
    if(u.user.username.includes(tag)) {
      u.addRole(rol.id)
    }
  });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['taga-yetki-ver', 'tagayetkiver', 'tagyetki', 'tagayetki', 'taga-yetki'],
    permLevel: 2,
  kategori: 'moderasyon'
}

exports.help = {
    name: 'tag-yetki',
    description: 'Kullanıcıların kullanıcı adını tarayıp onlara yetki verir.',
    usage: 'tag-yetki <tag> <rol>'
}