function shoppingTime(memberID,money){
    var stacattu = 1500000;
    var zoro = 500000;
    var hn= 250000;
    var uniklooh = 175000;
    var casing = 50000;

    var arr={}
    var uang = money;
    var shoppingCart = [];

    if (memberID === '' || (memberID === undefined) ){
       return"Mohon maaf, toko X hanya berlaku untuk member saja"
    }else if (money < 50000) {
        return"Mohon maaf, uang tidak cukup"
    }
    else {
        if (uang >= stacattu) {
            shoppingCart.push("Sepatu brand Stacattu")
            uang -= stacattu
        }else if (uang >= zoro ) {
            shoppingCart.push("Baju brand Zoro")
            uang -= zoro
        }else if (uang >= hn) {
            shoppingCart.push("Baju brand H&N")
            uang -= hn
        }else if (uang >= uniklooh) {
            shoppingCart.push("Sweater brand Uniklooh")
            uang -= uniklooh
        }else if (casing) {
            shoppingCart.push("Casing Handphone")
            uang -= casing
        }
    }
    arr.memberID = memberID;
    arr.money = money;
    arr.listPurchased = shoppingCart;
    arr.changeMoney = uang;
    return arr
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); 
console.log(shoppingTime('234JdhweRxa53', 15000)); 
console.log(shoppingTime());
