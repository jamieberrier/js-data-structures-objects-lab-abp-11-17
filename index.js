// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){

  const newDriver = { ...driver };

  newDriver[key] = value;

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;

  return driver;
}
//deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
//

let newdriver = deleteFromDriverByKey(driver, key);


/*
function destructivelyDeleteFromdriverByKey(driver, key){

  delete driver.key;

  return driver;

}
*/
