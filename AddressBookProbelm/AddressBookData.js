
//importing another class file to the class file
const PersonInfo = require("./PersonInfoData.js"); 
const prompt = require('prompt-sync')();

//Ability to add values to the PersonInfoData
var personInfo = new PersonInfo("sneha", "Raikwar", "bhopal", "bhopal", "MP", "471201", "984877678", "sn@abc.in");
console.log(personInfo.toString());

personInfo.firstName = "Aniket";
personInfo.lastName = "Raikwar";
personInfo.address = "Bhopal";
personInfo.city = "Bhopal";
personInfo.state = "M.P";
personInfo.zip = "471201";
personInfo.phoneNumber = "789548709";
personInfo.email = "an@abc.in";
console.log(personInfo.toString());

//Ability to add user-defined values to the PersonInfoData
personInfo.firstName = prompt("Enter First Name : "); 
personInfo.lastName = prompt("Enter Last Name : "); 
personInfo.address = prompt("Enter Address : "); 
personInfo.city = prompt("Enter City : "); 
personInfo.state = prompt("Enter State : "); 
personInfo.zip = prompt("Enter Zip : "); 
personInfo.phoneNumber = prompt("Enter Phone Number : "); 
personInfo.email = prompt("Enter Email : "); 
console.log(personInfo.toString());