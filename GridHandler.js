const prompt = require("prompt-sync")();
const grid = require("./grid");
const GridTerminalPrinter = require("./GridTerminalPrinter");

let GridHandler = class {
  constructor() {}

  dropPoo() {
    let poosition = Math.floor(Math.random() * 9);
    while (poosition == 6 || poosition == 2) {
      poosition = Math.floor(Math.random() * 9);
    }
    return poosition;
  }

  stepOn(game){
    let gamer=game;
    let move = prompt("dove vuoi muoverti?");
    if( move=='w' ){
        while (gamer==0 && gamer==1 && gamer==2){
            console.log("movimento non valido")
            move = prompt("dove vuoi muoverti?");
        }
         gamer=gamer-3;
         return gamer;
    } 
    if( move=='d' ){
        while (gamer==2 && gamer==5 && gamer==8){
            console.log("movimento non valido")
            move = prompt("dove vuoi muoverti?");
        }
         gamer=gamer+1;
         return gamer;
    } 
    if( move=='s' ){
        while (gamer==6 && gamer==7 && gamer==8){
            console.log("movimento non valido")
            move = prompt("dove vuoi muoverti?");
        }
        gamer=gamer+3;
        return gamer;
    } 
    if( move=='a' ){
        while (gamer==0 && gamer==3 && gamer==6){
            console.log("movimento non valido")
            move = prompt("dove vuoi muoverti?");
        }
         gamer=gamer-1;
         return gamer;
    } 
  }
};

module.exports = GridHandler;
