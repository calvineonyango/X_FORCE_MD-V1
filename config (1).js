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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhRQ3FlUWtPb3pncVpBcUZyOFJRU25IYkMycnlCMHRlUnZLYnpGMitYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGYrcUZzbVA3QlVocEg3eFFJQ1BNRkhwODZnNllSMzFJTHdkdmhISGIxcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZREI2UFFLdUxZVjBkSUlRbC9tUkhmT0FhV3pEaDdlY2J3MTZ2TVNQeFZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Szh4aXVkdWJTcVZqd0QybUdXMjZoQnZjSzU0YjdlekFJNGs2Vm05UGprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGNUtlTHJnZENoNjVycVAxWURFenJCUHJmUk1GYWlQVElOV2lIcCtJbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEvM3Z4QlVlVE5sSUtwVFJLQnFaRG5WL2FtMVFiQVg4WUIyUXh0SGZRMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5zRExZUm1telFrdmRoanJ6Z1NzWWQyaGlqcjNZMFY2RDdoRGJpTFhHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHpiNU90dEJ6S1ZweVFON3BtbDYrN3M3UnNCT0Z3UGw4TUdtN3ZWSzFFcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA5K1BZOGsrT3crZ2hNZUpkSGhJYWtyK1h0eUZhRUVlMXVka1VIY2JRVFlhZHlDdXNsQlFxS0FWQmhnZzhUM1dPTjZVcWpRcWFrQ2dYRmFrZUxLOWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IjQ5N09uZUl5U3NSdVcraklvdFJTL2V2SlljcEVLdVFnaE1wSjE2QzNGM3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVpUUIxUWU4UXYyWENzWl9KeG9IRHciLCJwaG9uZUlkIjoiMjMyMTIxNGEtOWU5NS00MjQ5LTgxZjctMzY2YTY2OTIwMzNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JNDFqNk9xMjNSWTB1WnVmSGxmQUdoSk5DUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZldTUFFNVEhjcUN6WlI3OUhpcmUzUGhqOW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOENaQ01ERlciLCJtZSI6eyJpZCI6IjI1NDc5NjI4MTc3NjoxN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHpra3JjR0VNclN4YllHR0JRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaWQ2VWp2NzV2QzBUSVdCcUVSV1ZxRkxHMXQxbzArc1FmZDhPbXMvYlZoVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZTlVUGRIeHRDRXpjcWlYM1lJWEMwVVBiSFM4UGViYWNScDAwbnpCbGFBK0FCVUR6OHREOGVxcS9SMnlOQyt4eUM0QkxCVkUwOUpsNzB4YytZM1BTRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImxpaWhvcDZoVHdMb1BwYWtRK1lHK0I5SDRJclgxZEgxbnFpQk94Qy9YZ1dEVGxPZDl1ZEpNRWFLNEk0dG5IbDFHYW84eFo1bTVsZW56Wi9wOCtqcmh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk2MjgxNzc2OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlluZWxJNysrYnd0RXlGZ2FoRVZsYWhTeHRiZGFOUHJFSDNmRHByUDIxWVYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUwMDAwMjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREdoIn0="
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
