const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const fs = require('fs');
const yt=require("../framework/dl/ytdl-core.js")
const ffmpeg = require("fluent-ffmpeg");
const yts1 = require("youtube-yts");
//var fs =require("fs-extra")

zokou({
  nomCom: "play",
  categorie: "Search",
  reaction: "💽"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
     
  if (!arg[0]) {
    repondre("wich song do you want.");
    return;
  }

  try {
    let topo = arg.join(" ")
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const urlElement = videos[0].url;
          
       let infoMess = {
          image: {url : videos[0]. thumbnail},
         caption : `\n*𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}, wait i download it*\n\n*song name : _${videos[0].title}_

Time : _${videos[0].timestamp}_

Url : _${videos[0].url}_


_*𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}* is downloading the file_\n\n`
       }

      

      

      
       zk.sendMessage(origineMessage,infoMess,{quoted:ms}) ;
      // Obtenir le flux audio de la vidéo
      const audioStream = ytdl(urlElement, { filter: 'audioonly', quality: 'highestaudio' });

      // Nom du fichier local pour sauvegarder le fichier audio
      const filename = 'audio.mp3';

      // Écrire le flux audio dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier audio en utilisant l'URL du fichier local
      

     zk.sendMessage(origineMessage, { audio: { url:"audio.mp3"},mimetype:'audio/mp4' }, { quoted: ms,ptt: false });
        console.log("Envoi du fichier audio terminé !");

     
      });

      fileStream.on('error', (error) => {
        console.error('𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}, I am unable to get you the song try another one maybe later:', error);
        repondre('𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}, I am unable to get you the song try another one maybe later.');
      });
    } else {
      repondre('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}, I am unable to get the song trial another one maybe later:', error);
    
    repondre('𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²},I am unable to get the song try another one maybe later.');
  }
});

  

zokou({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre("insert video name");
    return;
  }

  const topo = arg.join(" ");
  try {
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const Element = videos[0];

      let InfoMess = {
        image: { url: videos[0].thumbnail },
        caption: `*𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²}, I'll get you the video*\n\nVideo name : _${Element.title}_
Time : _${Element.timestamp}_
Url : _${Element.url}_
_\n*𝛸-𝐹𝛩𝑅𝐶𝛯-𝛭𝐷 𝛻2* is downloading the file_\n\n`
      };

      zk.sendMessage(origineMessage, InfoMess, { quoted: ms });

      // Obtenir les informations de la vidéo à partir du lien YouTube
      const videoInfo = await ytdl.getInfo(Element.url);
      // Format vidéo avec la meilleure qualité disponible
      const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' });
      // Télécharger la vidéo
      const videoStream = ytdl.downloadFromInfo(videoInfo, { format });

      // Nom du fichier local pour sauvegarder la vidéo
      const filename = 'video.mp4';

      // Écrire le flux vidéo dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      videoStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier vidéo en utilisant l'URL du fichier local
        zk.sendMessage(origineMessage, { video: { url :"./video.mp4"} , caption: "*𝐗═𝐅𝐎𝐑𝐂𝐄═𝐌𝐃{𝐕𝐎𝐋²} generator*", gifPlayback: false }, { quoted: ms });
      });

      fileStream.on('error', (error) => {
        console.error('sorry I can not get you the video at this time try later:', error);
        repondre('sorry I can not get you the video at this time try later.');
      });
    } else {
      repondre('Try another video');
    }
  } catch (error) {
    console.error('sorry I cannot get you the video at this time try later:', error);
    repondre('sorry I cannot get you the video at this time try later.');
  }
});
