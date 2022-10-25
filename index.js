const prompt = require ('prompt-sync')();
const { grid } = require('./grid');
const GridHandler = require ('./Gridhandler');
const GridTerminalPrinter = require ('./GridTerminalPrinter');


let field = new GridTerminalPrinter ();

field.displayGrid();

