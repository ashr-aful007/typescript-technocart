{
     //OOP - inheritence
     //parent class for OOP
     class Parent {
          name: string;
          age: number;
          address: string
          constructor(name: string, age: number, address: string){
               this.name = name;
               this.age = age;
               this.address = address;
          }
          getSleep(numOfHours: number){
               console.log(`${this.name} will sleep for ${numOfHours}`);
          }
     }

     class Student extends Parent {
          constructor(name: string, age: number, address: string){
               super(name, age, address)
          }
     }
     //
     const Student1 = new Student('Mr. student', 20, 'Ugnda')
     Student1.getSleep(20)



     //OOP - inheritence
     class Teacher extends Parent{

          designation: string
          
          constructor(name: string, age: number, address: string, designation: string){
              super(name, age, address)
              this.designation = designation
          }

          takeClass(numOfClass: number){
               console.log(`${this.name} will take ${numOfClass}`);
          }
     }
     //
     const Teacher1 = new Teacher('Mr. student', 20, 'Ugnda', "propessor")
     Teacher1.getSleep(60)
}