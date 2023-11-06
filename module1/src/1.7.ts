{
     //spread operator 
     //rest oparator
     //destructuring 

     //learn spread operatoe
    const bros2: string[] = ['Tanmoy', 'Nahid', 'Rahat']
    const bros1: string[] = ['ali', 'khan', 'hossin']

//     bros2.push(bros1)   //its not possible to push array in another arry string emlement
  bros1.push(...bros2)


  const mentors1 = {
     typescript: 'Mezba',
     redux: 'Mir',
     dbms: 'Mizan'
  } 

  const mentors2 = {
     prisma: 'firoz',
     next: 'tanmoy',
     cloud: 'Nahid'
  }

  const mentorList = {
     ...mentors1,
     ...mentors2
  }

  const greetFriends = (...friends: string[]) =>{
      friends.forEach((friend: string) => console.log(`HI ${friend}`));
  }




}