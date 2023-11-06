//Reference Type --> Object
const user: {
    readonly company : 'Ph hero';  //type --> literal types 
     firstName: string;            //readonly for only reading not to change
     middleName?: string; //optional type 
     lastName: string;
     isMarried: boolean;
} = {
     company: 'Ph hero',
     firstName: 'Ashrf',
     middleName: 'islam',
     lastName: 'hossain',
     isMarried: true,
}

// user.company = 'Ph'