const Discord = require('discord.js');
const fetch = require("node-fetch");
exports.run = (client, message, args) => {
    if(!global.config.bot.owners.includes(message.author.id)) return  message.reply('could not be granted access permission.')
	message.channel.send("pbots: Bot rebooted.").then(msg => {
		console.log(`BOT : Rebooting...`);
		process.exit(1);
	})
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: []
};
exports.help = {
	name: 'reboot',
	description: 'Reboot the bot.',
	usage: 'reboot'
};