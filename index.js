// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name) {
  return collection.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(collection, string) {
  let array = []
  collection.filter(driver => {
    if (driver.includes(string) && driver.indexOf(string) < 1) {
      array.push(driver);
    }
  });

  return array;
}

function matchName(collection, string) {
  let array = []
  collection.filter(driverInfo => {
    if (driverInfo.name === string) {
      array.push(driverInfo);
    }
  });

  return array;
}