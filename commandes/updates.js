"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "twit", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to follow ⬡┃𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃{𝛁𝚯𝐋𝐔𝚳𝚵2}┃⬡ on Twitter \n\n';
    let d = 'https://www.twitter.com/CalvinCa5564';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/12dce49afac3980cc1085.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

zokou({ nomCom: "tm", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello 👋\n\nClick The link below to message⬡┃𝐂𝐀𝐋𝐕𝐈𝐍𝐄 𝐎𝐁𝐎𝐔𝐎𝐑𝐎≈≈𝐓𝐄𝐂𝐇┃⬡ on Telegram\n\n';
    let d = 'https://t.me/obu254';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/01174504d05ad533ad2e5.png';
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
