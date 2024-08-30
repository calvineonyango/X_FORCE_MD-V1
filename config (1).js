//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "calvinonyango700@gmail.com";
global.location = "Migori, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/kenya";
global.github = process.env.GITHUB || "https://github.com/calvineonyango/X_FORCE_MD-VOLUME-5";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vadx3PxJ3juvWsDlrN11";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vadx3PxJ3juvWsDlrN11";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e692a1c0212676a0574f6.jpg";
global.devs = "https://t.me/obu254";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254796281776";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || "3";
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d651f3e156f14597440be.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0UyTEFKVnM4ZmhndHJUYVVJY3Y0RTVOWkEzMEhydWg5Sm5mbnNZazNuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlVUTVp2cmQrSnpFZ09BQ3V3dEsyaU8yRjl6Zy9jWHI1VWFIdVRhUmxCUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSTgwUTNRcG5MT2RVNzc1KzdZaUloWDhINndPd2ZCZTZGNE1ZNjNPTGswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUODNCbTVid0RRdkVEaGY2bWUwbFFxVmlyZjg2SHlnRjZiL2JuWlE3VjNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIK3R3SG91RFF5bHFQbHNPL2VBTEY4enNzZGlYR0h1MEtwUFNvYVVMMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx1WEhJVXUzUkpoQ0hsYWFxdkRWRmZnemlRdjN4OEltQlMxdEsyclI3bGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU9HWGtvWU1ZOG9tNDZmcWZWOUU1ZG1pOXAyaFJ4ZHpuN0hCMFVVeERsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFaRXZoMWt0Q3ZtZ29tekliaWdjWVl6RGdPNmVQbEJBdVE0ejd0ai94bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVwSG9weXk3YlhiK2FyZEhOb0FranJRNmpLSVVvVmp1ckR5aThGZWRjVzAzQmptZmFsK2R0dkt6ODZKRW5wWTFpK2VneW16YlhkVUJVbFVaRXBoVGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6InNqM0VOd2NTVWYwUTlVamtXamloNUdaSFlLSnFzZ1loYkFzVC9XcmFjbGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imo4djNrcERGU1NtYWkxd0xhdlpITWciLCJwaG9uZUlkIjoiYjQ1YzVhYTQtMWFjZi00NGFmLTg4ZjMtYWFkZTljOGQ1OTM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlYS1dmcElvd2cyOHkyVVQyeE9OVkd1VmZYaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTlpSZTFpN2Z0Q2U5VFJ3c016QjlYajVMeGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDdOOEtHN0MiLCJtZSI6eyJpZCI6IjI1NDc5NjI4MTc3NjozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQemtrcmNHRU83NW03WUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpZDZVanY3NXZDMFRJV0JxRVJXVnFGTEcxdDFvMCtzUWZkOE9tcy9iVmhVPSIsImFjY291bnRTaWduYXR1cmUiOiJxRVo2RHF0eGhsempkVjRrQy9BdlpyNlNSQU5CZEVFZG1mZWx1NTF4MVo5YmNSWVRIN0VGVllGU1FsOWhsUVk0Tm95clY0VllHRWIvN1NkNVJwa1dBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSk5QTGM1QzQwM090S3NjREFNZTA5NzJVczdQZms3NmFXaXFiRzkvWFpjVmlOakQ3ODBhL2pUQWpBU0RVekZWL0NLU1Z6M1NuUFlMVnNoeU8wRWs3amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTYyODE3NzY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZbmVsSTcrK2J3dEV5RmdhaEVWbGFoU3h0YmRhTlByRUgzZkRwclAyMVlWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MzE2OTI0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURHVCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "5.5.2",
  caption: process.env.CAPTION || "𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃 𝛁𝚯𝐋𝐔𝚳𝚵5™`",
  author: process.env.PACK_AUTHER || "𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃 𝛁𝚯𝐋𝐔𝚳𝚵5",
  packname: process.env.PACK_NAME || "𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃-𝛁𝚯𝐋𝐔𝚳𝚵5",
  botname: process.env.BOT_NAME || "𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃-𝛁𝚯𝐋𝐔𝚳𝚵5",
  ownername: process.env.OWNER_NAME || "𝐂𝚯𝚩𝐔≈≈𝚻𝚵𝐂𝚮",
  errorChat: process.env.ERROR_CHAT || "true",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
