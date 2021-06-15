const Discord = require("discord.js");
const client = new Discord.Client();
const img = new Discord.MessageAttachment('https://i.ibb.co/mctBktR/Dificultades.png');
const kiss = new Discord.MessageAttachment('https://i.pinimg.com/originals/04/01/df/0401df1ea3a1e76aafd49042c4f49f7f.gif');
const hola = new Discord.MessageAttachment('https://cdn128.picsart.com/215557330001202.gif?to=min&r=640');
const cry = new Discord.MessageAttachment('https://64.media.tumblr.com/91219cf76d12290235b496471d15cb40/tumblr_nbtqa50GyI1s4yh14o1_500.gif');
const hug = new Discord.MessageAttachment('https://acegif.com/wp-content/gif/anime-hug-12.gif');
const CanalCerrado = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/836022034307743764/843961713245683712/Canal_Cerrado.png");
const CanalAbierto = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/836022034307743764/843961710909849620/Canal_Abierto.png");
client.on("ready", () => {
    console.log("G10 Preparado");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("/normas")) {
     message.channel.send("La normativa de nuestro servidor esta aquí: <#825165258631938048>");
   }
 });

 client.on("message", (message) => {
    if(message.content.startsWith("/twitch")) {
      message.channel.send("❗Sigue a Live Leaks en su Twitch oficial: https://www.twitch.tv/liveleaks_");
    }
   });

   client.on("message", (message) => {
    if(message.content.startsWith("/youtube")) {
      message.channel.send("❗Sigue a Live Leaks en su canal de YouTube oficial: https://www.youtube.com/channel/UCi7ejft1qOIUuUhlemQsRtg");
    }
   });

 client.on("message", (message) => {
  if(message.content.startsWith("/inv")) {
    message.channel.send("Invita a alguien usando este link: https://discord.io/G10E");
  }
 });

 client.on("message", (message) => {
    if(message.content.startsWith("death land")) {
       message.channel.send("Actualmente Death Land esta en mantenimiento. Pero cualquier nueva informacion será notificada en <#807602545211473970>.");
    }
   });
  
   client.on("message", (message) => {
    if(message.content.startsWith("Death Land")) {
       message.channel.send("Actualmente Death Land esta en mantenimiento. Pero cualquier nueva informacion será notificada en <#807602545211473970>.");
    }
   });
  
   client.on("message", (message) => {
    if(message.content.startsWith("/Death Land")) {
       message.channel.send("Actualmente Death Land esta en mantenimiento. Pero cualquier nueva informacion será notificada en <#807602545211473970>.");
    }
   });

   client.on("message", (message) => {
    if(message.content.startsWith("/kiss")) {
      message.channel.send("Aqui tienes tu beso, Guap@.") + (message.channel.send(kiss)); 
    }
   });
  
   client.on("message", (message) => {
    if(message.content.startsWith("/cry")) {
      message.channel.send("Comenzaste a llorar.") + (message.channel.send(cry)); 
    }
   });
  
   client.on("message", (message) => {
    if(message.content.startsWith("/hug")) {
       message.channel.send("Aqui esta tu abrazo guap@.") + (message.channel.send(hug));
    }
   });

  client.on("message", (message) => {
    if(message.content.startsWith("hola")) {
      message.channel.send("!Hola <@"+ message.author + ">");
      message.channel.send(hola);
    }
  }); 

  client.on("message", (message) => {
    if(message.content.startsWith("Hola")) {
      message.channel.send("!Hola <@"+ message.author + ">");
      message.channel.send(hola);
    }
  });

  client.on("message", (message) => {
    if(message.content.startsWith("buenos días")) {
      message.channel.send("Igualmente. <@"+ message.author + ">");
    }
  }); 

  client.on("message", (message) => {
    if(message.content.startsWith("Buenos Días")) {
      message.channel.send("Igualmente. <@"+ message.author + ">");
    }
  }); 
  
  client.on("message", (message) => {
    if(message.content.startsWith("Buenos días")) {
      message.channel.send("Igualmente. <@"+ message.author + ">");
    }
  }); 

  client.on("message", (message) => {
    if(message.content.startsWith("Buenos días")) {
      message.channel.send("Igualmente. <@"+ message.author + ">");
    }
  });
 //-------------STAFF---------------

 client.on("message", message => {
  if(message.content.startsWith("/Comandos.staff")){
    if(message.member.roles.cache.find(rol => rol.id === "843950021144608788")){
      message.channel.send("<@"+ message.author + "> !**Este mensaje se autodestruirá en 10 segundos**. Los comandos para staff estan aquí: ").then(msg => msg.delete({timeout: 10000}));
      message.delete();    
    }
    else{
      message.channel.send("Este comando es exclusivo para el Staff");
    }
  }
})

client.on("message", message => {
  if(message.content.startsWith("/En.dessarrollo")){
    if(message.member.roles.cache.find(rol => rol.id === "843950021144608788")){
    }
    else{
      message.channel.send("Este comando esta en desarrollo.");
    }
  }
})

 client.on("message", message => {
  if(message.content.startsWith("/Mute")){
    if(message.member.roles.cache.find(rol => rol.id === "843950021144608788")){
      let user = message.mentions.users.first();
      message.member.roles.add("843821402914422814");
    }
    else{
      message.channel.send("Este comando es exclusivo para el Staff");
    }
  }
})

  client.on("message", message => {
    if(message.content.startsWith("/Cerrar.canal")){
      if(message.member.roles.cache.find(rol => rol.id === "843950021144608788")){
        message.channel.send(CanalCerrado);
        message.channel.send("Este canal ha sido Cerrado por <@"+ message.author + ">.");
        message.delete();
      }
      else{
        message.channel.send("Este comando es exclusivo para el Staff");
      }
    }
  })

  client.on("message", message => {
    if(message.content.startsWith("/Abrir.canal")){
      if(message.member.roles.cache.find(rol => rol.id === "843950021144608788")){
        message.channel.send(CanalAbierto);
        message.channel.send("Este canal ha sido Abierto por <@"+ message.author + ">.");
        message.delete();
      }
      else{
        message.channel.send("Este comando es exclusivo para el Staff");
      }
    }
  })

 client.login("ODQzOTQ3MjI5Nzk3OTQxMzM1.YKLRGw.HXvuEJ-TYKsaxKgwzF_ppbyV0q0");