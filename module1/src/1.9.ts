{
//Type Alias
type student = {
     name: string;
     age: number;
     contactNo?:string;
     gender: string;
     address: string;
}


//Type Alias
 const Student1: student= {
     name: 'Hossain',
     age: 50,
     contactNo:'1700000',
     gender: 'male',
     address: 'ctg'
};

const Student2: student = {
     name: 'Mir',
     age: 40,
     gender: 'male',
     address: 'dhk'
}


type UserName = string 
type IsAdmin = boolean
const userName : UserName = 'Persian'
const isAdmin : IsAdmin = true

//type Alias for function
// type Add = (num1: number, num2: number) => number;
// const add: Add = (num1, num2) => num1 + num2;


type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2












}