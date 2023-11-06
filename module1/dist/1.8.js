"use strict";
//destructuring 
{
    const user = {
        id: 345,
        name: {
            firstName: 'ashrf',
            middleName: 'Abedin',
            lastName: 'Persian'
        },
        contractNo: '017000000',
        address: 'Uganda'
    };
    //we don't decleare type when we try to destructuring 
    const { contractNo, name: { middleName } } = user;
    //array destructuring 
    const myFriends = ['chandler', 'joy', 'ross', 'rachel'];
    // const [a, b, bestFriend] = myFriends
    //we can skip first value 
    const [, , bestFriend, ...rest] = myFriends;
}
