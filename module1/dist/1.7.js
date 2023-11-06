"use strict";
{
    //spread operator 
    //rest oparator
    //destructuring 
    //learn spread operatoe
    const bros2 = ['Tanmoy', 'Nahid', 'Rahat'];
    const bros1 = ['ali', 'khan', 'hossin'];
    //     bros2.push(bros1)   //its not possible to push array in another arry string emlement
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'firoz',
        next: 'tanmoy',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`HI ${friend}`));
    };
}
