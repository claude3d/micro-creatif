const text={

en:{
navHome:"Home",
navApps:"Apps",
navAbout:"About",
navContact:"Contact",

title:"Micro Creatif",
since:"Since 1981",

menuApp1:"RA / Dec – AZ / Alt",
menuApp2:"Virtual Telescope",
menuApp3:"Solar System",

app1:"RA / Dec – AZ / Alt",
app2:"Virtual Telescope",
app3:"Solar System",

cities:"Montreal | Ho Chi Minh City"
},

fr:{
navHome:"Accueil",
navApps:"Applications",
navAbout:"À propos",
navContact:"Contact",

title:"Micro Créatif",
since:"Depuis 1981",

menuApp1:"RA / Dec – AZ / Alt",
menuApp2:"Télescope virtuel",
menuApp3:"Système solaire",

app1:"RA / Dec – AZ / Alt",
app2:"Télescope virtuel",
app3:"Système solaire",

cities:"Montréal | Hô Chi Minh Ville"
}

};

function applyLanguage(lang){

const t=text[lang];

document.getElementById("navHome").textContent=t.navHome;
document.getElementById("navApps").textContent=t.navApps;
document.getElementById("navAbout").textContent=t.navAbout;
document.getElementById("navContact").textContent=t.navContact;

document.getElementById("title").textContent=t.title;
document.getElementById("since").textContent=t.since;

document.getElementById("menuApp1").textContent=t.menuApp1;
document.getElementById("menuApp2").textContent=t.menuApp2;
document.getElementById("menuApp3").textContent=t.menuApp3;

document.getElementById("app1").textContent=t.app1;
document.getElementById("app2").textContent=t.app2;
document.getElementById("app3").textContent=t.app3;

document.getElementById("cities").textContent=t.cities;

document.getElementById("langButton").textContent=(lang==="en")?"FR":"EN";

}

function toggleLanguage(){

let lang=localStorage.getItem("lang")||"en";
lang=(lang==="en")?"fr":"en";

localStorage.setItem("lang",lang);

applyLanguage(lang);

}

document.addEventListener("DOMContentLoaded",function(){

let lang=localStorage.getItem("lang")||"en";
applyLanguage(lang);

});
