function range(startNum,finishNum){
    const number = []
    if(startNum > finishNum){
        for(let i = startNum; i>= finishNum; i--){
            number.push(i)
        }
        return number
    }
    for(let i = startNum; i<=finishNum; i++){
        number.push(i)
    }
    return number
}
console.log(range(2,1))