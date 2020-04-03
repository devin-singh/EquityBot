const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'Njk1MzM1MTQwMjgwMjM4MjAw.XoY1YQ.tbrbmc7BafmdFNH18T8_DDrHpj0';

const PREFIX = '!';

const https = require('https')
var hostname = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE";

client.on('ready', () => {
    console.log('This bot is online!');
})

client.on('message', message=> {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "set":
            hostname += "&symbol=" + args[1] + "&apikey=C0GL5EY37V5TVCVT"
            message.channel.send("Successfully set. Pinging Server...")
            replyWithQuote(message, args[1])
        break;
    }
})

client.login(token);

async function replyWithQuote(message, ticker) {
    https.get(hostname, (res)=> {

        res.on('data', (d) => {
            const topLevelObj = JSON.parse(d);
            process.stdout.write(d);
            try {
                message.channel.send(ticker + " is $" + topLevelObj["Global Quote"]["05. price"] + " and has changed by " + 
                topLevelObj["Global Quote"]["10. change percent"] + ". The current volume is " + topLevelObj["Global Quote"]["06. volume"])
              
            } catch(e) {
                message.channel.send("5 Calls Per Minute Reached")
            }
        });

    }).on('error', (e) => {
        console.error(e);
    });
    await sleep(12000)
    replyWithQuote(message, ticker)
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }  

