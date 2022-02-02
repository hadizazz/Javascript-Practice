var now = new Date()
var thisYear = now.getFullYear()
var people = [
    ["Bruce","Banner","Male",1975],
    ["Natasha", "Romanoff", "female"],
]
var people2 = [
    ["Tony", "Stark", "male", 1980], 
    ["Pepper", "Pots", "female", 2023] 
]
function arrayToObject(arr){
   arr.forEach(data=>{
    console.log("firstName :" , data[0])
    console.log("lastName :" , data[1])
    console.log("gender :" , data[2],)
    if (data[3] > thisYear) {
        console.log("age : Invalid Birth Year")
    }else if (!data[3]) {
        console.log("age : Invalid Birth Year \n")
    }else{
        console.log("age :" ,thisYear - data[3] ,"\n")
    }
   })
  
}
arrayToObject(people)
arrayToObject(people2)