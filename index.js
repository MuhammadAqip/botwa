const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const imageToBase64 = require('image-to-base64');
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const menu = require("./lib/menu.js");
const tambahan = require("./lib/tambahan.js")
const donasi = require("./lib/donasi.js");
const info = require("./lib/info.js");
/////////////////
const BotName = 'ST4RZ BOT'; 
const instagram = 'Gak Punya Instragram Boss'; 
const telegram = 'Gak Punya Telegram Boss'; 
const kapanbotaktif = 'Cuma Pas Diaktifkan Lah '; 
const youtube = 'Gak Punya Yt';
const grupch1 = 'belum ada grup'; 
const grupch2 = 'belum ada grup' ; 
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Scan kode qr dengan whatsapp!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated!`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log('Bot by M.Tsaqif')
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by M.Tsaqif`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);


// Groups

if (text.includes(".buatgrup"))
   {
var nama = text.split(".buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("Grup telah dibuat dengan id: " + group.gid)
conn.sendMessage(group.gid, "Halo semua!!!", MessageType.extendedText) // say hello to everyone on the group

}
//chat
if (text == 'ST4RZ')
}
// Fitur
if(text.includes('.cek")){
var num = text.replace(/.cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`nomor hp ${gg} ${exists ? " tersedia " : " tidak tersedia"} di whatsapp`, MessageType.text)
}

if (text.includes(".say")){
  const teks = text.replace(/.say /, "")
conn.sendMessage(id, teks, MessageType.text)
}

if (text.includes(".igstalk")){
const text = text.replace(/.igstalk/, "")
axios.get('https://arugaz.herokuapp.com/api/stalk?username${text}`).then((res) => {
	const { biography, follower, follow, post_count, full_name, username, picture, is_private } = istalk2.data.result
	const istalk3 = `*User Ditemukan!*
    let hasil = ` *Username:* ${res.data.username}\n\n *Nama:* ${res.data.full_name}\n\n *Bio:* ${res.data.biography}\n\n *Mengikuti:* ${res.data.follow}\n\n *Pengikut:* ${res.data.follower}\n\n *Jumlah Postingan:* ${res.data.post_count}\n\n*Profile:* ${res.data.urlprofile}`
conn.sendMessage(id, hasil, istalk3 ,MessageType.text
}

if (text.includes(".nulis"))
   {
      conn.sendMessage(id, "[ WAIT ] Sedang di proses silahkan tunggu sebentar", MessageType.text)
      const
      {
       spawn
      } = require("child_process");
      console.log("writing...")
      client.sendText(message.from, "sabar njir, masih nulis botnya")
      const teks = text.replace(/.nulis/, "")
      const split = teks.replace(/(\S+\s*){1,10}/g, "$&\n")
      const fixedHeight = split.split("\n").slice(0, 25).join("\\n")
      console.log(split)
      spawn("convert", [
        "./assets/paper.jpg",
        "-font",
        "Indie-Flower",
        "-size",
        "700x960",
        "-pointsize",
        "18",
        "-interline-spacing",
        "3",
        "-annotate",
        "+170+222",
        fixedHeight,
        "./assets/result.jpg"
      ])
        .on("error", () => console.log("error"))
        .on("exit", () => {
          client.sendImage(
            message.from,
            "./assets/result.jpg",
            "result.jpg",
            ""
          )
          console.log("done")
        })
    }

if (text.includes(".ytmp3"))
   {
      conn.sendMessage(id, "[ WAIT ] Sedang di proses silahkan tunggu sebentar", MessageType.text)
      const url = text.replace(/.ytmp3/, "");
      const exec = require('child_process').exec;

      var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

      const ytdl = require("ytdl-core")
      if (videoid != null)
      {
         console.log("audio id = ", audioid[1]);
      }
      else
      {
         conn.sendMessage(id, "Link Tidak Valid", MessageType.text)
      }
      ytdl.getInfo(audioid[1]).then(info =>
      {
         if (info.length_seconds > 20000)
         {
            conn.sendMessage(id, " videonya kepanjangan", MessageType.text)
         }
         else
         {

            console.log(info.length_seconds)

            function os_func()
            {
               this.execCommand = function (cmd)
               {
                  return new Promise((resolve, reject) =>
                  {
                     exec(cmd, (error, stdout, stderr) =>
                     {
                        if (error)
                        {
                           reject(error);
                           return;
                        }
                        resolve(stdout)
                     });
                  })
               }
            }
            var os = new os_func();

            os.execCommand('ytdl ' + url + ' -q highest -o mp3/' + audioid[1] + '.mp3').then(res =>
            {
		const buffer = fs.readFileSync("mp3/"+ audioid[1] +".mp3")
               conn.sendMessage(id, buffer, MessageType.audio)
            }).catch(err =>
            {
               console.log("os >>>", err);
            })

         }
      });
   }

if (text.includes(".ytmp4"))
   {
      conn.sendMessage(id, "[ WAIT ] Sedang di proses silahkan tunggu sebentar", MessageType.text)
      const url = text.replace(/.ytmp4/, "");
      const exec = require('child_process').exec;

      var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

      const ytdl = require("ytdl-core")
      if (videoid != null)
      {
         console.log("video id = ", videoid[1]);
      }
      else
      {
         conn.sendMessage(id, "Link Tidak Valid", MessageType.text)
      }
      ytdl.getInfo(videoid[1]).then(info =>
      {
         if (info.length_seconds > 20000)
         {
            conn.sendMessage(id, " videonya kepanjangan", MessageType.text)
         }
         else
         {

            console.log(info.length_seconds)

            function os_func()
            {
               this.execCommand = function (cmd)
               {
                  return new Promise((resolve, reject) =>
                  {
                     exec(cmd, (error, stdout, stderr) =>
                     {
                        if (error)
                        {
                           reject(error);
                           return;
                        }
                        resolve(stdout)
                     });
                  })
               }
            }
            var os = new os_func();

            os.execCommand('ytdl ' + url + ' -q highest -o mp4/' + videoid[1] + '.mp4').then(res =>
            {
		const buffer = fs.readFileSync("mp4/"+ videoid[1] +".mp4")
               conn.sendMessage(id, buffer, MessageType.video)
            }).catch(err =>
            {
               console.log("os >>>", err);
            })

         }
      });
   }

if (text.includes(".fb")){
const teks = text.replace(/.fb /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\nUkuran: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".ig")){
const teks = text.replace(/.ig /, "")
axios.get(`https://st4rz.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\n👇👇👇👇👇👇👇👇👇\n\nUkuran: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes(".twt")){
const teks = text.replace(/.twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\n👇👇👇👇👇👇👇👇👇\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes(".tiktok")) {
const tictoc = text.replace(/.tiktok /, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${tictoc}`).then((res) => {
     let titoe = `Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya! \n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}
if (text.includes(".wiki")){
const teks = text.replace(/.wiki /, "")
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
    let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text == '.menu'){
conn.sendMessage(id, menu.menu(id, BotName) ,MessageType.text);
}
if (text == '.help'){
conn.sendMessage(id, menu.menu(id, BotName) ,MessageType.text);
}
if (text.includes(".tagall")){
	const groupMek = conn.getGroupMembers(groupId)
	let heho = ' Mention All \n'
            for (let i = 0; i < groupMek.length; i++) {
                heho += ''
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += ' ST4RZ BOT '
             sleep(2000)
             conn.sendMessageWithMentions(from, heho)
else if (text == '.quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

else if (text == '.donasi'){
conn.sendMessage(id, donasi.donasi(id, BotName) ,MessageType.text);
}
else if (text == '.info'){
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif) ,MessageType.text);
}
else if (text == '.pict'){
conn.sendMessage(id, 'ulangi dengan  .pict cewek/cowok\n\nMisal: |pict cowok' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '.stiker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }
   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '.pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   };
      if (text.includes(".infocovid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`😭🤒DATA WABAH COVID-19 TERBARU DI INDONESIA😔😊\n\n😔Positif ==> ${positif} \n😊Sembuh ==> ${sembuh} \n😭Meninggal ==> ${meninggal}\n🤒Dirawat ==> ${dirawat}`, MessageType.text);
}
   if (text.includes(".quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
      Quotes untuk 
*${id.split("@s.whatsapp.net")[0]}*
     _${kata}_
           
	*~${author}*
         `, MessageType.text
            );

         });
   }
   else if (text.includes(". artinama ")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split(".artinama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Halo *${id.split("@s.whatsapp.net")[0]}*
      Arti dari namamu adalah

  ***********************************
         Nama _*${nama}*_ ${h}
  ***********************************

`,
 MessageType.text);
  });
  }
  else if (text.includes(".pasangan ")) {
    const request = require('request');
    var gh = text.split(".pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `

************************************

 *Kecocokan berdasarkan nama*


 ${d}


************************************
    `, MessageType.text);
  });
  }
   if (text.includes(".pict cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Nih Bro Cantik Kan 	
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes(".pict cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  var buf = Buffer.from(response, 'base64'); // Nih Bro Ganteng Kan
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes(".randomanime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nih bro) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
 else if (text.includes(".ttsid")) {
  var teks = text.split(".ttsid ")[1];
  var path = require('path');
  var text1 = teks.slice(6);
  text1 = suara;
  var suara = text.replace(/|ttsid/g, text1);
  var filepath = 'mp3/bacot.wav';
  
  
/*
 * save audio file
 */

gtts.save(filepath, suara, function() {
  console.log(`${filepath} MP3 SAVED!`)
});
await new Promise(resolve => setTimeout(resolve, 500));

	if(suara.length > 200){ // check longness of text, because otherways google translate will give me a empty file
  conn.sendMessage("Text kepanjangan bro!")
}else{

const buffer = fs.readFileSync(filepath)
	conn.sendMessage(id , buffer , MessageType.audio);

};
}
if (text.includes(".lirik")){
	const teks = text.split(".lirik")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	 	let hasil = `LIRIK DARI LAGU ${teks} ADALAH\n\n\n ${res.data.result.lirik}`
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes(".alay")){
  const alay = text.split("|alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes(".groupinfo")){
	var totalMem = chat.groupMetadata.participants.length
	var desc = chat.groupMetadata.desc
	var groupname = name
	* Name Group : ${groupname}
	* Members : ${totalMem}*
        * Group Description* : ${desc}`)
}
//AKHIRNYAAAAAAAA


})
