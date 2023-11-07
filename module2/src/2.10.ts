{
     //maped types 
     const arrOfNumbers : number[] = [1, 4, 5]

     // const arrOfString : string[] = ['1', '2', '3']

     const arrOfString: string[] = arrOfNumbers.map((number) => number.toString())

     
     type AreaNumber = {
          hight: number;
          width: number;
     }

     type Height = AreaNumber["hight"] //lookUp type

     //Loping variable
     type AreaString<T> ={
          [key in keyof T] : T[key];
     }

     const area1: AreaString<{height: string; width: number}> = {
          height: "100",
          width: 50
     }
     //
}