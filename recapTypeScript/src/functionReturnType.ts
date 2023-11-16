//creating a function with a return type
const addNums = (x: number, y: number): number =>{
     return x + y;
}

//Anonymous function
const numbers = [1, 2, 3];

//contextual typing on an arrow function
numbers.forEach(num =>{
     // return num.toUppercase();
     //toUpperCase() does't work for nums
})

//void 

//A function that doesn't return anything
const annoyUser = (num:number): void =>{
     for(let i = 0; i < num; i++){
          alert("Hiiii")
     }
}


//A function that doesn't finish running 
const neverStop = (): never =>{
     while(true){
          console.log("I'm still going!");
     }
}

//A function taht throws an exception
const giveError = (msg: string) =>{
     throw new Error(msg);
}






