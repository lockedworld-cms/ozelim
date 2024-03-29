const Discord = require('discord.js')
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog1.json", "utf8"));

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
  
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(`:x: **Yalnış Kullanım**\n**Doğru Kullanım:** sc!bb-kanal #kanal`)
        return
    }
    if(!gkanal[message.guild.id]){
        gkanal[message.guild.id] = {
            resim: channel.id
        };
    }
    fs.writeFile("./ayarlar/glog1.json", JSON.stringify(gkanal), (err) => {
        console.log(err)
    })
     message.channel.send(`╔══════════════════════╗`)
    message.channel.send(`║${channel} Çıkış Mesaj Kanal ayarlandı.`)
    message.channel.send(`╚══════════════════════╝`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hg-kanal'],
    permLevel: 2,
  kategori: 'moderasyon'
}

exports.help = {
    name: 'bb-kanal',
    description: 'Çıkış Kanalını Ayarlar.',
    usage: 'b!bb-kanal <#kanal>'
}