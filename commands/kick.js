const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'kick',
    description: "command used to kick user from guild",
    execute(message, args, Discord){
        if(message.member.permissions.has("KICK_MEMBERS", "ADMINISTRATOR")){
            var member = message.mentions.members.first();
            const embed = new Discord.MessageEmbed()
            .setColor('0x80ff80')
            .setTitle('Kicked')
            .setDescription(member.user.username +' has been kicked.')
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter('Kicked by ' + message.author.username)
            member.send('You have been kicked from the server.').then(() => {
                member.kick().then((member) => {
                    message.channel.send(embed);
                }).catch(() => {
                    message.channel.send('this user cant be kicked');
                });
            });
        }
    }
}