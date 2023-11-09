{
     //access modifiers
     class BankAccount{
         readonly id: number;
          name: string;             
         protected _balance: number; //private 

          constructor(id: number, name: string, balance: number){
               this.id = id;
               this.name = name;
               this._balance = balance;
          }

          addDeposit(amount : number){
               this._balance = this._balance + amount
          }

          getBalance(){
               return this._balance;
          }
     }

     class StudentAccount extends BankAccount{
         test(){
           this.addDeposit
         } 
     }

     const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20)
     goribManusherAccount.addDeposit(300);
     const myBalance = goribManusherAccount.getBalance();
     console.log(myBalance);

     //
}