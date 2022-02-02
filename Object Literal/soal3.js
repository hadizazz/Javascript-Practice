const naikAngkot = (arrPenumpang) => {
    const rute = ['A', 'B', 'C', 'D', 'E', 'F']

    return arrPenumpang.map((penumpang) => {
      return {
        penumpang: penumpang[0],
        naikDari: penumpang[1],
        tujuan: penumpang[2],
        bayar: (rute.indexOf(penumpang[2]) - rute.indexOf(penumpang[1])) * 2000,
      }
    })
  }
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));