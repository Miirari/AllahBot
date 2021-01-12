module.exports = {
    name: 'ban',
    description: "command used to ban user from guild",
    execute(message, args, Discord){
        if(message.member.permissions.has("BAN_MEMBERS", "ADMINISTRATOR")){
            var member = message.mentions.members.first();
            const embed = new Discord.MessageEmbed()
            .setColor('0xcc2626')
            .setTitle('Banned')
            .setDescription(member.user.username +' has been banned.')
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter('Kicked by ' + message.author.username)
            member.send('You have been banned from the server.').then(() => {
                member.ban().then((member) => {
                    message.channel.send(embed);
                }).catch(() => {
                    message.channel.send('this user cant be ban');
                });
            });
        }
    }
}