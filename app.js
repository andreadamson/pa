// Funktsioonid
// Funktsioon, mis arvutab ristküliku pindala ja väljastab ekraanil

function ristkylikuPindala(pikkus, laius){
  // väljastame väärtused
  console.log('Pikkus = ' + pikkus);
  console.log('Laius = ' + laius);
  // arvutame pindala
  let pindala = pikkus * laius;
  // väljastame pindala
  console.log('Pindala = ' + pindala);
}

ristkylikuPindala(15, 5);
