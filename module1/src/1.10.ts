{
     //union types
     // type frontendDevloper = 'fakibazDevelooper' | 'juniorDeveloper'
     // type fullstackDeveloper = 'frontendDeveloper' | 'juniorDeveloper'
     // type Developer = frontendDevloper | fullstackDeveloper

     // const newDevloper : frontendDevloper = 'juniorDeveloper' 

     type User ={
          name: string,
          email?: string,
          gender: "male" | "female",
          bloodGroup: "O+" | "A+" | "AB+",
     }

     const user1: User = {
          name: 'Ashraful',
          gender: 'male',
          bloodGroup: 'O+'
     }

     //intersection type
     type frontendDevloper = {
          skills: string[];
          designation1: 'Frontend Developer'
     }
     type BackendDeveloper = {
          skills: string[];
          designation2: 'Backend Developer'
     }

     type FullstackDevloper = frontendDevloper & BackendDeveloper

     const fullstackDevelopers : FullstackDevloper ={
          skills: ['HTML', 'CSS', 'EXPRESS'],
          designation1: 'Frontend Developer',
          designation2: 'Backend Developer'

     }

 console.log(fullstackDevelopers);




}