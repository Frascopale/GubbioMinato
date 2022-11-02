const prompt = require ('prompt-sync')();
const  grid  = require('./grid');
const GridHandler = require ('./Gridhandler');
const GridTerminalPrinter = require ('./GridTerminalPrinter');


let field = new GridTerminalPrinter (grid);
let turn = new GridHandler();
let gamer = 6;
let poo = new GridHandler(); 
let poosition = poo.dropPoo();



while(gamer!= poosition ){
    field.grid.gr[gamer]='X';   
field.displayGrid();
gamer = turn.stepOn(gamer);
if ( gamer==2){
    field.displayGrid();
    return console.log("Hai vinto!!!")
}
console.log(gamer);
}

/*field.grid.gr[poosition]='0';
console.log(poosition);
field.displayGrid();*/
