{
 // ternary operator
 const age : number = 15;
 const isAdult = age >= 18 ? 'Adult' : 'non Adult'
 console.log({isAdult})

 // nullish operator
  const isAuthenticated = null ; // undefined
  const result = isAuthenticated ?? "guest";
  console.log({result})

  // optional chaining 
  type User = {
    name : string ;
    address : {
        city : string;
        rod : string;
        permanentAddress: string;
        presentAddress ? : string
    }  
  }
  const user : User = {
    name : "manik",
    address : {
        city : 'dhaka',
        rod : 'thakurgaon',
        permanentAddress : 'dhaka'
    },
  }
  const permanentAddressMe = user?.address?.permanentAddress ?? "no permanent Address";
  console.log(permanentAddressMe)
}