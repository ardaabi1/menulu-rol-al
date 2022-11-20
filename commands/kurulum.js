const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
message.delete()
  const embed = new EmbedBuilder()
.setTitle("Light - Rol Al Sistemi!")
.setDescription("Kurulum Yapmak İçin Aşşağıda Bulunan Butona Bas!")
.setColor("#ff0000")
const row = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setLabel("Kurulum Yardımcısı!")
.setStyle(ButtonStyle.Success)
.setCustomId("kurulum")
)
  message.reply({embeds: [embed], components: [row], ephemeral: true})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kurulum"
};
