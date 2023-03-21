const Discord = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
]});

const token = 'MTA4Nzc2MDA2OTEzMjgyNDYzOQ.GGDSYF.fbc9zcKmxzjAZz4kRTkEwdPX1d7pwgihMdbw0o';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login(token);


