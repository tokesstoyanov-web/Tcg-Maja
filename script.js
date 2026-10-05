var IMG={
 /* League */ "Jinx":"images/jinx.webp","Xayah":"images/xayah.webp","Neeko":"images/neeko.webp","Kayn":"images/kayn.webp","Evelynn":"images/evelynn.webp",
 /* Muse Dash */ "Buro":"images/buro.webp","Rin":"images/rin.webp","Marija":"images/marija.webp",
 /* Resident Evil */ "Ada Wong":"images/ada.webp","Leon Kennedy":"images/leon.webp","Claire Redfield":"images/claire.webp","Chris Redfield":"images/chris.webp","Jill Valentine":"images/jill.webp","Albert Wesker":"images/albert.webp","Ethan Winters":"images/ethan.webp",
 /* Dead by Daylight */ "The Legion":"images/legion.webp","The Huntress":"images/huntress.webp",
 /* Genshin Impact */ "Lohen":"images/lohen.webp","Nefer":"images/nefer.webp","Vesna":"images/vesna.webp","Dottore":"images/dottore.webp","Mualani":"images/mualani.webp",
 /* My Dress-Up Darling */ "Marin Kitagawa":"images/marin.webp","Wakana Gojo":"images/wakana.webp","Shinju Inui":"images/shinju.webp","Sajuna Inui":"images/sajuna.webp",
 /* Akame ga Kill! */ "Akame":"images/akame.webp","Lubbock":"images/lubbock.webp","Chelsea":"images/chelsea.webp","Sheele":"images/sheele.webp","Leone":"images/leone.webp","Tatsumi":"images/tatsumi.webp","Mine":"images/mine.webp","Bulat":"images/bulat.webp","Najenda":"images/najenda.webp","Esdeath":"images/esdeath.webp","Kurome":"images/kurome.webp","Wave":"images/wave.webp",
 /* Saiki K. */ "Saiki":"images/saiki.webp","Kaidou":"images/kaidou.webp","Aren":"images/aren.webp","Toritsuka":"images/toritsuka.webp","Kuusuke":"images/kuusuke.webp","Kokomi":"images/kokomi.webp","Riki Nendou":"images/riki.webp","Chiyo Yumehara":"images/chiyo.webp",
 /* Panty & Stocking */ "Panty":"images/panty.webp","Stocking":"images/stocking.webp",
 /* Hunter x Hunter */ "Killua":"images/killua.webp","Kite":"images/kite.webp","Alluka":"images/alluka.webp","Shizuku":"images/shizuku.webp","Kalluto":"images/kalluto.webp","Gon":"images/gon.webp","Kurapika":"images/kurapika.webp","Leorio":"images/leorio.webp","Hisoka":"images/hisoka.webp","Chrollo":"images/chrollo.webp",
 /* Alien Stage */ "Till":"images/till.webp","Sua":"images/sua.webp","Mizi":"images/mizi.webp","Ivan":"images/ivan.webp","Luka":"images/luka.webp",
 /* Gumball */ "Gumball":"images/gumball.webp","Darwin":"images/darwin.webp","Anais":"images/anais.webp","Nicole":"images/nicole.webp","Richard":"images/richard.webp","Penny":"images/penny.webp",
 /* My Little Pony */ "Twilight Sparkle":"images/twilight.webp","Rainbow Dash":"images/rainbowdash.webp","Pinkie Pie":"images/pinkiepie.webp","Rarity":"images/rarity.webp","Applejack":"images/applejack.webp","Fluttershy":"images/fluttershy.webp","Spike":"images/spike.webp","Princess Celestia":"images/celestia.webp","Princess Luna":"images/luna.webp","Discord":"images/discord.webp","Starlight Glimmer":"images/starlight.webp","Trixie":"images/trixie.webp",
 /* South Park */ "Kyle":"images/kyle.webp","Stan":"images/stan.webp","Wendy":"images/wendy.webp","Eric Cartman":"images/eric.webp","Kenny":"images/kenny.webp","Butters":"images/butters.webp","Randy":"images/randy.webp",
 /* Secret */ "Maja":"images/maja.webp","Us":"images/us.webp","Antonio":"images/antonio.webp","Maira":"images/maira.webp","Happy Birthday":"images/happy.webp","Luna":"images/lunaa.webp","Mila":"images/mila.webp"
};
// Where to crop each picture inside the card (x% y%). Tweak these if a face gets cut off.
var POS={"Dottore":"50% 30%","Jinx":"35% 22%","Xayah":"55% 18%","Neeko":"30% 40%","Kayn":"50% 25%","Evelynn":"55% 22%","Buro":"40% 40%","Ada Wong":"60% 30%","Leon Kennedy":"45% 20%","The Legion":"50% 40%","The Huntress":"47% 50%","Lohen":"85% 40%","Nefer":"50% 50%","Vesna":"55% 40%","Mualani":"40% 22%"};
var FIT={"Rin":"contain"}; // "contain" = show the whole picture, "cover" = fill the card, missing = automatic (wide pictures are shown whole)
var ZOOM={}; // extra zoom for a card, e.g. "Jinx":1.3 // pictures that should be shown whole instead of cropped

var RAW="League|Jinx:L,Xayah:E,Neeko:R,Kayn:R,Evelynn:E;Muse Dash|Buro:R,Rin:R;Resident Evil|Ada Wong:E,Leon Kennedy:E;Dead by Daylight|The Legion:R,The Huntress:E;Genshin Impact|Lohen:R,Nefer:E,Vesna:R,Dottore:L,Mualani:E;My Dress-Up Darling|Marin Kitagawa:L;Akame ga Kill!|Akame:E,Lubbock:C,Chelsea:R,Sheele:R,Leone:E;Saiki K.|Saiki:L,Kaidou:C,Aren:R,Toritsuka:R,Kuusuke:C,Kokomi:E;Panty & Stocking|Panty:E;Hunter x Hunter|Killua:L,Kite:R,Alluka:E,Shizuku:R,Kalluto:C;Alien Stage|Till:E;Amazing World of Gumball|Gumball:R;My Little Pony|Twilight Sparkle:L,Rainbow Dash:E,Pinkie Pie:E,Rarity:R,Applejack:R,Fluttershy:R,Spike:R,Princess Celestia:C,Princess Luna:R,Discord:E,Starlight Glimmer:C,Trixie:C;South Park|Kyle:C,Stan:C,Wendy:C;Secret|Maja:S,Us:S,Antonio:S,Maira:S,Happy Birthday:S"+
// ---- more main characters (added to the end so earlier cards keep their numbers) ----
";Muse Dash|Marija:R"+
";Resident Evil|Claire Redfield:R,Chris Redfield:R,Jill Valentine:E,Albert Wesker:E,Ethan Winters:C"+
";My Dress-Up Darling|Wakana Gojo:E,Shinju Inui:E,Sajuna Inui:R"+
";Akame ga Kill!|Tatsumi:R,Mine:E,Bulat:C,Najenda:C,Esdeath:L,Kurome:R,Wave:C"+
";Saiki K.|Riki Nendou:C,Chiyo Yumehara:R"+
";Panty & Stocking|Stocking:E"+
";Hunter x Hunter|Gon:E,Kurapika:E,Leorio:C,Hisoka:L,Chrollo:E"+
";Alien Stage|Sua:E,Mizi:E,Ivan:E,Luka:R"+
";Amazing World of Gumball|Darwin:R,Anais:C,Nicole:C,Richard:C,Penny:R"+
";South Park|Eric Cartman:E,Kenny:R,Butters:R,Randy:C"+
// ---- more secret cards (kept at the end so card numbers stay the same) ----
";Secret|Luna:S,Mila:S";
var RN={C:"COMMON",R:"RARE",E:"EPIC",L:"LEGENDARY",S:"SECRET"},BC={C:2,R:4,E:6,L:8,S:10};
var CARDS=[];RAW.split(";").forEach(function(g){var p=g.split("|");p[1].split(",").forEach(function(x){var q=x.split(":");CARDS.push({id:CARDS.length,n:q[0],s:p[0],r:q[1]})})});
function h(s){var v=7;for(var i=0;i<s.length;i++)v=(v*31+s.charCodeAt(i))%9973;return v}
CARDS.forEach(function(c){c.cost=BC[c.r]+h(c.n)%2;c.a=1+h(c.n)%5+({C:0,R:1,E:2,L:3,S:4})[c.r];c.d=1+h(c.n+"x")%5+({C:0,R:1,E:2,L:3,S:4})[c.r];if(c.n=="Dottore"){c.cost=9;c.a=5;c.d=5}});
CARDS.forEach(function(c){if(c.n=="Happy Birthday"){c.a=6;c.d=10}if(c.n=="Us"){c.a=10;c.d=10}if(c.n=="Mila")c.d=8});
var PV={C:1,R:2,E:4,L:10,S:20}; // trade points a spare (duplicate) card is worth, by rarity
var LIST=CARDS.filter(function(c){return c.r!="S"});
var S={coins:150,own:{},quiz:{}};
try{var sv=localStorage.getItem("maja_vault");if(sv)S=JSON.parse(sv)}catch(e){}
S.boss=S.boss||{};
function save(){try{localStorage.setItem("maja_vault",JSON.stringify(S))}catch(e){}}
// Each show gets its own frame colors + shape (see the "Show themes" part of style.css). [css name, icon]
var TH={"League":["lol","⚔️"],"Muse Dash":["muse","🎵"],"Resident Evil":["re","☣️"],"Dead by Daylight":["dbd","🔪"],"Genshin Impact":["gi","✦"],"My Dress-Up Darling":["mdd","🧵"],"Akame ga Kill!":["agk","🗡️"],"Saiki K.":["saiki","🍮"],"Panty & Stocking":["pns","🍰"],"Hunter x Hunter":["hxh","🎣"],"Alien Stage":["as","👽"],"Amazing World of Gumball":["gb","🐱"],"My Little Pony":["mlp","🦄"],"South Park":["sp","🏔️"],"Secret":["sec","🔒"]};
var ALIAS={dottore:["dottoree"],albert:["wesker"],wakana:["gojo"],riki:["nendou"],eric:["cartman"],happy:["birthday","happybirthday"],twilight:["twilightsparkle"],starlight:["starlightglimmer"],celestia:["princesscelestia"]};
function IMGL(n){var p=IMG[n];if(!p)return[];var b=p.replace(/^.*\//,"").replace(/\.\w+$/,""),l=n.toLowerCase(),o=[],seen={},
bs=[b].concat(ALIAS[b]||[],[l.replace(/\s+/g,"-"),l.replace(/\s+/g,"_"),l.replace(/\s+/g,""),b[0].toUpperCase()+b.slice(1),n]);
["images/","Images/",""].forEach(function(f){bs.forEach(function(k){[".webp",".png",".jpg",".jpeg",".avif",".jfif"].forEach(function(x){var u=f+k+x;if(!seen[u]){seen[u]=1;o.push(u)}})})});return o}
function imgFail(el){var l=IMGL(el.dataset.n),i=+el.dataset.i+1;if(i<l.length){el.dataset.i=i;el.src=l[i];return}el.onerror=null;var p=el.parentNode,n=el.dataset.n;
if(p.classList.contains("art")){p.style.background="linear-gradient(135deg,hsl("+h(n)%360+",55%,32%),hsl("+(h(n)+60)%360+",60%,16%))";p.innerHTML="<span>"+n[0]+"</span>"}else el.outerHTML="<i>"+n[0]+"</i>"}
function imgTag(n,st){return '<img alt="" src="'+IMGL(n)[0]+'" data-n="'+esc(n)+'" data-i="0" '+st+' onload="imgOk(this)" onerror="imgFail(this)">'}
function imgOk(el){var p=el.parentNode;if(!p.classList.contains("art"))return;p.style.setProperty("--bg","url("+el.src+")");var m=FIT[el.dataset.n]||"auto",ct=m=="contain"||(m=="auto"&&el.naturalWidth/el.naturalHeight>1.15);p.classList.toggle("fit",ct);el.style.objectFit=ct?"contain":"cover";if(ct)el.style.transform="none"}
// Cards in this list get a cut-out of the character that pops out of the frame (needs images/<file>-cut.webp). Add names here once you have a cutout.
var BREAK=["Dottore","Jinx","Xayah","Mualani","Ada Wong","Leon Kennedy"];
function popTag(n){var b=IMG[n].replace(/^.*\//,"").replace(/\.\w+$/,"");return '<img class="pop" alt="" src="images/'+b+'-cut.webp" style="object-position:'+(POS[n]||"50% 30%")+'" onerror="if(!this.dataset.r){this.dataset.r=1;this.src=\''+b+'-cut.webp\'}else{this.closest(\'.card\').classList.remove(\'brk\');this.remove()}">'}
function card(c,dim){var u=IMG[c.n],fit=FIT[c.n]=="contain",pop=(!dim&&u&&BREAK.indexOf(c.n)>-1)?popTag(c.n):"";
var ps=POS[c.n]||"50% 30%",zm=ZOOM[c.n]&&!fit?";transform-origin:"+ps+";transform:scale("+ZOOM[c.n]+")":"";
var art=u?imgTag(c.n,'style="object-position:'+ps+';object-fit:'+(fit?"contain":"cover")+zm+'"'):'<span>'+c.n[0]+'</span>';
var st=u?'':' style="background:linear-gradient(135deg,hsl('+h(c.n)%360+',55%,32%),hsl('+(h(c.n)+60)%360+',60%,16%))"';
var no=String(c.id+1).padStart(3,"0")+" / "+String(CARDS.length).padStart(3,"0");
return '<div class="card r-'+c.r+' sh-'+(TH[c.s]?TH[c.s][0]:"x")+(dim?' dim':'')+(pop?' brk':'')+'"><div class="in"><div class="art'+(fit?' fit':'')+'"'+st+'>'+art+'</div><div class="foil"></div>'+pop+'<div class="orn"></div><div class="crest"></div><div class="cost" title="Cost">'+c.cost+'</div><div class="rr">★ '+RN[c.r]+'</div><div class="base"><div class="nm">'+(dim?'???':c.n)+'</div><div class="ser">'+(TH[c.s]?TH[c.s][1]+" ":"")+c.s+'</div><div class="num">'+no+'</div></div><div class="bdg at" title="Attack">'+c.a+'</div><div class="bdg df" title="Defense">'+c.d+'</div></div></div>'}
function roll(min,sec){var x=Math.random()*100,r;if(x<sec)r="S";else if(x<sec+1.5)r="L";else if(x<sec+7.5)r="E";else if(x<sec+27.5)r="R";else r="C";
var order="CREL";if(r!="S"&&order.indexOf(r)<order.indexOf(min))r=min;
var pool=CARDS.filter(function(c){return c.r==r&&!(r=="S"&&c.n=="Happy Birthday")});return pool[Math.floor(Math.random()*pool.length)]}
function open(cost,min,sec,pts){if(pts?(S.pts||0)<cost:S.coins<cost)return;if(pts)S.pts-=cost;else S.coins-=cost;S.packs=(S.packs||0)+1;if(S.packs>=BDAY_PACKS&&!S.bday){S.bday=1;BP=true}var got=[roll(min,sec),roll(min,sec),roll(min,sec)];got.forEach(function(c){S.own[c.id]=(S.own[c.id]||0)+1});save();hud();
var rv=document.getElementById("rv");rv.innerHTML=got.map(function(c){return '<div class="fl'+(c.r=="L"||c.r=="S"?" big":"")+'"><div class="bk">★</div>'+card(c)+'</div>'}).join("");
rv.querySelectorAll(".fl").forEach(function(f){f.onclick=function(){f.classList.add("up")}});var GL={C:"#9aa7b8",R:"#4fa3ff",E:"#b266ff",L:"#e8c26a",S:"#ff6ad5"},bo="CRELS",bc="C";got.forEach(function(c){if(bo.indexOf(c.r)>bo.indexOf(bc))bc=c.r});document.getElementById("ov").style.setProperty("--glow",GL[bc]);document.getElementById("ov").classList.add("on")}
document.getElementById("cl").onclick=function(){document.getElementById("ov").classList.remove("on");show(T);if(BP){BP=false;birthday()}};
var T="shop",SORT="show";
function hud(){document.getElementById("coins").textContent=S.coins;var n=Object.keys(S.own).length;document.getElementById("cnt").textContent=n+"/"+CARDS.length}
// ---- QUIZ: tap-to-answer only, no typing. type "choice" = one right answer (c = its position, starting at 0). type "pick" = no wrong answer, any pick earns coins.
// Add your own personal question like this (only you know the answer):
// {q:"Where did we first meet?",type:"choice",a:["The park","A cafe","School","Online"],c:3,coins:100},
var QS=[
{q:"What kind of character is your favorite?",type:"pick",a:["The mysterious villain","The chaotic gremlin","The cool deadly assassin","The sweet cinnamon roll"],coins:40},
{q:"Our perfect day together would be...",type:"pick",a:["Cozy at home with snacks and shows","A gaming marathon","An adventure outside","Trying a new restaurant and dessert"],coins:40},
{q:"What makes you smile the most?",type:"pick",a:["My jokes","My dumb faces","When I hype you up","Just me being me"],coins:40},
{q:"What kind of music matches us best?",type:"pick",a:["Chill lo-fi","Rock and anime openings","Pop bangers","Sad love songs"],coins:30},
{q:"What was the first thing you noticed about me?",type:"pick",a:["My eyes","My smile","My humor","My energy"],coins:40},
{q:"Which world would we visit together?",type:"pick",a:["Equestria","Teyvat","Piltover and Zaun","South Park"],coins:40},
{q:"My favorite kind of memory with you is...",type:"pick",a:["Silly moments","Late-night talks","Playing games together","Little everyday moments"],coins:50},
{q:"Which card do you want the most?",type:"pick",a:["A shiny Legendary","A rainbow Secret","My favorite character","All of them!"],coins:30},
{q:"A dream we should do together someday?",type:"pick",a:["Travel the world","Go to a convention","Have a cozy home","Make something together"],coins:50},
{q:"Which word describes me best?",type:"pick",a:["Funny","Sweet","Chaotic","Cool"],coins:30},
{q:"Our vibe together is mostly...",type:"pick",a:["Giggling nonstop","Cozy and calm","Chaotic energy","Deep talks"],coins:40},
{q:"Pick my royal title:",type:"pick",a:["Prince of Snacks","Lord of Memes","Knight of Cuddles","Sir Chaos"],coins:30},
{q:"Who is Killua's best friend in Hunter x Hunter?",type:"choice",a:["Kurapika","Gon","Leorio","Hisoka"],c:1,coins:40},
{q:"Which League of Legends champion is known as the Loose Cannon?",type:"choice",a:["Vi","Caitlyn","Jinx","Ekko"],c:2,coins:40},
{q:"Who is Gumball's brother?",type:"choice",a:["Darwin","Tobias","Banana Joe","Anais"],c:0,coins:40},
{q:"In Akame ga Kill!, whose teigu (sword) is Murasame?",type:"choice",a:["Leone","Akame","Chelsea","Sheele"],c:1,coins:40},
{q:"What color is Twilight Sparkle?",type:"choice",a:["Purple","Yellow","Pink","Orange"],c:0,coins:30},
{q:"What is Saiki's favorite food?",type:"choice",a:["Ramen","Pizza","Coffee jelly","Cake"],c:2,coins:40},
// ---- more show questions (added at the end so earlier answers stay saved) ----
{q:"What is Gon's father's name?",s:"Hunter x Hunter",type:"choice",a:["Isaac Netero", "Wing", "Kite", "Ging Freecss"],c:3,coins:30},
{q:"What is Killua's family name?",s:"Hunter x Hunter",type:"choice",a:["Freecss", "Paradinight", "Morow", "Zoldyck"],c:3,coins:30},
{q:"Which Nen type is Hisoka?",s:"Hunter x Hunter",type:"choice",a:["Conjurer", "Emitter", "Specialist", "Transmuter"],c:3,coins:50},
{q:"Who leads the Phantom Troupe?",s:"Hunter x Hunter",type:"choice",a:["Hisoka", "Chrollo Lucilfer", "Uvogin", "Feitan"],c:1,coins:40},
{q:"Which Zoldyck brother is Alluka closest to?",s:"Hunter x Hunter",type:"choice",a:["Illumi", "Killua", "Milluki", "Kalluto"],c:1,coins:30},
{q:"Which song is the first ending of Hunter x Hunter (2011)?",s:"Hunter x Hunter",type:"choice",a:["Hit Me Up", "Rain", "Legends Never Die", "Just Awake"],c:3,coins:30},
{q:"What is the assassin group Akame belongs to called?",s:"Akame ga Kill!",type:"choice",a:["The Jaegers", "Night Raid", "Phantom Troupe", "Wild Hunt"],c:1,coins:30},
{q:"Who leads the Jaegers?",s:"Akame ga Kill!",type:"choice",a:["Esdeath", "Wave", "Run", "Kurome"],c:0,coins:40},
{q:"Who is Akame's younger sister?",s:"Akame ga Kill!",type:"choice",a:["Leone", "Mine", "Chelsea", "Kurome"],c:3,coins:30},
{q:"What is the name of Mine's teigu?",s:"Akame ga Kill!",type:"choice",a:["Murasame", "Extase", "Pumpkin", "Lionel"],c:2,coins:50},
{q:"What color is Saiki's hair?",s:"Saiki K.",type:"choice",a:["Blue", "Pink", "Green", "White"],c:1,coins:30},
{q:"Who is Saiki's loud, super-strong, not-so-smart friend?",s:"Saiki K.",type:"choice",a:["Riki Nendou", "Toritsuka", "Aren", "Kaidou"],c:0,coins:30},
{q:"What does Wakana Gojo make?",s:"My Dress-Up Darling",type:"choice",a:["Hina dolls", "Model kits", "Paper cranes", "Pottery"],c:0,coins:30},
{q:"Which character does Marin first cosplay with Gojo's help?",s:"My Dress-Up Darling",type:"choice",a:["Sailor Moon", "Misa Amane", "Asuka Langley", "Shizuku-tan"],c:3,coins:50},
{q:"What kind of game is Muse Dash?",s:"Muse Dash",type:"choice",a:["Puzzle game", "Fighting game", "Racing game", "Rhythm game"],c:3,coins:30},
{q:"Rin, Buro and ... are the three main characters of Muse Dash.",s:"Muse Dash",type:"choice",a:["Neko", "Marija", "Elfin", "Mika"],c:1,coins:40},
{q:"Which city is destroyed in Resident Evil 2?",s:"Resident Evil",type:"choice",a:["Raccoon City", "Silent Hill", "Racoon Falls", "Midwich"],c:0,coins:30},
{q:"Who is the president's daughter Leon rescues in Resident Evil 4?",s:"Resident Evil",type:"choice",a:["Ashley Graham", "Claire Redfield", "Sherry Birkin", "Rebecca Chambers"],c:0,coins:40},
{q:"Who is Chris Redfield's sister?",s:"Resident Evil",type:"choice",a:["Claire", "Jill", "Ada", "Rebecca"],c:0,coins:30},
{q:"Which unit were Chris, Jill and Wesker originally part of?",s:"Resident Evil",type:"choice",a:["S.T.A.R.S.", "B.S.A.A.", "U.S.S.", "Umbrella Corps"],c:0,coins:40},
{q:"What do Panty and Stocking fight?",s:"Panty & Stocking",type:"choice",a:["Zombies", "Ghosts", "Robots", "Dragons"],c:1,coins:30},
{q:"What is the name of the city they protect?",s:"Panty & Stocking",type:"choice",a:["Raccoon City", "Daten City", "Zaun", "South Park"],c:1,coins:40},
{q:"Who is paired with Till in the first episode of Alien Stage?",s:"Alien Stage",type:"choice",a:["Sua", "Mizi", "Ivan", "Luka"],c:0,coins:40},
{q:"What kind of animal is Gumball?",s:"Gumball",type:"choice",a:["A dog", "A rabbit", "A fish", "A cat"],c:3,coins:30},
{q:"What kind of animal is Darwin?",s:"Gumball",type:"choice",a:["A frog", "A dolphin", "A goldfish", "A seal"],c:2,coins:30},
{q:"Who is Gumball's crush?",s:"Gumball",type:"choice",a:["Carrie", "Tina", "Masami", "Penny"],c:3,coins:30},
{q:"What is Gumball's last name?",s:"Gumball",type:"choice",a:["Wattson", "Watterson", "Waterston", "Watters"],c:1,coins:40},
{q:"Which pony is the Element of Honesty?",s:"My Little Pony",type:"choice",a:["Rarity", "Applejack", "Fluttershy", "Pinkie Pie"],c:1,coins:40},
{q:"Which pony is the Element of Loyalty?",s:"My Little Pony",type:"choice",a:["Rarity", "Fluttershy", "Rainbow Dash", "Pinkie Pie"],c:2,coins:40},
{q:"Who is Twilight Sparkle's baby dragon assistant?",s:"My Little Pony",type:"choice",a:["Discord", "Garble", "Smolder", "Spike"],c:3,coins:30},
{q:"Which princess raises the sun?",s:"My Little Pony",type:"choice",a:["Celestia", "Luna", "Cadance", "Twilight"],c:0,coins:30},
{q:"Who is the chaotic draconequus?",s:"My Little Pony",type:"choice",a:["Discord", "Chrysalis", "Tirek", "Sombra"],c:0,coins:30},
{q:"What color is Kenny's parka?",s:"South Park",type:"choice",a:["Green", "Red", "Blue", "Orange"],c:3,coins:30},
{q:"Which state is South Park in?",s:"South Park",type:"choice",a:["Texas", "Oregon", "Colorado", "Montana"],c:2,coins:30},
{q:"Who is Stan's best friend?",s:"South Park",type:"choice",a:["Cartman", "Kenny", "Butters", "Kyle"],c:3,coins:30},
{q:"What happens to Kenny in most early episodes?",s:"South Park",type:"choice",a:["He dies", "He wins", "He moves away", "He gets famous"],c:0,coins:30},
{q:"Cartman's catchphrase is 'Respect my ...!'",s:"South Park",type:"choice",a:["Cheesy Poofs", "Mom", "Authoritah", "Hat"],c:2,coins:40},
{q:"Which city is Jinx from?",s:"League of Legends",type:"choice",a:["Piltover", "Noxus", "Zaun", "Demacia"],c:2,coins:30},
{q:"What is Jinx's sister called?",s:"League of Legends",type:"choice",a:["Caitlyn", "Vi", "Mel", "Ekko"],c:1,coins:30},
{q:"Who is Xayah's partner?",s:"League of Legends",type:"choice",a:["Kayn", "Zed", "Rakan", "Ekko"],c:2,coins:40},
{q:"What kind of creature is Neeko?",s:"League of Legends",type:"choice",a:["A chameleon", "A fox", "A cat", "A bird"],c:0,coins:40},
{q:"What is the name of Kayn's living Darkin scythe?",s:"League of Legends",type:"choice",a:["Rhaast", "Varus", "Aatrox", "Kled"],c:0,coins:50},
{q:"What is Dottore's title among the Fatui Harbingers?",s:"Genshin Impact",type:"choice",a:["The Doctor", "The Captain", "The Jester", "The Knave"],c:0,coins:50},
{q:"Which element does Mualani use?",s:"Genshin Impact",type:"choice",a:["Pyro", "Cryo", "Anemo", "Hydro"],c:3,coins:40},
{q:"Which nation is Mualani from?",s:"Genshin Impact",type:"choice",a:["Natlan", "Mondstadt", "Sumeru", "Fontaine"],c:0,coins:40},
{q:"What does The Huntress throw?",s:"Dead by Daylight",type:"choice",a:["Daggers", "Chains", "Hatchets", "Bombs"],c:2,coins:30},
{q:"How many survivors face the killer in a normal match?",s:"Dead by Daylight",type:"choice",a:["Two", "Three", "Six", "Four"],c:3,coins:30},
{q:"How many members make up The Legion?",s:"Dead by Daylight",type:"choice",a:["Four", "Two", "Three", "Six"],c:0,coins:40},
{q:"Legends Never Die was the League of Legends anthem for which Worlds?",s:"Music",type:"choice",a:["Worlds 2017", "Worlds 2015", "Worlds 2019", "Worlds 2021"],c:0,coins:40},
{q:"'Liar Mask' is an opening from which show?",s:"Music",type:"choice",a:["Akame ga Kill!", "Hunter x Hunter", "Saiki K.", "Panty & Stocking"],c:0,coins:30},
{q:"'Ma Meilleure Ennemie' is from which show?",s:"Music",type:"choice",a:["Alien Stage", "Arcane", "Muse Dash", "Gumball"],c:1,coins:30}
];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function quiz(m){var y=window.scrollY,n=0,left=0;QS.forEach(function(q,i){if(S.quiz[i])n++;else left+=q.coins});
m.innerHTML='<div class="quiz"><p style="text-align:center;opacity:.8">Tap an answer to earn coins. Some questions have a right answer, and some are just for fun, so every pick counts 💛</p><p style="text-align:center;font-weight:700">Answered '+n+' / '+QS.length+' &nbsp; 🪙 '+left+' still to earn</p>'+QS.map(function(q,i){var d=S.quiz[i],b="";
if(d)b='<p class="done">✓ '+(d.a?esc(d.a):"Done")+'</p>';
else b=q.a.map(function(a,j){return '<button class="btn" data-'+(q.type=="choice"?"q":"p")+'="'+i+'" data-a="'+j+'">'+esc(a)+'</button>'}).join("");
return '<div class="q">'+(q.s?'<small style="color:var(--teal);letter-spacing:.12em;text-transform:uppercase">'+q.s+'</small>':'')+'<p>'+q.q+' <b class="pay">🪙 '+q.coins+'</b></p>'+b+'</div>'}).join("")+'<div style="text-align:center"><button class="btn" id="cpa">Copy my answers</button></div></div>';
function ok(i,a){S.quiz[i]={a:a};S.coins+=QS[i].coins;save();hud();quiz(m)}
m.querySelectorAll("[data-q]").forEach(function(b){b.onclick=function(){var i=+b.dataset.q,q=QS[i];if(+b.dataset.a==q.c)ok(i,q.a[q.c]);else{b.disabled=true;b.textContent+=" ✗"}}});
m.querySelectorAll("[data-p]").forEach(function(b){b.onclick=function(){var i=+b.dataset.p;ok(i,QS[i].a[+b.dataset.a])}});
document.getElementById("cpa").onclick=function(){var bt=this,t=QS.map(function(q,i){var d=S.quiz[i];return d&&d.a?q.q+"\n→ "+d.a:""}).filter(Boolean).join("\n\n");try{navigator.clipboard.writeText(t).then(function(){bt.textContent="Copied! ✓"})}catch(e){window.prompt("Copy this:",t)}};
window.scrollTo(0,y)}
function show(t){T=t;document.querySelectorAll("nav button").forEach(function(b){b.classList.toggle("on",b.dataset.t==t)});var m=document.getElementById("m");
if(t=="shop"){m.innerHTML='<div class="packs"><div class="pack std"><h3>Starter Pack</h3><div>3 cards</div><button class="btn" id="p1" '+(S.coins<30?"disabled":"")+'>🪙 30</button><button class="btn" id="p1t" '+((S.pts||0)<10?"disabled":"")+'>♻ 10 points</button></div><div class="pack sec"><h3>Secret Pack</h3><div>Epic or better, and a tiny chance at a Secret</div><button class="btn" id="p2" '+(S.coins<250?"disabled":"")+'>🪙 250</button><button class="btn" id="p2t" '+((S.pts||0)<30?"disabled":"")+'>♻ 30 points</button></div></div><p style="text-align:center;margin-top:18px">♻️ Trade points: <b>'+(S.pts||0)+'</b><br><small>Trade spare duplicate cards from the Collection or Secrets tab to earn points (Common 1, Rare 2, Epic 4, Legendary 10, Secret 20)</small><br><br>'+tallBtn()+'</p>';
document.getElementById("p1").onclick=function(){open(30,"C",.3)};document.getElementById("p1t").onclick=function(){open(10,"C",.3,1)};document.getElementById("p2t").onclick=function(){open(30,"E",6,1)};document.getElementById("p2").onclick=function(){open(250,"E",6)}}
else if(t=="col"){var cell=function(c){var o=S.own[c.id];return '<div style="position:relative">'+card(c,!o)+(o>1?'<span class="qty">x'+o+'</span>':'')+tbtn(c,o)+'</div>'};
var html='<div style="text-align:center;margin-bottom:14px"><select id="so" class="btn"><option value="show">Sort: By show</option><option value="rar">Sort: By rarity</option><option value="own">Sort: Owned first</option></select> &nbsp; ♻ '+(S.pts||0)+' trade points<div style="margin-top:10px">'+tallBtn()+'</div></div>';
if(SORT=="show"){var gs=[];LX().forEach(function(c){if(gs.indexOf(c.s)<0)gs.push(c.s)});gs.forEach(function(g){var l=LX().filter(function(c){return c.s==g});var n=l.filter(function(c){return S.own[c.id]}).length;html+='<h2 style="font-size:16px;letter-spacing:.1em;margin:22px 0 10px;color:#fff4d2">'+g+' <span style="color:var(--teal)">'+n+'/'+l.length+'</span></h2><div class="grid">'+l.map(cell).join("")+'</div>'})}
else{var ro="SLERC",l=LX().slice().sort(function(x,y){if(SORT=="own"){var d=(S.own[y.id]?1:0)-(S.own[x.id]?1:0);if(d)return d}return ro.indexOf(x.r)-ro.indexOf(y.r)||x.id-y.id});html+='<div class="grid">'+l.map(cell).join("")+'</div>'}
m.innerHTML=html;var so=document.getElementById("so");so.value=SORT;so.onchange=function(){SORT=so.value;show("col")}}
else if(t=="dun"){dungeon(m)}else if(t=="sec"){secrets(m)}else{quiz(m)}bindTrade(m)}
// ---- DUNGEON: each boss drops one secret card (first win). Edit names/stats here. ----
var BOSSES=[
{n:"Sock Goblin",e:"🧦",hp:90,atk:9,t:"“Where do all the missing socks go? To MY LAIR!”",drop:"Maira",coins:50},
{n:"The Snack Thief",e:"🍪",hp:140,atk:10,t:"“I ate the last cookie. What are you gonna do about it?”",drop:"Luna",coins:75},
{n:"Lag Spike Dragon",e:"🐉",hp:190,atk:11,t:"“Connection... lost. Rawr.”",drop:"Mila",coins:100},
{n:"Monday Morning Demon",e:"👹",hp:240,atk:12,t:"“It's only Monday... forever.”",drop:"Maja",coins:150},
{n:"The Great Procrastinator",e:"⏳",hp:250,atk:13,t:"“I'll fight you tomorrow.”",drop:"Antonio",coins:250},
{n:"Boss of Bosses",e:"👑",hp:300,atk:14,t:"“Only true love can defeat me.”",drop:"Us",coins:400}];
function SCID(b){return CARDS.filter(function(c){return c.n==b.drop})[0].id}
var D={sq:[],busy:false};
function reveal(got){var rv=document.getElementById("rv"),ov=document.getElementById("ov");
rv.innerHTML=got.map(function(c){return '<div class="fl big"><div class="bk">★</div>'+card(c)+'</div>'}).join("");
rv.querySelectorAll(".fl").forEach(function(f){f.onclick=function(){f.classList.add("up")}});ov.style.setProperty("--glow","#ff6ad5");ov.classList.add("on")}
function dungeon(m){var y=window.scrollY,own=CARDS.filter(function(c){return S.own[c.id]}).sort(function(a,b){return b.a+b.d-a.a-a.d});
D.sq=D.sq.filter(function(id){return S.own[id]});var q=D.sq.map(function(id){return CARDS[id]}),A=q.reduce(function(s,c){return s+c.a},0),H=q.reduce(function(s,c){return s+c.d},0)*5;
m.innerHTML='<div class="dg"><h2 style="text-align:center;letter-spacing:.15em">⚔️ THE DUNGEON</h2><p style="text-align:center;opacity:.8">Pick up to 4 cards for your squad, then take on the bosses. Beat a boss for the first time to win a secret card! Your squad Power needs to be higher than the boss, and rarer cards are stronger. Bosses also do a HEAVY attack every 3rd round.</p>'+
(own.length?'<div style="text-align:center;margin-bottom:8px"><button class="btn" id="auto">Auto-pick best</button></div><div class="chips">'+own.map(function(c){return '<div class="chip r-'+c.r+(D.sq.indexOf(c.id)>-1?' on':'')+'" data-id="'+c.id+'">'+(IMG[c.n]?imgTag(c.n,''):'<i>'+c.n[0]+'</i>')+esc(c.n)+' ⚔'+c.a+' 🛡'+c.d+'</div>'}).join("")+'</div>':'<p style="text-align:center">You need cards first. Open a pack! 🃏</p>')+
'<p style="text-align:center;font-weight:700">Squad ('+q.length+'/4): ⚔ '+A+' &nbsp; ❤ '+H+' &nbsp; Power '+Math.round(A*H/100)+'</p><div class="arena" id="arena">Pick your squad, then choose a floor ⚔️</div><div class="floors">'+
BOSSES.map(function(b,i){var done=S.boss[i],lock=i>0&&!S.boss[i-1];return '<div class="fr'+(lock?' lock':'')+'"><div class="em">'+b.e+'</div><div class="info"><b>Floor '+(i+1)+': '+b.n+'</b><br>❤ '+b.hp+' &nbsp; ⚔ '+b.atk+' &nbsp; Power '+Math.round(b.hp*b.atk*1.2/100)+' &nbsp; '+(S.own[SCID(b)]?'✓ Secret found':done?'✓ Defeated, secret still hidden':'Guards a secret card')+'</div><button class="btn" data-f="'+i+'"'+(lock?' disabled':'')+'>'+(lock?'🔒':done?'Rematch':'Fight')+'</button></div>'}).join("")+'</div></div>';
m.querySelectorAll(".chip").forEach(function(c){c.onclick=function(){if(D.busy)return;var id=+c.dataset.id,k=D.sq.indexOf(id);if(k>-1)D.sq.splice(k,1);else if(D.sq.length<4)D.sq.push(id);dungeon(m)}});
var au=document.getElementById("auto");if(au)au.onclick=function(){if(!D.busy){D.sq=own.slice(0,4).map(function(c){return c.id});dungeon(m)}};
m.querySelectorAll("[data-f]").forEach(function(b){b.onclick=function(){fight(+b.dataset.f,q,A,H)}});window.scrollTo(0,y)}
function fight(i,q,A,H0){if(D.busy)return;var ar=document.getElementById("arena");if(!q.length){ar.textContent="Pick at least one card for your squad first! 💛";return}
var B=BOSSES[i],h=H0,bh=B.hp,ev=[],win=false;
for(var r=0;r<40&&h>0;r++){var cr=Math.random()<.15,dm=Math.round(A*(.8+Math.random()*.5)*(cr?1.5:1));bh=Math.max(0,bh-dm);ev.push({m:(cr?"💥 CRIT! ":"⚔️ ")+"Your squad hits for "+dm,b:bh,h:h});if(bh<=0){win=true;break}
var hv=r%3==2,bd=Math.round(B.atk*(.8+Math.random()*.5)*(hv?1.6:1));h=Math.max(0,h-bd);ev.push({m:(hv?"💢 HEAVY ATTACK! ":"")+B.e+" "+B.n+" hits for "+bd,b:bh,h:h})}
D.busy=true;ar.innerHTML='<div class="boss">'+B.e+'</div><b>'+B.n+'</b><div class="bar b"><i id="bb" style="width:100%"></i></div><div class="bar s"><i id="sb" style="width:100%"></i></div><div class="log" id="lg"><i>'+B.t+'</i></div>';
var bb=document.getElementById("bb"),sb=document.getElementById("sb"),lg=document.getElementById("lg"),k=0;
var t=setInterval(function(){var e=ev[k++];if(!e){clearInterval(t);end();return}bb.style.width=e.b/B.hp*100+"%";sb.style.width=e.h/H0*100+"%";lg.innerHTML+="<div>"+e.m+"</div>";lg.scrollTop=lg.scrollHeight},650);
function end(){D.busy=false;if(!win){lg.innerHTML+="<div>💀 Your squad was defeated... try stronger cards!</div>";return}
lg.innerHTML+="<div>🏆 Victory!</div>";var sc=CARDS.filter(function(c){return c.n==B.drop})[0],first=!S.boss[i];S.fl=S.fl||{};
if(first){S.boss[i]=1;S.coins+=B.coins;lg.innerHTML+="<div>+"+B.coins+" 🪙</div>"}else{S.coins+=5;lg.innerHTML+="<div>+5 🪙</div>"}
if(!S.own[sc.id]){if(Math.random()<.4||(S.fl[i]||0)>=2){S.own[sc.id]=1;lg.innerHTML+="<div>✨ A SECRET CARD dropped!</div>";setTimeout(function(){reveal([sc])},1100)}else{S.fl[i]=(S.fl[i]||0)+1;lg.innerHTML+="<div>🔒 No secret card this time... fight again!</div>"}}
save();hud()}}
function secrets(m){var sc=CARDS.filter(function(c){return c.r=="S"}),n=sc.filter(function(c){return S.own[c.id]}).length;
m.innerHTML='<h2 style="text-align:center;letter-spacing:.2em">🔒 THE SECRET VAULT <span style="color:var(--teal)">'+n+'/'+sc.length+'</span></h2><p style="text-align:center;opacity:.8">Rainbow cards found only by beating bosses in the Dungeon (they do not always drop!), or with a very lucky pack pull. One of them is a hidden surprise.</p><div class="grid">'+
sc.map(function(c){var bi=BOSSES.findIndex(function(b){return b.drop==c.n}),o=S.own[c.id];return '<div style="text-align:center">'+card(c,!o)+'<div class="sc">'+(o?'✓ Unlocked':bi<0?'🎂 A special surprise...':'Beat Floor '+(bi+1)+': '+BOSSES[bi].n+' (may take a few tries)')+'</div>'+tbtn(c,o)+'</div>'}).join("")+'</div>'}
document.querySelectorAll("nav button").forEach(function(b){b.onclick=function(){show(b.dataset.t)}});
// ---- MUSIC: drop mp3 files in a "music" folder, then list them here ----
var PLAYLIST=[
 {t:"Awesome As I Wanna Be - Equestria Girls: Rainbow Rocks",f:"music/awesome-as-i-wanna-be.mp3"},
 {t:"Under Our Spell - Equestria Girls: Rainbow Rocks",f:"music/under-our-spell.mp3"},
 {t:"FINAL - Alien Stage",f:"music/final-alien-stage.mp3"},
 {t:"Just Awake - Hunter x Hunter Ending 1",f:"music/just-awake.mp3"},
 {t:"Tell Me - Killua Zoldyck (Hunter x Hunter)",f:"music/tell-me-killua.mp3"},
 {t:"Legends Never Die - League of Legends",f:"music/legends-never-die.mp3"},
 {t:"HIT ME UP - Muse Dash",f:"music/hit-me-up.mp3"},
 {t:"ROUND 6 - Alien Stage",f:"music/round-6-alien-stage.mp3"},
 {t:"Rain",f:"music/rain.mp3"},
 {t:"Ma Meilleure Ennemie - Stromae & Pomme (Arcane)",f:"music/ma-meilleure-ennemie.mp3"},
 {t:"COOL GIRL - Weston Estate",f:"music/cool-girl.mp3"},
 {t:"GO - Weston Estate",f:"music/go-weston-estate.mp3"},
 {t:"So Good - Weston Estate",f:"music/so-good.mp3"},
 {t:"Cubism x Yamero Mashup - Needy Girl Overdose",f:"music/cubism-yamero.mp3"},
 {t:"INTERNET YAMERO - Aiobahn feat. KOTOKO",f:"music/internet-yamero.mp3"},
 {t:"Akame ga Kill! Opening 1",f:"music/akame-ga-kill-op1.mp3"},
 {t:"Liar Mask - Akame ga Kill! Opening 2",f:"music/liar-mask.mp3"},
 {t:"All-in - Alien Stage",f:"music/all-in-alien-stage.mp3"}
];
var au=new Audio(),pi=0,vol=.5,pt=document.getElementById("pt"),pp=document.getElementById("pp");
try{var sv2=localStorage.getItem("maja_vol");if(sv2!==null)vol=+sv2}catch(e){}
au.volume=vol;var pvol=document.getElementById("pvol");pvol.value=vol;
pvol.oninput=function(){au.volume=+pvol.value;try{localStorage.setItem("maja_vol",pvol.value)}catch(e){}};
function ld(i){pi=(i+PLAYLIST.length)%PLAYLIST.length;au._t=0;au.src=PLAYLIST[pi].f;pt.textContent=PLAYLIST[pi].t}
var FAILS=0;
function plp(){au._pl=1;au.play().catch(function(){})}
// if a song file cannot be found: try next to index.html, then say what is wrong (and skip to the next song)
au.onerror=function(){var f=PLAYLIST[pi].f;
if(au._t==0){au._t=1;au.src=f.replace(/^.*\//,"");if(au._pl)plp();return}
if(au._t==1){au._t=2;au.src=f.replace(/^music\//,"Music/");if(au._pl)plp();return}
au._t=3;FAILS++;pt.textContent="⚠ Can't find "+f+" (check the file name and the music folder)";
if(au._pl&&FAILS<PLAYLIST.length)setTimeout(nx,2500)};
au.onplaying=function(){FAILS=0;pt.textContent=PLAYLIST[pi].t};
if(PLAYLIST.length){ld(Math.floor(Math.random()*PLAYLIST.length))}
au.onplay=function(){pp.textContent="⏸"};au.onpause=function(){pp.textContent="▶"};
au.onended=function(){nx()};
pp.onclick=function(){if(!PLAYLIST.length)return;if(au.paused)plp();else au.pause()};
document.getElementById("pn").onclick=function(){if(PLAYLIST.length)nx()};
document.getElementById("pv").onclick=function(){if(PLAYLIST.length){ld(SH&&HIST.length?HIST.pop():pi-1);plp()}};
var SH=true,BAG=[],HIST=[],drag=false,seek=document.getElementById("seek"),tc=document.getElementById("tc"),td=document.getElementById("td"),ps=document.getElementById("ps");
try{var shv=localStorage.getItem("maja_sh");if(shv!==null)SH=shv=="1"}catch(e){}
function shp(){ps.classList.toggle("on",SH);ps.setAttribute("aria-pressed",SH)}shp();
ps.onclick=function(){SH=!SH;BAG=[];shp();try{localStorage.setItem("maja_sh",SH?"1":"0")}catch(e){}};
function nx(){if(!PLAYLIST.length)return;HIST.push(pi);if(HIST.length>50)HIST.shift();
if(SH&&PLAYLIST.length>1){if(!BAG.length){BAG=PLAYLIST.map(function(_,i){return i}).filter(function(i){return i!=pi});for(var k=BAG.length-1;k>0;k--){var r=Math.floor(Math.random()*(k+1)),t=BAG[k];BAG[k]=BAG[r];BAG[r]=t}}ld(BAG.pop())}else ld(pi+1);plp()}
function fm(t){t=t||0;var m=Math.floor(t/60),x=Math.floor(t%60);return m+":"+(x<10?"0":"")+x}
au.onloadedmetadata=function(){td.textContent=fm(au.duration)};
au.ontimeupdate=function(){tc.textContent=fm(au.currentTime);if(!drag&&au.duration)seek.value=au.currentTime/au.duration*100};
seek.onpointerdown=function(){drag=true};seek.onpointerup=function(){drag=false};seek.onchange=function(){drag=false};
seek.oninput=function(){if(au.duration){au.currentTime=seek.value/100*au.duration;tc.textContent=fm(au.currentTime)}};
document.addEventListener("click",function(e){if(PLAYLIST.length&&!e.target.closest("#pl")&&au.paused&&!au.currentTime)plp()},{once:true});
// ---- TRADING: spare copies of a card can be traded for points, and points buy packs ----
function tbtn(c,o){return o>1?'<button class="btn" style="display:block;margin:8px auto 0;font-size:12px;padding:5px 12px" data-tr="'+c.id+'">♻ Trade spare +'+PV[c.r]+'</button>':""}
function LX(){return LIST.concat(CARDS.filter(function(c){return c.r=="S"&&S.own[c.id]}))}
function dupInfo(){var n=0,p=0;CARDS.forEach(function(c){var o=S.own[c.id]||0;if(o>1){n+=o-1;p+=(o-1)*PV[c.r]}});return{n:n,p:p}}
function tallBtn(){var d=dupInfo();return '<button class="btn" id="tall"'+(d.n?'':' disabled')+'>♻ Trade all spares ('+d.n+' cards = +'+d.p+' points)</button>'}
function tradeAll(){var d=dupInfo();if(!d.n)return;if(!window.confirm("Trade all "+d.n+" spare cards for "+d.p+" trade points? You keep one copy of every card."))return;var y=window.scrollY;CARDS.forEach(function(c){var o=S.own[c.id]||0;if(o>1){S.pts=(S.pts||0)+(o-1)*PV[c.r];S.own[c.id]=1}});save();hud();show(T);window.scrollTo(0,y)}
function bindTrade(m){var ta=document.getElementById("tall");if(ta)ta.onclick=tradeAll;m.querySelectorAll("[data-tr]").forEach(function(b){b.onclick=function(){var id=+b.dataset.tr;if(!(S.own[id]>1))return;var y=window.scrollY;S.own[id]--;S.pts=(S.pts||0)+PV[CARDS[id].r];save();hud();show(T);window.scrollTo(0,y)}})}
// ---- BIRTHDAY EASTER EGG: opening BDAY_PACKS packs starts a surprise. AGE = number of candles. ----
var BP=false,BDAY_PACKS=19,AGE=19,BDAY_NAME="Maja";
function confetti(sec){var cv=document.getElementById("cv");if(!cv||matchMedia("(prefers-reduced-motion:reduce)").matches)return;var x=cv.getContext("2d");cv.width=innerWidth;cv.height=innerHeight;
var P=[],C=["#ff6ad5","#ffd36a","#6affb5","#6ab5ff","#b266ff","#fff"],t0=Date.now();
for(var i=0;i<180;i++)P.push({x:Math.random()*cv.width,y:-Math.random()*cv.height*.6,vx:Math.random()*2-1,vy:2+Math.random()*3,r:Math.random()*6,vr:Math.random()*.2-.1,c:C[i%6],s:5+Math.random()*7});
(function f(){x.clearRect(0,0,cv.width,cv.height);P.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;if(p.y>cv.height&&Date.now()-t0<sec*800){p.y=-10;p.x=Math.random()*cv.width}x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);x.restore()});if(Date.now()-t0<sec*1000)requestAnimationFrame(f);else x.clearRect(0,0,cv.width,cv.height)})()}
function song(){try{var A=new (window.AudioContext||window.webkitAudioContext)(),t=A.currentTime+.1,b=.55,
N=[[392,.75],[392,.25],[440,1],[392,1],[523.25,1],[493.88,2],[392,.75],[392,.25],[440,1],[392,1],[587.33,1],[523.25,2],[392,.75],[392,.25],[783.99,1],[659.25,1],[523.25,1],[493.88,1],[440,1],[698.46,.75],[698.46,.25],[659.25,1],[523.25,1],[587.33,1],[523.25,2]];
N.forEach(function(n){var o=A.createOscillator(),g=A.createGain(),d=n[1]*b;o.type="triangle";o.frequency.value=n[0];g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.25,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+d*.95);o.connect(g);g.connect(A.destination);o.start(t);o.stop(t+d);t+=d});return t-A.currentTime}catch(e){return 0}}
function birthday(){if(document.getElementById("bd"))return;var wp=!au.paused;au.pause();
var cs="",i;for(i=0;i<AGE;i++){var cx=40+i*(260/(AGE-1)),col=["#ff6ad5","#6ab5ff","#ffd36a","#6affb5"][i%4];cs+='<rect x="'+(cx-3)+'" y="64" width="6" height="30" rx="2" fill="'+col+'"/><g class="cf" data-i="'+i+'"><ellipse cx="'+cx+'" cy="55" rx="4" ry="8" fill="#ffb02e"/><ellipse cx="'+cx+'" cy="58" rx="2" ry="4.5" fill="#fff3a0"/></g><circle cx="'+cx+'" cy="55" r="10" fill="transparent" data-cf="'+i+'"/>'}
var d=document.createElement("div");d.id="bd";d.innerHTML='<canvas id="cv"></canvas><h2 id="bt">🎉 Surprise! 🎉</h2><p id="bs">&nbsp;</p><svg id="ck" viewBox="0 0 340 215"><ellipse cx="170" cy="198" rx="165" ry="14" fill="#d9d2ea"/><rect x="20" y="142" width="300" height="52" rx="12" fill="#f6a5c8"/><rect x="30" y="100" width="280" height="48" rx="12" fill="#fff3d6"/><rect x="30" y="92" width="280" height="16" rx="8" fill="#ff6ab5"/><text x="170" y="134" text-anchor="middle" font-size="20" font-family="cursive,serif" fill="#b0235f">Happy Birthday '+BDAY_NAME+'</text>'+cs+'</svg><p id="bh">Blow out the candles: move your mouse (or finger) over the flames 🕯️</p><button class="btn" id="bg" style="display:none">Open your gift 🎁</button>';
document.body.appendChild(d);confetti(5);
var L=["Happy birthday to you","Happy birthday to you","Happy birthday dear "+BDAY_NAME,"Happy birthday to you!"],bs=document.getElementById("bs"),dur=song(),out=0;
L.forEach(function(l,k){setTimeout(function(){bs.textContent="♪ "+l+" ♪"},k*3300)});if(wp)setTimeout(plp,dur*1000+500);
function blow(el){if(!el||!el.dataset||el.dataset.cf==null)return;var f=d.querySelector('.cf[data-i="'+el.dataset.cf+'"]');if(!f||f.classList.contains("out"))return;f.classList.add("out");var cx=el.getAttribute("cx");el.remove();out++;
var sm=document.createElementNS("http://www.w3.org/2000/svg","circle");sm.setAttribute("cx",cx);sm.setAttribute("cy",52);sm.setAttribute("r",3);sm.setAttribute("class","sm");d.querySelector("#ck").appendChild(sm);setTimeout(function(){sm.remove()},1400);
if(out==AGE){document.getElementById("bt").textContent="Make a wish... 💛";document.getElementById("bh").textContent="Happy birthday "+BDAY_NAME+"!";confetti(6);document.getElementById("bg").style.display="inline-block"}}
d.addEventListener("pointermove",function(e){blow(document.elementFromPoint(e.clientX,e.clientY))});d.addEventListener("pointerdown",function(e){blow(document.elementFromPoint(e.clientX,e.clientY))});
document.getElementById("bg").onclick=function(){d.remove();S.bdayDone=1;S.coins+=100;var hb=CARDS.filter(function(c){return c.n=="Happy Birthday"})[0];S.own[hb.id]=(S.own[hb.id]||0)+1;save();hud();reveal([hb])}}
if(S.bday&&!S.bdayDone)document.addEventListener("click",function f(){document.removeEventListener("click",f);birthday()});
// ---- ART TUNER: open the site with ?tune=1 on the end (index.html?tune=1) to fix each picture's position and zoom ----
function tuner(m){document.querySelector("nav").style.display="none";document.getElementById("pl").style.display="none";
try{var t=JSON.parse(localStorage.getItem("maja_tune")||"{}");["POS","ZOOM","FIT"].forEach(function(k){var o=k=="POS"?POS:k=="ZOOM"?ZOOM:FIT;for(var n in (t[k]||{}))o[n]=t[k][n]})}catch(e){}
var list=CARDS.filter(function(c){return IMG[c.n]});
function out(){return "var POS="+JSON.stringify(POS)+";\nvar ZOOM="+JSON.stringify(ZOOM)+";\nvar FIT="+JSON.stringify(FIT)+";"}
function upd(c){var r=document.getElementById("t"+c.id),x=r.querySelector(".tx").value,y=r.querySelector(".ty").value,z=+r.querySelector(".tz").value,f=r.querySelector(".tf").value;POS[c.n]=x+"% "+y+"%";if(z>1)ZOOM[c.n]=z;else delete ZOOM[c.n];if(f=="auto")delete FIT[c.n];else FIT[c.n]=f;r.querySelector(".th").innerHTML=card(c);try{localStorage.setItem("maja_tune",JSON.stringify({POS:POS,ZOOM:ZOOM,FIT:FIT}))}catch(e){}}
m.innerHTML='<h2 style="text-align:center">Art tuner</h2><p style="text-align:center;max-width:620px;margin:0 auto 14px">Move the sliders until each picture looks right. Then press Copy settings and paste the result over the three lines that start with <b>var POS</b>, <b>var ZOOM</b> and <b>var FIT</b> in script.js.</p><p style="text-align:center"><button class="btn" id="tcp">Copy settings</button> <span id="tms"></span></p><div class="tn">'+
list.map(function(c){var p=(POS[c.n]||"50% 30%").split(" ");return '<div class="tr" id="t'+c.id+'"><div class="th">'+card(c)+'</div><div class="tc"><b>'+esc(c.n)+'</b><label>Left / right <input class="tx" type="range" min="0" max="100" value="'+parseInt(p[0])+'"></label><label>Up / down <input class="ty" type="range" min="0" max="100" value="'+parseInt(p[1])+'"></label><label>Zoom in <input class="tz" type="range" min="1" max="2.5" step=".05" value="'+(ZOOM[c.n]||1)+'"></label><label>Fit <select class="tf"><option>auto</option><option>cover</option><option>contain</option></select></label></div></div>'}).join("")+'</div>';
m.querySelectorAll(".tr").forEach(function(r,i){r.querySelector(".tf").value=FIT[list[i].n]||"auto";r.oninput=r.onchange=function(){upd(list[i])}});
document.getElementById("tcp").onclick=function(){var s=out(),ms=document.getElementById("tms");try{navigator.clipboard.writeText(s).then(function(){ms.textContent="Copied! Paste it into script.js"})}catch(e){window.prompt("Copy this:",s)}}}
// ---- START OVER button (top right) ----
var rb=document.createElement("button");rb.className="btn";rb.textContent="↺ Start over";rb.style.cssText="font-size:11px;padding:5px 10px;opacity:.75";
rb.onclick=function(){if(!window.confirm("Start over? This deletes ALL cards, coins, quiz answers and boss wins on this device. It can't be undone."))return;S={coins:150,own:{},quiz:{},boss:{}};D.sq=[];save();hud();show("shop")};
document.querySelector("header").appendChild(rb);
if(/[?&]tune/.test(location.search)){hud();tuner(document.getElementById("m"))}else{hud();show("shop")}
// 3D tilt + foil glare on collection cards
document.addEventListener("pointermove",function(e){var c=e.target.closest&&e.target.closest(".card:not(.dim)");if(!c)return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%");c.style.setProperty("--ry",(x-.5)*22+"deg");c.style.setProperty("--rx",(.5-y)*22+"deg")});
document.addEventListener("pointerout",function(e){var c=e.target.closest&&e.target.closest(".grid .card");if(c){c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")}});
