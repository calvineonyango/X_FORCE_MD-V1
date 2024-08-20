const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
╭─ ☉〘𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}〙☉───☉
│▫️╭─────────────☉
│▫️│𝐎𝐖𝐍𝐄𝐑 ➦  : ${s.OWNER_NAME}
│▫️|𝐃𝐀𝐓𝐄➦: ${date}
│▫️│𝐏𝐑𝐄𝐅𝐈𝐗➦ : ${s.PREFIXE}
│▫️│𝐌𝐎𝐃𝐄➦ : ${mode}
│▫️│𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒➦ : ${cm.length} 
│▫️│𝐑𝐀𝐌➦ : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│▫️│𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌➦ : ${os.platform()}
│▫️│𝐃𝐄 𝐕𝐄𝐋𝐎𝐏𝐄𝐑➦: *𝐂𝐎𝐁𝐔≈≈𝐓𝐄𝐂𝐇*
│▫️╰──────────────☉
╰──────────────────☉
╭───────────────☉
 ☉〘𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}〙☉
> ╔═══════════════════╗
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐂𝐎𝐁𝐔≈≈𝐓𝐄𝐂𝐇
> ╚═══════════════════╝
╰───────────────☉\n`;
    
let menuMsg = `
╭─────────☉
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐂𝐎𝐁𝐔≈≈𝐓𝐄𝐂𝐇
╰─────────☉

 *⚡𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒⚡*
`;

    for (const cat in coms) {
        menuMsg += ` ╭──────☉ *${cat}* ☉─────▸`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│©│ ${cmd}`;
        }
        menuMsg += `
╰────────────···▸▸ \n`
    }

    menuMsg += `
            
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
|▫️𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}
> ╔═════════════════════╗
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃
> 👇👇👇👇👇
> 𝐁𝐘 𝐂𝐀𝐋𝐕𝐈𝐍𝐄 𝐎𝐁𝐎𝐔𝐎𝐑𝐎≈≈𝐓𝐄𝐂𝐇
> ╚═════════════════════╝
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Gojou-MD*, déveloper David Cyril" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Gojou*, déveloper David Cyril" }, { quoted: ms });
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
