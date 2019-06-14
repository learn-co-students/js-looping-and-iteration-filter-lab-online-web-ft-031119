function findMatching(drivers, string) {
	return drivers.filter(function (name) { 
		return name.toLowerCase() === string.toLowerCase();
	});
};

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
};

function matchName(drivers, string){
	return drivers.filter(function (driver){
		return driver.name.toLowerCase() === string.toLowerCase();
	});
};
