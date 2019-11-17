// Funktsioonid
// Funktsioon, mis arvutab ristküliku pindala ja väljastab ekraanil

function ristkylikuPindala(pikkus, laius){
 // pindala arvutamine
  let pindala = pikkus * laius;
  // tagastame pindala põhiprogrammi
  return pindala;
}

// Funktsioon, mis väljastab tulemuse ekraanil
function valjasta(pikkus, laius){
  // väljastame väärtused
  console.log('Pikkus = ' + pikkus);
  console.log('Laius = ' + laius);
  // salvestame arvutatud pindala
  let pindala = ristkylikuPindala(pikkus, laius);
  // väljastame tulemus
  console.log('Pindala = ' + pindala);
}  

valjasta(15, 5);
valjasta(1, 5); 
