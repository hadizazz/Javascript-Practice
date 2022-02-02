var nama = "Diza";
var peran ="Werewolf";

if (nama =="" && peran =="") {
    console.log("Nama Harus Diisi!")
}
else if (nama == nama && peran == "" ){
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
}
else if (nama == nama && peran == "Penyihir"){
    console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!")
}
else if (nama == nama && peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, " + nama)
    console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.")
}
else if (nama == nama && peran == "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, " + nama)
    console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!" )
}
