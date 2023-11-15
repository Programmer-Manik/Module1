{
    //Object alias 
    type Student = {
        name : string;
        age : number;
        contactNo ? : number;
        gender : boolean;
    }

    const student1 : Student ={
        name : 'Md Mani',
        age : 13,
        gender : true,
    }
    const student2 : Student ={
        name : 'hak',
        age : 22,
        gender : false,
        contactNo: 222,
    }

    //type alias
    type UserName = string;
    type IsAdmin = boolean;
    
    const user : UserName = 'manik';
    const isAdmin : IsAdmin = true;
    // function alias 
    type Add = (num1 : number, num2 : number) => number;
    const add:Add = (num1,num2) => {
        return num1=num2 ; 
    }
    add(22,22)
}