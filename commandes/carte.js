const Discord = require("discord.js");

const config = require("../config.json");

module.exports.run = async (client, message, args,) => {
    text = args.join(" ");
    x = 0
    z = 0
    while ( z < 1 ) {
        x = Math.floor(Math.random() * 22 ) + 1;
        a = Math.floor(Math.random() * 22 ) + 1;
        b = Math.floor(Math.random() * 22 ) + 1;
        z = z + 1
        if ( x == a || x == b || a == b )   {
            while ( x == a || x == b || a == b ) {
                x = Math.floor(Math.random() * 22 ) + 1;
                a = Math.floor(Math.random() * 22 ) + 1;
                b = Math.floor(Math.random() * 22 ) + 1;
            };
            if ( x == 1 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le bateleur\" ");
            } else if ( x == 2 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La papesse\" ");
            } else if ( x == 3 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'impératrice\" ");
            } else if ( x == 4 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'Empereur\" ");
            } else if ( x == 5 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pape\" ");
            } else if ( x == 6 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Les amoureux\" ");
            } else if ( x == 7 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le chariot\" ");
            } else if ( x == 8 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La Justice\" ");
            } else if ( x == 9 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'ermite\" ");
            } else if ( x == 10 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La roue de la fortune\" ");
            } else if ( x == 11 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La force\" ");
            } else if ( x == 12 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pendu\" ");
            } else if ( x == 13 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La mort\" ");
            } else if ( x == 14 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La tempérance\" ");
            } else if ( x == 15 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le diable\" ");
            } else if ( x == 16 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La maison Dieu\" ");
            } else if ( x == 17 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'étoile\" ");
            } else if ( x == 18 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La lune\" ");
            } else if ( x == 19 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le soleil\" ");
            } else if ( x == 20) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le Jugement\" ");
            } else if ( x == 21) {       
                message.channel.send("Vous avez tiré la carte suivante: \"Le monde\" ");
            } else if ( x == 22) {  
                message.channel.send("Vous avez tiré la carte suivante: \"L'excuse \" ");
            } else {
                message.channel.send("Ta carte existe pas connard");
            };
            if ( a == 1 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le bateleur\" ");
            } else if ( a == 2 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La papesse\" ");
            } else if ( a == 3 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'impératrice\" ");
            } else if ( a == 4 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'Empereur\" ");
            } else if ( a == 5 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pape\" ");
            } else if ( a == 6 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Les amoureux\" ");
            } else if ( a == 7 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le chariot\" ");
            } else if ( a == 8 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La Justice\" ");
            } else if ( a == 9 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'ermite\" ");
            } else if ( a == 10 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La roue de la fortune\" ");
            } else if ( a == 11 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La force\" ");
            } else if ( a == 12 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pendu\" ");
            } else if ( a == 13 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La mort\" ");
            } else if ( a == 14 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La tempérance\" ");
            } else if ( a == 15 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le diable\" ");
            } else if ( a == 16 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La maison Dieu\" ");
            } else if ( a == 17 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'étoile\" ");
            } else if ( a == 18 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La lune\" ");
            } else if ( a == 19 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le soleil\" ");
            } else if ( a == 20) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le Jugement\" ");
            } else if ( a == 21) {       
                message.channel.send("Vous avez tiré la carte suivante: \"Le monde\" ");
            } else if ( a == 22) {  
                message.channel.send("Vous avez tiré la carte suivante: \"L'excuse \" ");
            } else {
                message.channel.send("Ta carte existe pas connard");
            };
            if ( b == 1 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le bateleur\" ");
            } else if ( b == 2 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La papesse\" ");
            } else if ( b == 3 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'impératrice\" ");
            } else if ( b == 4 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'Empereur\" ");
            } else if ( b == 5 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pape\" ");
            } else if ( b == 6 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Les amoureux\" ");
            } else if ( b == 7 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le chariot\" ");
            } else if ( b == 8 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La Justice\" ");
            } else if ( b == 9 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'ermite\" ");
            } else if ( b == 10 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La roue de la fortune\" ");
            } else if ( b == 11 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La force\" ");
            } else if ( b == 12 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pendu\" ");
            } else if ( b == 13 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La mort\" ");
            } else if ( b == 14 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La tempérance\" ");
            } else if ( b == 15 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le diable\" ");
            } else if ( b == 16 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La maison Dieu\" ");
            } else if ( b == 17 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'étoile\" ");
            } else if ( b == 18 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La lune\" ");
            } else if ( b == 19 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le soleil\" ");
            } else if ( b == 20) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le Jugement\" ");
            } else if ( b == 21) {       
                message.channel.send("Vous avez tiré la carte suivante: \"Le monde\" ");
            } else if ( b == 22) {  
                message.channel.send("Vous avez tiré la carte suivante: \"L'excuse \" ");
            } else {
                message.channel.send("Ta carte existe pas connard");
            };
        } else { 
            if ( x == 1 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le bateleur\" ");
            } else if ( x == 2 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La papesse\" ");
            } else if ( x == 3 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'impératrice\" ");
            } else if ( x == 4 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'Empereur\" ");
            } else if ( x == 5 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pape\" ");
            } else if ( x == 6 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Les amoureux\" ");
            } else if ( x == 7 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le chariot\" ");
            } else if ( x == 8 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La Justice\" ");
            } else if ( x == 9 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'ermite\" ");
            } else if ( x == 10 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La roue de la fortune\" ");
            } else if ( x == 11 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La force\" ");
            } else if ( x == 12 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pendu\" ");
            } else if ( x == 13 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La mort\" ");
            } else if ( x == 14 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La tempérance\" ");
            } else if ( x == 15 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le diable\" ");
            } else if ( x == 16 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La maison Dieu\" ");
            } else if ( x == 17 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'étoile\" ");
            } else if ( x == 18 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La lune\" ");
            } else if ( x == 19 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le soleil\" ");
            } else if ( x == 20) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le Jugement\" ");
            } else if ( x == 21) {       
                message.channel.send("Vous avez tiré la carte suivante: \"Le monde\" ");
            } else if ( x == 22) {  
                message.channel.send("Vous avez tiré la carte suivante: \"L'excuse \" ");
            } else {
                message.channel.send("Ta carte existe pas connard");
            };
            if ( a == 1 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le bateleur\" ");
            } else if ( a == 2 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La papesse\" ");
            } else if ( a == 3 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'impératrice\" ");
            } else if ( a == 4 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'Empereur\" ");
            } else if ( a == 5 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pape\" ");
            } else if ( a == 6 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Les amoureux\" ");
            } else if ( a == 7 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le chariot\" ");
            } else if ( a == 8 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La Justice\" ");
            } else if ( a == 9 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'ermite\" ");
            } else if ( a == 10 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La roue de la fortune\" ");
            } else if ( a == 11 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La force\" ");
            } else if ( a == 12 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pendu\" ");
            } else if ( a == 13 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La mort\" ");
            } else if ( a == 14 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La tempérance\" ");
            } else if ( a == 15 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le diable\" ");
            } else if ( a == 16 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La maison Dieu\" ");
            } else if ( a == 17 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'étoile\" ");
            } else if ( a == 18 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La lune\" ");
            } else if ( a == 19 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le soleil\" ");
            } else if ( a == 20) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le Jugement\" ");
            } else if ( a == 21) {       
                message.channel.send("Vous avez tiré la carte suivante: \"Le monde\" ");
            } else if ( a == 22) {  
                message.channel.send("Vous avez tiré la carte suivante: \"L'excuse \" ");
            } else {
                message.channel.send("Ta carte existe pas connard");
            };
            if ( b == 1 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le bateleur\" ");
            } else if ( b == 2 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La papesse\" ");
            } else if ( b == 3 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'impératrice\" ");
            } else if ( b == 4 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'Empereur\" ");
            } else if ( b == 5 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pape\" ");
            } else if ( b == 6 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Les amoureux\" ");
            } else if ( b == 7 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le chariot\" ");
            } else if ( b == 8 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La Justice\" ");
            } else if ( b == 9 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'ermite\" ");
            } else if ( b == 10 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La roue de la fortune\" ");
            } else if ( b == 11 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La force\" ");
            } else if ( b == 12 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le pendu\" ");
            } else if ( b == 13 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La mort\" ");
            } else if ( b == 14 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La tempérance\" ");
            } else if ( b == 15 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le diable\" ");
            } else if ( b == 16 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La maison Dieu\" ");
            } else if ( b == 17 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"L'étoile\" ");
            } else if ( b == 18 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"La lune\" ");
            } else if ( b == 19 ) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le soleil\" ");
            } else if ( b == 20) {
                message.channel.send("Vous avez tiré la carte suivante: \"Le Jugement\" ");
            } else if ( b == 21) {       
                message.channel.send("Vous avez tiré la carte suivante: \"Le monde\" ");
            } else if ( b == 22) {  
                message.channel.send("Vous avez tiré la carte suivante: \"L'excuse \" ");
            } else {
                message.channel.send("Ta carte existe pas connard");
            };
           
        };
    };   
};

module.exports.conf = {
    enabled: true,
    guildOnly: false,
};

module.exports.help = {
    name: 'carte',
    description: 'permet de faire unjet de deux des',
    usage: 'des[commande]',
    perm: "🔓"
};