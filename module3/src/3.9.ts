{
     //
    //abstraction 1.interface 2.abstrac
    interface Vehicle1 {
       startEngine() : void;
       stopEngine() : void;
       move() : void
    }
    //real implementation
    class Car1 implements Vehicle1{
       startEngine(): void {
            console.log(`I am starting the car engine`);
       } 
       stopEngine(): void {
            console.log(`I am stop the car engine`);
       }
       move(): void {
            console.log(`Moving the car`);
       }
       test(){
          console.log(`I'm testing`);
       }
    }

    const toyotaCar = new Car1();
//     toyotaCar.startEngine()

     // abstract class
    abstract class Car2 {
        abstract startEngine(): void  
        abstract stopEngine(): void 
        abstract move(): void 
     }

     class ToyotaCar extends Car2 {
          startEngine(): void {
               console.log(`I am starting the car engine`);
          }
          stopEngine(): void {
               console.log(`I am stoping the car engine`);
          }
          move(): void {
               console.log(`I am moving the car`);
          }
     }

     // const hondacar = new Car2()
     // hondacar.startEngine()
}