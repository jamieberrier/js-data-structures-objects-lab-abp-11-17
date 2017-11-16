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
/*
deleteFromDriverByKey(driver, key){

  const newDriver2 = { ...driver };

  delete newDriver2.key;

  return newDriver2;
}
*/
/*
function destructivelyDeleteFromdriverByKey(driver, key){

  delete driver.key;
  
  return driver;

}
*/