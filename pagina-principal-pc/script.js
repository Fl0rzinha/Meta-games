var ps4 = document.getElementById("ps4");
var xbox = document.getElementById("xbox");
var nintendo = document.getElementById("nintendo");
var pc = document.getElementById("pc");

var DOOM = document.getElementById("DOOM");
var R6 = document.getElementById("R6");
var Hitman3 = document.getElementById("Hitman3");
var Fallout4 = document.getElementById("Fallout4");
var Terraria = document.getElementById("Terraria");
var ProjectCars3 = document.getElementById("ProjectCars3");
var Forza4 = document.getElementById("Forza4");
var GTAV = document.getElementById("GTAV");
var TheWitcher3 = document.getElementById("TheWitcher3");
var Amongus = document.getElementById("Amongus");
var GenshinImapct = document.getElementById("GenshinImapct");
var Fortnite = document.getElementById("Fortnite");
var PUBG = document.getElementById("PUBG");
var Roblox = document.getElementById("Roblox");




ps4.addEventListener("click", function(){
    window.location.href = "../pagina-principal-ps4/index.html";
});

xbox.addEventListener("click", function(){
    window.location.href = "../pagina-principal-xbox/index.html";
});

nintendo.addEventListener("click", function(){
    window.location.href = "../pag-principal-nintendo/index.html";
});

pc.addEventListener("click", function(){
    window.location.href = "../pagina-principal-pc/index.html";
});


DOOM.addEventListener("click", function () {
    open("https://store.steampowered.com/app/379720/DOOM/");
});

R6.addEventListener("click", function () {
    open("https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/");
});

Hitman3.addEventListener("click", function () {
    open("https://store.steampowered.com/app/1659040/HITMAN_3/");
});

Fallout4.addEventListener("click", function () {
    open("https://store.steampowered.com/app/377160/Fallout_4/");
});

Terraria.addEventListener("click", function () {
    open("https://store.steampowered.com/app/105600/Terraria/");
});

ProjectCars3.addEventListener("click", function () {
    open("https://store.steampowered.com/app/958400/Project_CARS_3/");
});

Forza4.addEventListener("click", function () {
    open("https://store.steampowered.com/app/1293830/Forza_Horizon_4/");
});

GTAV.addEventListener("click", function () {
    open("https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/");
});

TheWitcher3.addEventListener("click", function () {
    open("https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/");
});

Amongus.addEventListener("click", function () {
    open("https://store.steampowered.com/app/945360/Among_Us/");
});

GenshinImapct.addEventListener("click", function () {
    open("https://genshin.hoyoverse.com/pt/");
});

Fortnite.addEventListener("click", function () {
    open("https://store.epicgames.com/pt-BR/p/fortnite");
});

PUBG.addEventListener("click", function () {
    open("https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/");
});

Roblox.addEventListener("click", function () {
    open("https://www.roblox.com/home");
});