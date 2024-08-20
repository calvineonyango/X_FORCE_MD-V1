"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "Group", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join ⬡┃TKM inc┃⬡ WhatsApp channel\n\n';
    let d = 'https://chat.whatsapp.com/GoVVE2PJW9kGu7RAmlgfqQ';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/21709dc833b9e1f8f307c.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

zokou({ nomCom: "Channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to Join ⬡┃Cod3Uchiha┃⬡ WhatsApp Channel\n\n';
    let d = 'https://whatsapp.com/channel/0029Vadx3PxJ3juvWsDlrN11';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/21709dc833b9e1f8f307c.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://wallpapercave.com/uwp/uwp3842939.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */
