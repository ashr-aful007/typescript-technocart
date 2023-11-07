{
     //utility types
     type Person = {
          name: string;
          age: number;
          email?: string;
          contactNo: string 
     }

     type Name = Pick<Person,"name" | "age">

     //Omit

     type ContactInfo = Omit<Person, "name" | "age"> //without this property

     //Required
     type PersonRequired = Required<Person>

     //Partial
     type Personpartial = Partial<Person> //make optional type property

     //ReadOnly
     type PersonReadonly = Readonly<Person>

     const person1 : PersonReadonly ={
          name: "Mr. X",
          age: 200,
          contactNo: "0172441"
     }

     // person1.name = "Mr. YZ" //we can't assign this property this way it's readOnly
      
     // Record
     //  type MyObj = {
     //      a: string,
     //      b: string
     //  }

     type MyObj = Record<string, string>

      const obj1 : MyObj = {
          a: "aa",
          b: "bb",
          c: "cc"
      }

      //Record 
      const EmptyObj : Record<string, unknown> = {}
     //
}