const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃{𝛁𝚯𝐋𝐔𝚳𝚵2} IMPORTANT INFO* 
❒───────────────────❒
*GITHUB LINK*
> https://github.com/calvineonyango/X_FORCE_MD-V1
*Session*
> *https://cobu-tech-factory-1.onrender.com*
*FOR MORE INFO TAP ON THE LINKS BELOW*
> *Telegram channel* https://t.me/+-B6ymywjkJI5YmI8
> *Telegram me*      https://t.me/obu254
> *Telegram group*   https://t.me/+g2w2s4YAf1BiN2Q8
> *WhatsApp Channel* https://whatsapp.com/channel/0029Vadx3PxJ3juvWsDlrN11
> *WhatsApp Group*
> *YouTube*.         https://www.youtube.com/@calvineobumdtech
> *Twitter*.         https://www.twitter.com/CalvinCa5564
> *Instagram* https://instagram.com/caelvineobumd
╭───────────────────❒
│❒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠ *DEV* : *Calvine Onyango*
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
     *Calvine Obuoro*

❒────────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Calvine" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Calvine" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
