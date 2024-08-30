//UBAH UBAH DISINI BRO JANGAN LUPA SUBREK YT DELTA TECH//
require("./all/module")
global.owner = "6283187035090" 
global.namaCreator = "" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '1.0' 
global.codeInvite = ""
global.isLink = ' ' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "BOT" 
global.author = "YT : DELTA TECH" 
global.jumlah = "5" 
global.namabot = "BOT DELTACRASH V2" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})