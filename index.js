function findMatching(drivers, name){
  let newDrivers = drivers.filter(function(driver){return driver.toLowerCase() === name.toLowerCase();});
  return newDrivers;
}

function fuzzyMatch(drivers, query){
  let queryLen = query.length;
  return drivers.filter(function(driver){
    return driver.slice(0, queryLen) === query;
  });
}

function matchName(drivers, query){
  return drivers.filter(function(driver){
    return driver.name === query;
  });
}
