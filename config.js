const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "true"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_51_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTksXG4gICAgICAgIDgzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICA2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5RmpQdmRNdVU1bzVXV3N4SFk5WCtKaWdHbmlDRU16YTFKNUZMUXdIdER3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzcFNMUldlQlEyMnVad0FJZ0lIY0xBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAwNDVmOTNkLWYyMzktNDliOS1iZjExLTZkYWE0YmI3MTlmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAxNSxcbiAgICAgIDUxLFxuICAgICAgMjQ3LFxuICAgICAgMTU5LFxuICAgICAgMTM0LFxuICAgICAgMjQ5LFxuICAgICAgMTU2LFxuICAgICAgMTY1LFxuICAgICAgMjAyLFxuICAgICAgODYsXG4gICAgICAxNTIsXG4gICAgICAxMSxcbiAgICAgIDE2NyxcbiAgICAgIDIzMixcbiAgICAgIDIyNSxcbiAgICAgIDMwLFxuICAgICAgNTAsXG4gICAgICAxOCxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMjI1LFxuICAgICAgNTYsXG4gICAgICAzMSxcbiAgICAgIDEzNSxcbiAgICAgIDIyOSxcbiAgICAgIDI2LFxuICAgICAgMjU1LFxuICAgICAgMjExLFxuICAgICAgMjM5LFxuICAgICAgMzksXG4gICAgICAyMzEsXG4gICAgICAxMTcsXG4gICAgICAxODUsXG4gICAgICAxMTUsXG4gICAgICAxMDAsXG4gICAgICAzOCxcbiAgICAgIDc1LFxuICAgICAgMjQ5LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlo3S1pSOVdZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2NzIzNTc1Mjc6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNDgyNzQ3NjkyMjU3Mzo3MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJUHI3Y1VERVBpeWpib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjU2dGRXTlVHQUVraVo4WEJkTGdwN2JpdXJBb3FHVjc4bHZhcFdiLzU3aWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSC9VRnB5N1dwdHk3d091US9FSWdTeDA4M21JNTZsdW00UWlOYi8yOEZmbmd2NUwzWE5uelJoSVhIYUFUZXFvSGtGYjhDcVpZMUc2NzRZRzBCRGpTQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU1BhNlM1YWQxdEJlUTUyUEU4QWFucDVSTGl2a1podDg4ZXp5a2pwRjdEVk9WUVNDam9pVTJ4cWo1VzRZRmgybjBKdUpJZFdnWElySDZxVXIyWjc4Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjcyMzU3NTI3OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDY3MDY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSC9mXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIL2YuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "♪𝚻𝚯͜͡𝚳𝚳𝐘 ˢʰᵉˡᵖʸ🤤🤍💐",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
