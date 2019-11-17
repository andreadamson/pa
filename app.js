// Funktsioonid
// arvu paarisuse kontroll
// funktsiooni defineerimine

function paarisuseKontroll(arv){
  // arvutame jääk 2-ga jagamisel
  let jaak = arv % 2;
  // kui jaak on võrdne nulliga
  if( jaak === 0 ){
    // tegu on paaris avuga
    console.log(arv + ' on paaris');
  } else {
    // tegu on paaritu arvuga
    console.log(arv + ' on paaritu');
  }
}
// funktsiooni kasutamine
paarisuseKontroll(4);
paarisuseKontroll(9);
