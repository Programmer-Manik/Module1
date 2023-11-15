"use strict";
{
    //leaning function 
    function add(num1, num2) {
        return num1 + num2;
    }
    add(1, 1);
    // normal object function 
    const poorUser = {
        balance: 0,
        AddBalance(balance) {
            return `my new balance is ; &{this.balance + balance}`;
        },
    };
    // arrow function 
    const address = (sum1, sum2) => sum1 + sum2;
    address(20, 2);
    //array 
    const arr = [1, 2, 3, 4,];
    const newArray = arr.map((elem) => elem * elem);
}
