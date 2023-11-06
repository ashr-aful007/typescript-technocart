{
     //nullable types /unKnown types
     const serchName = (value: string | null) =>{
          if(value){
               console.log("Searching");
          }else{
               console.log("there is nothing to search");
          }
     }

     // serchName(null)
     //unknown types

     const getSpeedInMeterperSecond = (value:unknown) =>{
           if(typeof value === 'number'){
               const convertedSpeed = (value * 1000) / 3600;
               console.log(`The speed is ${convertedSpeed} ms^-1`);
           }
           if(typeof value === 'string'){
               const [result, unit] = value.split(' ')
               const convertedSpeed = (parseFloat(result) * 1000) / 3600;
               console.log(`the speed is ${convertedSpeed} ms^-1`);
           }else{
               console.log("Wrong input");
           }
     };
     // getSpeedInMeterperSecond(100)
     // getSpeedInMeterperSecond(null)
     // getSpeedInMeterperSecond("1000 ms^-1")

     //never types
     const throwError = (msg:string): never =>{
          throw new Error(msg)
     }

     throwError('muskil se error hogaya');

     //it's throw error its will be not return anythink 
     //its never types 




}