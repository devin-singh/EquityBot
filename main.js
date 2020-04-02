const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'Njk1MzM1MTQwMjgwMjM4MjAw.XoY1YQ.tbrbmc7BafmdFNH18T8_DDrHpj0';

const PREFIX = '!';

client.on('ready', () => {
    console.log('This bot is online!');
})

client.on('message', message=> {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'q':
            message.reply("Hi");
            message.reply("Hi");
        break;
    }
})

client.login(token);



