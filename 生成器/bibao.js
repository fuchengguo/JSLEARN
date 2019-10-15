var gimmeSomething = (function(){ 
  var nextVal; 
  return function(){ 
  if (nextVal === undefined) { 
  nextVal = 1; 
  } 
  else { 
  nextVal = (3 * nextVal) +6; 
  } 
  return nextVal; 
  }; 
 })();
 console.log(gimmeSomething())
 console.log(gimmeSomething())
 console.log(gimmeSomething())
 console.log(gimmeSomething())