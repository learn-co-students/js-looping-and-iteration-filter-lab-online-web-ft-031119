// Code your solution in this file
function findMatching(drivers, name) {
  let filtedDrivers = [];
  filtedDrivers = drivers.filter(function(driver){return driver.toLowerCase() === name.toLowerCase()});
  return filtedDrivers;
}

function fuzzyMatch(drivers, letters) {
  let matchedDrivers = [];
  matchedDrivers = drivers.filter(function(driver) {
    return (driver.indexOf(letters) === 0)
  });
  return matchedDrivers;
}

function matchName(drivers, name){
  let filteredDrivers = [];
  filteredDrivers = drivers.filter(function(driver){return driver.name === name});
  return filteredDrivers;
}
