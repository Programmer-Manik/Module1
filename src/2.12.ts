{
    // null type 
    const  searchName = (value : string | null) => {
        if(value){
            console.log("Searching");
        }else{
            console.log("there is nothing to search")
        }
    }
    searchName(null)

    // unknown type
    const getSpeedINMeterPerSecond = (value : unknown) => {
        if(typeof value === "number"){
            const convertedSpeed = (value *1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }else if(typeof value === "string"){
            const [ result , unit] = value.split("");
            const convertedSpeed = (parseFloat(result)*1000) / 3600 ;
            console.log(`the speed is ${convertedSpeed}`);
        }else{
            console.log("the speed is error")
        }
    } 
    getSpeedINMeterPerSecond(`1000 kmh^-1`)

    // never type 
    const throwError = (msg:string) : never =>{
        throw new Error(msg);
    }
    throwError('mushkil se error hogaya')
}