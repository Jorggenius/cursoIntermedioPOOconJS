// const obj1 = {
//     a: "a",
//     b: "b",
//     c: {
//       d: "d",
//       e: "e",  
//     },
//     editA(){
//         this.a = "AAAAAA";
//     }
// }

// const stringifiedComplexObj = JSON.stringify(obj1)
// const obj2 = JSON.parse(stringifiedComplexObj)

// function recursiva(){
//   if(/*validacion */){
//     //llamados recurcibos
//   }else{
//     //llamados normales, sin recursividad
//   }
// }

const numeritos =[0,2,3,4,5,5,6,7,8,9,10,11,12,13]

// let numerito = 0

// for(let index = 0; index < numeritos.length; i++){
//   numerito = numeritos[index]
//   console.log({index, numerito})
// }

function recursiva(numbersArray){
  if(numbersArray.length != 0){
    const firstNum = numbersArray[0]
    console.log(firstNum)
    numbersArray.shift()
    recursiva(numbersArray)
  }
}