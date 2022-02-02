function range(startNum,finishNum,step){
    const number= []

    if(startNum > finishNum){
        for(let i=startNum; i >= finishNum ; i-=step){
            number.push(i)
        }
        return number
    }
    for(let i=startNum; i <= finishNum; i+=step){
        number.push(i)
    }
    return number
}
console.log(range(5,2,1))