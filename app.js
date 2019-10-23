// muutujad

// var

var nimi = 'Andre';
console.log(nimi);

nimi = 'katrin'
console.log(nimi)

// muutujate initsialiseerimine

var tervitus;
console.log(tervitus);
tervitus = 'Tere';
console.log(tervitus);

// liitnimetused muutujatele

var eesNimi = "Andre"; // camel style 
var ees_nimi = "Andre"; // PHP style
var EesNimi = "Andre"; //Pascal style
var eesnimi = "Andre";

// let

let pereNimi = "Adamson";
console.log(pereNimi);
pereNimi = "?"

// const
const minuEesNimi = "Andre";
console.log(minuEesNimi);
// minuEesnimi = "yeet";

//const näide

const inimene = [{ nimi : 'Andre', vanus : 20 }];
console.table(inimene);
inimene.vanus = 21;
console.table(inimene);

//naide 2

const arvud = [1,2,3,4,5];
console.log(arvud);
arvud.push(6);
console.log(arvud);