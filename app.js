// Funktsioonid
// arvu paarisuse kontroll
// funktsiooni defineerimine

function paarisuseKontroll(arv){
  // tulemuslause defineerimine
  let lause;
  // arvutame jääk 2-ga jagamisel
  let jaak = arv % 2;
  // kui jaak on võrdne nulliga
  if( jaak === 0 ){
    // tegu on paaris arvuga
    lause =  arv + ' on paaris';
  } else {
    // tegu on paaritu arvuga
    lause =  arv + ' on paaritu';
  }
  // tagastame antud väärtuse
  return lause;
}
// funktsiooni kasutamine
let paarsus;
paarsus = paarisuseKontroll(4);
console.log(paarsus);
