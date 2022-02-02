function sum(startNum,finishNum,step = 1){
    let total = 0;
    if (!finishNum) {
        return startNum
    }
    for(let i=startNum ; i<=finishNum; i+=step){
        total += i;
    }
    return total
}
console.log(sum(1))