// Write your solution in this file!
var customerName = "bob"
var bestCustomer;
const leastFavoriteCustomer = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
  return customerName
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "bb"
}
