const { zokou } = require("../framework/zokou");
var mumaker = require("mumaker");

zokou({ nomCom: "hacker", categorie: "Logo", reaction: "👨🏿‍💻" }, async (origineMessage, zk, commandeOptions) => {
    const { prefixe, arg, ms, repondre } = commandeOptions;
    if (!arg || arg == "") {
        repondre("*__Exemple : * " + prefixe + "hacker 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}");
        return;
    }
    try {
        let radio = "984dd03e-220d-4335-a6ba-7ac56b092240";
        let anu = await mumaker.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", arg);
        repondre("* processing...*");
        await zk.sendMessage(origineMessage, { image: { url: anu.image }, caption: " \t Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});
zokou({ nomCom: "dragonball", categorie: "Logo", reaction: "🐉" }, async (dest, zk, commandeOptions) => {
    let { arg, repondre, prefixe, ms } = commandeOptions;
    try {
        const noArgMsg = `*_EXEMPLE *:  ${prefixe}dragonball 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`;
        if (arg == '' || !arg) {
            repondre(noArgMsg);
            return;
        }
        var lienMaker2 = "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html";
        const imgInfo = await mumaker.ephoto(lienMaker2, arg.join(' '));
        await zk.sendMessage(dest, { text: " *\t Traitement en cours ...*" }, { quoted: ms });
        await zk.sendMessage(dest, { image: { url: imgInfo.image }, caption: " \t Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});

zokou({ nomCom: "naruto", categorie: "Logo", reaction: "⛩" }, async (dest, zk, commandeOptions) => {
    let { ms, arg, repondre, prefixe } = commandeOptions;
    try {
        if (!arg || arg == '') {
            repondre("*_Exemple : * " + prefixe + "naruto 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}");
            return;
        }
        var img = await mumaker.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", arg.join(' '));
        repondre("*traitement en cours...*");
        await zk.sendMessage(dest, { image: { url: img.image }, caption: "\t\t Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡" }, { quoted: ms });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});

zokou({ nomCom: "didong", categorie: "Logo", reaction: "📱" }, async (dest, zk, commandeOptions) => {
    let { arg, repondre, prefixe, ms } = commandeOptions;
    try {
        var titre = "\tLogo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡";
        var lien = "https://ephoto360.com/tao-anh-che-vui-tu-choi-cuoc-goi-voi-ten-cua-ban-930.html";
        if (!arg || arg == "") {
            repondre(`*exemple :* ${prefixe}didong 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
            return;
        }
        var maker = await mumaker.ephoto(lien, arg.join(' '));
        repondre('*processing...*')
        await zk.sendMessage(dest, { image: { url: maker.image }, caption: titre });
    }
    catch (e) {
        repondre("🥵🥵 " + e);
    }
});
 zokou({ nomCom: "wall", categorie: "Logo", reaction: "👍" }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, ms, prefixe } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}wall 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    let text = arg.join(" ");
    mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch(console.log);
});

zokou({ nomCom: "summer", categorie: "Logo", reaction: "🌞" }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, ms, prefixe } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}summer 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch(console.error);
});

zokou({ nomCom: "neonlight", categorie: "Logo", reaction: "💡" }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, ms, prefixe } = commandeOptions;
    if (!arg || arg == "") {
        repondre(`Exemple of using commande:\n ${prefixe}neonlight 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    try {
        let maker = await mumaker.textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", arg);
        zk.sendMessage(dest, { image: { url: maker.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
    } catch (e) {
        repondre("🥵🥵 " + e);
    }
});

zokou({ nomCom: "greenneon", categorie: "Logo", reaction: "🟢" }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, ms, prefixe } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}greenneon 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/green-neon-text-effect-874.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch(console.error);
});
zokou({ nomCom: "glitch", categorie: "Logo", reaction: "🎛️" }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, ms, prefixe } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}glitch 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch(console.error);
});

zokou({ nomCom: "devil", categorie: "Logo", reaction: "😈" }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, ms, prefixe } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}devil 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", arg)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch(console.error);
});

zokou({ nomCom: "explode", categorie: "Logo", reaction: "💥" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, arg } = commandeOptions;
    if (!arg || arg == "") {
        repondre(`  Exemple :* ${prefixe}explode 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    try {
        var lien = "https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html";
        var img = await mumaker.ephoto(lien, arg);
        repondre("  processing ...");
        await zk.sendMessage(dest, { image: { url: img.image }, caption: "\t Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡" });
    } catch (e) {
        repondre("🥵🥵 " + e);
    }
});

zokou({ nomCom: "water", categorie: "Logo", reaction: "💦" }, async (dest, zk, commandeOptions) => {
    var { ms, repondre, arg, prefixe } = commandeOptions;
    if (!arg || arg == "") {
        repondre(`${prefixe}water 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    try {
        var lien = "https://en.ephoto360.com/create-water-effect-text-online-295.html";
        var img = await mumaker.ephoto(lien, arg);
        repondre(" processing ...");
        await zk.sendMessage(dest, { image: { url: img.image }, caption: "  Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡" });
    } catch (e) {
        repondre(`🥵🥵 ${e}`);
    }
});

zokou({ nomCom: "snow", categorie: "Logo", reaction: "❄️" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}snow 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-beautiful-3d-snow-text-effect-online-1101.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});
 zokou({ nomCom: "transformer", categorie: "Logo", reaction: "🤖" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}transformer 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

zokou({ nomCom: "thunder", categorie: "Logo", reaction: "⚡" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}thunder 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

zokou({ nomCom: "harrypotter", categorie: "Logo", reaction: "🧙‍♂️" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}harrypotter 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

zokou({ nomCom: "cat", categorie: "Logo", reaction: "🪟" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}cat 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

zokou({ nomCom: "whitegold", categorie: "Logo", reaction: "💫" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}whitegold 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});
 zokou({ nomCom: "lightglow", categorie: "Logo", reaction: "🌟" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}lightglow 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

zokou({ nomCom: "thor", categorie: "Logo", reaction: "🔨" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}thor 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

zokou({ nomCom: "neon", categorie: "Logo", reaction: "💡" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}neon 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/neon-text-effect-online-879.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

zokou({ nomCom: "purple", categorie: "Logo", reaction: "🧳" }, async (dest, zk, commandeOptions) => {
    var { ms, repondre, prefixe, arg } = commandeOptions;
    try {
        if (!arg || arg == "") {
            repondre(prefixe + "purple 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}");
            return;
        }
        const lien = "https://en.ephoto360.com/purple-text-effect-online-100.html";
        var img = await mumaker.ephoto(lien, arg);
        repondre(" processing ...");
        await zk.sendMessage(dest, { image: { url: img.image }, caption: "Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡" });
    } catch (e) {
        repondre(e);
    }
});

zokou({ nomCom: "gold", categorie: "Logo", reaction: "🧚🏿‍♀️" }, async (dest, zk, commandeOptions) => {
    let { ms, arg, prefixe, repondre } = commandeOptions;
    try {
        if (!arg || arg == "") {
            repondre(prefixe + "gold 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}");
            return;
        }
        var lien = "https://en.ephoto360.com/modern-gold-4-213.html";
        var img = await mumaker.ephoto(lien, arg);
        repondre("processing ...");
        await zk.sendMessage(dest, { image: { url: img.image }, caption: " Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡" }, { quoted: ms });
    } catch (e) {
        repondre(e);
    }
});

zokou({ nomCom: "arena", categorie: "Logo", reaction: "🥵" }, async (dest, zk, commandeOptions) => {
    let { ms, arg, prefixe, repondre } = commandeOptions;
    try {
        if (!arg || arg == "") {
            repondre(prefixe + "arena 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}");
            return;
        }
        var lien = "https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html";
        var img = await mumaker.ephoto(lien, arg.join(' '));
        repondre("processing ...");
        await zk.sendMessage(dest, { image: { url: img.image }, caption: " Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡" }, { quoted: ms });
    } catch (e) {
        repondre(e);
    }
});
// Marvel Command
zokou({ nomCom: "marvel", categorie: "Logo", reaction: "🦸‍♂️" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}marvel 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-marvel-studios-text-logo-online-971.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

// Pencil Magma Command
zokou({ nomCom: "pencilmagma", categorie: "Logo", reaction: "✏️" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}pencilmagma 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-pencil-magma-effect-online-1016.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

// Orange Command
zokou({ nomCom: "orange", categorie: "Logo", reaction: "🍊" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}orange 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-orange-text-effect-online-free-1161.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});

// Demon Command
zokou({ nomCom: "demon", categorie: "Logo", reaction: "😈" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}demon 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-demon-logo-style-text-effect-online-1101.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("Une erreur s'est produite :", err);
        });
});
      // Fire Command
zokou({ nomCom: "fire", categorie: "Logo", reaction: "🔥" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}fire 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-a-fire-text-effect-free-online-1031.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("An error occurred:", err);
        });
});

// Ice Command
zokou({ nomCom: "ice", categorie: "Logo", reaction: "❄️" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}ice 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-ice-cold-text-effect-free-online-1081.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("An error occurred:", err);
        });
});

// Glitch Command
zokou({ nomCom: "glitch", categorie: "Logo", reaction: "🎛️" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}glitch 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("An error occurred:", err);
        });
});

// Metal Command
zokou({ nomCom: "metal", categorie: "Logo", reaction: "⚙️" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}metal 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/metal-dark-gold-text-effect-988.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("An error occurred:", err);
        });
});

// Graffiti Command
zokou({ nomCom: "graffiti", categorie: "Logo", reaction: "🖌️" }, async (dest, zk, commandeOptions) => {
    const { arg, ms, prefixe, repondre } = commandeOptions;
    if (!arg[0]) {
        repondre(`Exemple of using commande:\n ${prefixe}graffiti 𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}`);
        return;
    }
    const text = arg.join(" ");
    mumaker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", text)
        .then((data) => {
            zk.sendMessage(dest, { image: { url: data.image }, caption: 'Logo by ⬡┃𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}┃⬡' }, { quoted: ms });
        })
        .catch((err) => {
            console.error("An error occurred:", err);
        });
});
                
