//A function with an object type parameter
const printName = (name: {first: string; last: string}) =>{
     return `Name: ${name.first} ${name.last}`;
}

printName({first: 'will', last: 'Ferrell'})

