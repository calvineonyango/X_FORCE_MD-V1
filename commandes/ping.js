"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "ping", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*🌍X_FORCE-MD{V²} is online 🌍* 🙏 \n\n ' + "*I X_FORCE-MD{V²},ia am working at a faster rate😉👍*";
    let d = '              > *Powered by COBU-TECH*✨💖';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/751e88d52db4a618cf7f4.jpg';
    await zk.sendMessage(dest, { image: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
