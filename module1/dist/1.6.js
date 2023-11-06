"use strict";
// Learning function
//Normal Function
//Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (num1, num2) => num1 + num2;
//object --> function --> method
const poorUser = {
    name: 'Ashraful',
    balance: 0,
    addBalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    },
};
const arr = [1, 4, 10];
const newArry = arr.map((elem) => elem * elem);
