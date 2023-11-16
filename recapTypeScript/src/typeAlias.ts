//A type alias!
type Person ={
     name: string;
     age: number
}

//Use the type alias in the annotation
const sayHappyBirthday = (person: Person) =>{
     return `Hey ${person.name}, congrats on turning ${person.age}`
}

sayHappyBirthday({name: 'Jerry', age: 42})