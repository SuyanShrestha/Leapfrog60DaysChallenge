// - Write a program to print key and value in 'key - value' format of given object.

var myObj = {city: "Kathmandu", state: "Bagmati", country: "Nepal"}

const printKeyValue = (obj) => {
  for (let key in obj) {
    console.log(`${key} - ${obj[key]}`);
  }
};

printKeyValue(myObj);