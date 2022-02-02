var p = "";
for(var a = 0; a <= 5; a++){
    if(a % 2 == 0){
        for(var i = 1; i <= 10; i++){
            if (i % 2 == 0) {
                p += '#';
            }else{
                p += " ";
            }
        }
    }else{
        for(var i = 1; i <= 10; i++){
            if (i % 2 == 0) {
                p += " ";
            }else{
                p += "#";
            }
        }
    }
    p +='\n';
}
console.log(p); 