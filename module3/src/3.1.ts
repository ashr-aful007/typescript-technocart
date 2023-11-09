{
     //oop
     //list
     //1.Inheritence
     //2.Polymorphism
     //3.Abstraction
     //4.Encapsulation

     //oop - calss
     class Animal {
          // name: string;
          // species: string;
          // sound: string;

          //parameter property 
          constructor(public name: string, public species: string, public sound: string){
               // this.name = name;
               // this.species = species;
               // this.sound = sound
          }
          makeSound(){
               console.log(`The ${this.name} says ${this.sound}`);
          }
     }

     const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
     const cat = new Animal("Persian bhai", "cat", "meaw meaw")
     cat.makeSound()

}