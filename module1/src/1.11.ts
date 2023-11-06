{
     //ternary operator || optional chaining || nullish coalescing operator 
     const age: number = 18;
     if(age >= 18){
          console.log('adult');
     }else{
          console.log('Not adult');
     }
     const isAdult = age >= 18 ? "adult" : "not adult";
     console.log({isAdult});

     //nulish coalescing operator 
     // null / undefined ---> decision making //when our data is this type of 
                                                  //then we use nullish coalescing 
     type User ={
          name: string;
          address: {
               city: string;
               road: string;
               presentAddress: string;
               permanentAddress?: string;
          }
     } 

     const user: User ={
          name: 'Persian',
          address: {
               city: 'ctg',
               road: 'molla Road',
               presentAddress: 'ctg town'
          }
     }
     const permanentAddress = user?.address?.permanentAddress ?? 'Dhaka';
     console.log({permanentAddress});






}

