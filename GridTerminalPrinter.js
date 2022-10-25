const prompt = require ('prompt-sync')();
const GridHandler = require ('./Gridhandler');
const grid = require ('./grid');

let GridTerminalPrinter = class {
    constructor(grid){
        this.grid=grid;

    }

    buildGrid(){
        for (let i=0; i<3 ; i++){
            if(i%3 ==0 && i !=0){
                grid = grid + '\n';
            }
            
        }
        return grid;
    }

    displayGrid(){
        this.buildGrid(grid);
       return console.log(grid);
    }
}


module.exports = GridTerminalPrinter