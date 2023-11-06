{
     //function with generics
     const createArry = (parm : string) : string[] =>{
          return [parm]
     }

     // const res1 = createArry('Bangladesh')

     const createArryWithGeneric = <T, Q>(param: T, param2: Q): T[] => {
          return[param]
     }


     // type User = {id: number; name: string};
     // const resGeneric = createArryWithGeneric<string>('Bangladesh')
     // const resGenericObj = createArryWithGeneric<User>({id: 222, name: 'Mr. pashan'})



// tuple
     const createArryWithTuple = <T,Q>(param: T, param2: Q): [T, Q] => {
          return[param, param2]
     }

     const res1 = createArryWithTuple<string, number>("Bangladesh", 222)
     // const res11 = createArryWithGeneric<string>("Bandladesh")

     type User = {id: number; name: string};
     // const resGeneric = createArryWithGeneric<string>('Bangladesh')
     // const resGenericObj = createArryWithGeneric<User>({id: 222, name: 'Mr. pashan'})

     const addCourseToStudent = <T>(student : T) =>{
          const course = 'Next level web devlopment'
          return {
               ...student,
               course
          }
     }

     const student1 = addCourseToStudent({name: 'Mr X', email: 'd@gmail.com', devType: 'NLW'})
     const student2 = addCourseToStudent({name: 'Mr Y', email: 'Y@gmail.com', devType: 'NLW', hasWatch: 'Apple watch'})





     //
}