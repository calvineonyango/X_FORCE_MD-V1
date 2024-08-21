const {zokou}=require("../framework/zokou")







zokou({nomCom:"start",categorie:"Mods",reaction:"👨🏿‍💼"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for 𝕏-𝔽𝕆ℝℂ𝔼-𝕄𝔻𝕧𝟚 𝕔𝕣𝕖𝕒𝕥𝕖𝕕 𝕓𝕪 ℂ𝕒𝕝𝕧𝕚𝕟𝕖 𝕆𝕟𝕪𝕒𝕟𝕘𝕠 owner only");
  }

  const {exec}=require("child_process")

    repondre("*restarting ...*");

  exec("pm2 restart all");
  

  



})
