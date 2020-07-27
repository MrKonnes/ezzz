const Discord = require("discord.js");
const fs = require("fs");

const tokenfile = require("./secret.json");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commandes/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    console.log(`========== Commandes activé ==========`)
    if(jsfile.length <= 0){
      console.log("Aucune commende trouvé !");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commandes/${f}`);
      console.log(`[CMD] ${f}`);
      bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(`============ Informations ============`)
    console.log(`Pseudo du BOT   => ${bot.user.tag}`)
    console.log(`Prefix actuelle => ` + config.prefix);
    console.log(`Auteur          => ${config.author}`);
    console.log(`Version         => ${config.version}`);
    console.log(``);
    console.log(`Utilisateurs    => ${bot.users.size}`);
    console.log(`Channels        => ${bot.channels.size}`);
    console.log(`Serveurs        => ${bot.guilds.size}`);
    console.log(`============ Informations ============`);
  
    bot.user.setStatus("online");
    bot.user.setActivity("");
    console.log(``)
    console.log(`        Démarage du bot terminé       `);
    console.log(``)
    console.log(`=========== Début des logs ===========`);
    console.log(``)
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = config.prefix;
    if (!message.content.startsWith(config.prefix)) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

});


bot.login(tokenfile.token);
