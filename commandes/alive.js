const { zokou } = require('../framework/zokou');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../bdd/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou(
    {
        nomCom : 'awake',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
*Owner* : ${s.OWNER_NAME}
*Mode* : ${mode}
*Date* : ${date}
*Hours(GMT)* : ${temps}

 ${message}
 
 
 _TKM-bot_`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
    
}

    } else {
        if(!superUser) { repondre("there is no alive for this bot") ; return};

      await   repondre("𝑇𝒉𝒊𝒔 𝒊𝒔 𝑋-𝐹𝑂𝑅𝐶𝐸-𝑀𝐷𝑉2 𝒕𝒉𝒆 𝒎𝒐𝒔𝒕 𝒂𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 𝒃𝒐𝒕 𝒘𝒉𝒊𝒄𝒉 𝒊𝒔 𝒂𝒍𝒊𝒗𝒆 24/7 𝒂𝒏𝒅 𝐼 𝒅𝒐 𝒏𝒐𝒕 𝒈𝒆𝒕 𝒕𝒊𝒓𝒆𝒅 𝒐𝒓 𝒅𝒊𝒆 𝒘𝒉𝒆𝒏 𝐼 𝒉𝒂𝒗𝒆 𝒃𝒆𝒆𝒏 𝒊𝒏𝒔𝒕𝒂𝒍𝒍𝒆𝒅 𝒅𝒐 𝒚𝒐𝒖 𝒆𝒏𝒋𝒐𝒚 𝒃𝒆𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 𝒎𝒆");
         repondre("I am 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²} 𝐏𝐎𝐖𝐄𝐑𝐄𝐃➦ 𝐁𝐘 𝐂𝐀𝐋𝐕𝐈𝐍𝐄 𝐎𝐁𝐎𝐔𝐎𝐑𝐎≈≈𝐓𝐄𝐂𝐇")
     }
 } else {

    if(!superUser) { repondre ("Only meant for developer only don't try to change these") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre(' _𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}_ is running on server 99.9% ')

}
    });
