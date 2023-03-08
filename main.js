
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



class superObject{
  
  static isObject(subject){
    return typeof subject == "object"
 }

  static deepCopy(subject){
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
}

function SuperObject() {}
SuperObject.isObject(subject){
  return typeof subject == "object"
}
SuperObject.deepCopy = function (subject){
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

function LearningPath({
  name = requiredParam("name"),
  courses = []
}){
  this.name = name;
  this.courses = courses;

}


function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {})


 
  this.name = name;
  this.email = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socilaMedia = {
    twitter,
    instagram,
    facebook,
  }
  const private = {
    "_learningPaths": []
  }

  Object.defineProperty(this, "learningpaths", {
    get(){
      return private[_learningPaths]
    },
    set(newLp){ 
      if(newLp instanceof LearningPath){
        private["_learningPaths"].push(newLp)
      
      }else{
        console.warn("Alguno de los LPs ne es una instancia del prototipo LearningPath ")
      }
    }
  })

  
    for(learningPaths in learningPaths){
      this.learningPaths = learningPaths[learningPaths] 
  }
 


 



const escuelaWeb = new LearningPath({
  name: "Escuela de webdev", 
})

const escuelaData = new LearningPath({
  name: "Escuela de Data science", 
})
const juan = new Student({
  email: "juanito@frijolitos.com" ,
  name: "Juanito", 
  learningPaths:[
    escuelaWeb, 
    escuelaData, 
  ],  
})