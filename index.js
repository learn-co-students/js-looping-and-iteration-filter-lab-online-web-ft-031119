function findMatching(drivers,name){
  return drivers.filter(function (driver){return driver.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(drivers, fuzz){
  return drivers.filter(function(driver){return (driver.toLowerCase()).slice(0,fuzz.length) === fuzz.toLowerCase()})
}
function matchName(drivers,string){
  return drivers.filter(function(driver){return driver["name"] === string})
}
