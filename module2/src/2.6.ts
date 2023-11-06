{
     //constrants

     
     const addCourseToStudent = <T extends {id: number, name: string, email: string}>(student : T) =>{
          const course = 'Next level web devlopment'
          return {
               ...student,
               course
          }
     }

     const student1 = addCourseToStudent({id: 55, name: 'Mr X', email: 'd@gmail.com', devType: 'NLW'})
     const student2 = addCourseToStudent({id: 60, name: 'Mr Y', email: 'Y@gmail.com', devType: 'NLW', hasWatch: 'Apple watch'})


     
     //
}