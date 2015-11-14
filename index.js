var _ = require('lodash')
var prompt = require('prompt');
var Table = require('cli-table');

prompt.start();
prompt.get(["min","max"], function(err, result){
  renderSequence( Number(result.min), Number(result.max));
})

function renderSequence(min, max){

  var tblHead = ['Index', 'Pyramidal sum', 'Reducer', 'Value'];
  var tblOpts = {
    head:tblHead,
    colWidths: [10, 15, 20, 10],
    colAligns: ['middle', 'middle', 'middle', 'middle']
  }
  
  var table = new Table(tblOpts);
  //Loop through each number
  for( var n=min; n<=max; n++){
    //Formula taken from https://oeis.org/A000292
    var pyramidalSum = ((n*(n+1))*(n+2))/6;

    var reducerString = pyramidalSum.toString(10).split("").join("+");
    var reduced = reduceNumber(pyramidalSum);

    table.push([n, pyramidalSum, reducerString, reduced]);

    if( n % 27 === 0 ){
      //Output this sequences table to the console
      console.log(table.toString());

      //When we are in a modular of 27 (e.g. diviging by 27 leaves a remainder of 0)
      console.log("*** End of sequence ***");
      console.log("");
      /*var reducedN = reduceNumber(n, true);
      console.log("Sum ="+reducedN)*/
      console.log("");
      console.log("*** Start of sequence ***");

      //Create a new table for the next 27 indexes
      table = new Table(tblOpts);
    }
  }

  //Ensure we print out any existing table
  console.log(table.toString());
}


/**
 * Add all of an integers component digits together until the result is a single digit
 * e.g 
 * 34  => 3 + 4 = 7
 * 349 => 3 + 4 + 9 = 16 => 1 + 6 => 7
 **/
function reduceNumber(input, log_steps){
  var log_steps = (typeof log_steps !== "undefined" && log_steps );
  if( log_steps ) console.log("Reducing "+input);

  if( input >= 10 ){
    //break down into component parts and add together
    if( log_steps ) console.log("Adding "+input.toString(10).split("").join("+") );

    var ints = input.toString(10).split("").map(function(t){return parseInt(t)});


    //Add all of the ints together
    var sum = ints.reduce(add, 0);

    //Pass the result back through the same method
    return reduceNumber(sum);
  } else {
    if(log_steps) console.log("Sum = "+input);
    return input;
  }
}

function add(a, b) {
    return a + b;
}