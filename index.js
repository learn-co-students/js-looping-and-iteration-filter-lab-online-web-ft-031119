// Code your solution in this file
function findMatching(drivers,string){
  return drivers.filter(d => d.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, matcher){
   return drivers.filter(d => d.slice(0,2).includes(matcher))
}

function matchName(drivers, string){
   return drivers.filter(d => d.name === string)
}
