
function isObject(subject){
   return typeof subject == "object"
}

function isArray(subject){
  return Array.isArray(subject)
}

function deepCopy(subject){
  let copySubject
  const subjectIsObject = isObject(subject)
  const subjectIsArray = isArray(subject)

  if(subjectIsArray){
    copySubject = []
  }else if(subjectIsObject){
    copySubject = {}
  }else{
    return subject
  }

  for (key in subject){
    const keyIsObject = isObject(subject[key])
    if (keyIsObject){
      copySubject[key] = deepCopy(subject[key])
    }else{
      if(subjectIsArray){
        copySubject.push(subject[key])
      }else{
        copySubject[key] = subject[key]
      }
    }
  }

  return copySubject
}


function requiredParam(param){
  throw new Error(param + "es obligatorio")
}

function createLearningPath({
  name = requiredParam("name"),
  courses = []
}){
  const private = {
    "_name": name,
    "_courses": courses,
  }
   
  const public = {
    get courses(){
      return private["_courses"]
    },
  }

  return public
}


function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  leraningPaths = [],
} = {})
{

  const private = {
    "_name": name,
    "_learningPaths": learningPaths,
  }
  
  
  const public = { 
    email,
    age,
    approvedCourslearningPaths    socialMedia:{
      twitter,
      instagram,
      facebook,
    },
    get name(){
      return private["_name"]
    },
    set name(newName){
      if(newName.length != 0){
        return private["_name"] = newName
      }else{
        console.warn("Tu nombre deve tener al menos 1 caracter")
      }
    },
   
    get learningPaths(){
      return private["_learningPaths"]
    },
    set learningPaths(newLP){
      if(!newLP.name){
        console.warn("Tu LP no tiene la propiedad name")
        return
      }
      if(!newLP.courses)){
        console.warn("Tu LP no es una lista (*de cursos)")
        return
      }
      if(!isArray(newLP.courses)){
        console.warn("Tu LP no tiene courses")
        return
      }
      private["_learningPaths"] = newLP
      }
    },
  }

  return public
}

const juan = createStudent({
  name: "Juanito", 
  age: 18,
  email: "juanito@frijolitos.com" ,
  twitter: "fjuandc",

})