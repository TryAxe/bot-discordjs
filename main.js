const config = require('./config.json');
const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
    console.log(`${bot.user.username} est en ligne !`);
    bot.user.setActivity('Programmation version 1.0 en cours !');
});
bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (command === `${prefix}info`) ;
    {
        let botIcon = bot.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setDescription(`Informations sur le bot`)
            .setColor(`#dc143c`)
            .setThumbnail(botIcon)
            .addField(`Nom du bot`, bot.user.username)
            .addField(`Créer par`, bot.user.author)
            .addField(`Créer le`, bot.user.createdAt)
            .addField(`Commandes`, '------------')
            .addField(`${prefix}info`, 'Renvoie des informations sur le bot')

        return message.channel.send(embed);
    }
});

bot.login(config.token);