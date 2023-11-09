{
     //getter and setter
     class BankAccount{
          readonly id: number;
           name: string;             
          protected _balance: number; //private 
 
           constructor(id: number, name: string, balance: number){
                this.id = id;
                this.name = name;
                this._balance = balance;
           }
 
          //  addDeposit(amount : number){
          //       this._balance = this._balance + amount
          //  }

          //setter
          set deposite(amount: number){
               this._balance = this._balance + amount
          }



           //getter
           get balance(){
               return this._balance
           }
          //  getBalance(){
          //       return this._balance;
          //  }
      }

      const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50)
     //  goribManusherAccount.addDeposit(300);   //function call korte hocci
     //  const myBalance = goribManusherAccount.getBalance();
     //  console.log(myBalance);
     const addDepositeB = goribManusherAccount.deposite = 100
     // console.log(addDepositeB);
     const myBalance = goribManusherAccount.balance; //its like property
     // console.log(myBalance);
}