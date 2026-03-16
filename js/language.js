/* Micro Créatif Website
   language.js
   Version 1.1
*/

let currentLanguage = localStorage.getItem("mc_language") || "en";

const text = {
    en: {
        home: "Home",
        apps: "Apps",
        about: "About",
        contact: "Contact"
    },
    fr: {
        home: "Accueil",
        apps: "Applications",
        about: "À propos",
        contact: "Contact"
    }
};

function applyLanguage() {

    /* Navigation */

    const navHome = document.getElementById("navHome");
    if (navHome) navHome.textContent = text[currentLanguage].home;

    const navApps = document.getElementById("navApps");
    if (navApps) navApps.textContent = text[currentLanguage].apps;

    const navAbout = document.getElementById("navAbout");
    if (navAbout) navAbout.textContent = text[currentLanguage].about;

    const navContact = document.getElementById("navContact");
    if (navContact) navContact.textContent = text[currentLanguage].contact;

    /* Generic page text using data attributes */

    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = el.getAttribute("data-" + currentLanguage);
    });

    /* Language button */

    const langButton = document.getElementById("langButton");
    if (langButton) {
        langButton.textContent = currentLanguage === "en" ? "FR" : "EN";
    }

}

function toggleLanguage() {

    currentLanguage = currentLanguage === "en" ? "fr" : "en";

    localStorage.setItem("mc_language", currentLanguage);

    applyLanguage();

}

document.addEventListener("DOMContentLoaded", applyLanguage);
