{
     //interface 
     type User1 ={
          name: string;
          age: number
     }
     const user1: User1 = {
          name: 'Persian',
          age: 100,

     }

     interface User2 {
          name: string;
          age: number 
     }

     type UserWithRole1 = User1 & { role: string} //we can extend property this way 

     interface UserWithRole2 extends User1 {
          role: string 
     }

     const user2: UserWithRole2 ={
          name: "Persian",
          age: 100,
          role: "manager"
     }

     type Roll = number[];

     //interface for Arry 
     interface Roll2 {
          [index : number] : number
     }

     const rollNumber1: Roll = [1,2,3]
                              //   0 1 2 ---> number type

     type Add = (num1: number, num2: number) => number
     interface Add2 {
          (num1: number, num2:number) : number
     }

     const add: Add = (num1, num2) => num1 + num2

}