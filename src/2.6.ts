{
    //leaning function 
    function add (num1 : number, num2 : number):number {
        return num1+num2
    }
    add(1,1);

    // normal object function 
    const poorUser ={
        balance : 0, 
        AddBalance(balance:number): string{
            return `my new balance is ; &{this.balance + balance}`
        },
    };
    // arrow function 
    const address = (sum1:number, sum2:number):number => sum1+sum2;
    address(20,2)

    //array 
    const arr : number[] = [1,2,3,4,];
    const newArray : number[] = arr.map((elem:number):number => elem*elem)

}