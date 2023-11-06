{
     //generic constraint with keyof operator
     type Vehicle = {
          bike: string;
          car: string;
          ship: string;
     }
     type Owner = "bike" | "car" | "ship";  //manually

     type Owner2 = keyof Vehicle

     // user.name //we can find property with dot notison 
     // user['name'] //also we can use this way

     //We can make fun for dynamic condison
     const getPropertyValue =<X, Y extends keyof X>(obj: X, key: Y) =>{
          return obj[key]
     } 
  
     const user = {
          name: 'Mr. rafi',
          age: 26,
          Address: 'ctg'
     }
     const car = {
          model: 'Toyota 100',
          year: 200
     }


     const result1 = getPropertyValue(user, 'name');


     //
}