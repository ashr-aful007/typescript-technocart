{
     //generic type
     // const rollNumber : number[] = [3,6,8];
     const rollNumber : Array<number> = [3,6,8];

     const mentors: Array<string> = ['Mx.x', 'Mr. Y', 'Mr. Z'];
     // const mentors: string[]  = ['Mx.x', 'Mr. Y', 'Mr. Z'];

     const boolArry: Array<boolean> = [true, false, true]
     // const boolArry: boolean[] = [true, false, true]

     type GenericArry<T> = Array<T>

     const numberGenaricArry: GenericArry<number> = [2, 3, 5]
     //
     const sringGenaricArry: GenericArry<string> = ['hello', 'gello', 'gell3']
     //
     const boolGenaricArry: GenericArry<boolean> = []

     //
     const user : GenericArry<{name: string; age: number}> = [{
          name: 'Ashrf',
          age: 100
     },
     {
          name: 'alluh',
          age: 100
     },
     {
          name: 'jallu',
          age: 110
     }
]

     //Generic tuple
     type GenericTuple<X, Y> = [X, Y]
     const manush: GenericTuple<string,string> = ['Mr. x', 'Ms. y']

     //we can set our user with 
     // type User = {
     //      name: string,
     //      email: string,
     // }
     //with interface
     interface User {
          name: string;
          email: string
     }

     const UserWithID: GenericTuple<number, User> = [123, {name: 'Ashrf', email: 'a@gmail.com'}]


}