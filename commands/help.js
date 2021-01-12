const { Channel } = require("discord.js");

module.exports = {
	name: 'help',
	description: "help",
	execute(message, args, Discord){
        var member = message.mentions.members.first();
        const embed = new Discord.MessageEmbed()
        .setColor('0x80ff80')
        .setTitle('Kicked')
        .setDescription(member.user.username +' has been kicked.')
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter('Kicked by ' + message.author.username)
        message.channel.send(embed);
	}
};