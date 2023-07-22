const Discord = require('discord.js');
const client = new Discord.Client();
const Parser = require('rss-parser');
let parser = new Parser();
require('dotenv').config();

const AWS_DEVOPS_BLOGS_RSS_URL =
  'https://aws.amazon.com/blogs/devops/category/devops/feed/';

client.on('ready', () => {
  console.log(`Bot is ready and logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
  if (msg.content === '!devops') {
    try {
      let feed = await parser.parseURL(AWS_DEVOPS_BLOGS_RSS_URL);
      feed = feed.items.slice(0, 5);
      feed.forEach((item) => {
        const embed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle(item.title)
          .setURL(item.link)
          .setAuthor('AWS DevOps Blog', 'https://aws.amazon.com/favicon.ico')
          .setDescription(item.contentSnippet)
          .setThumbnail('https://aws.amazon.com/favicon.ico')
          .setTimestamp(new Date(item.pubDate))
          .setFooter('AWS DevOps Blog', 'https://aws.amazon.com/favicon.ico');
        msg.channel.send(embed);
      });
    } catch (error) {
      console.log(error);
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
