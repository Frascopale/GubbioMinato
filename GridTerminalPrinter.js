
const GridHandler = require ('./Gridhandler');
const grid = require ('./grid');

let GridTerminalPrinter = class {
    constructor(grid){
        this.grid=grid;

    }

    buildGrid(grid){
        
        let field=[];
       for(let i=0;i<9;i++){
        if(i%3==0 && i !=0){
            field = field +'\n'
        }
        
        field = field + this.grid.gr[i] + ' ';
       }
       return field;
    }

   displayGrid(){
    let field = this.buildGrid();
    return console.log(field);
   }
}


module.exports = GridTerminalPrinter