// Tingimuslaused

// if tingimuslause

let pin = 1234;

if ( pin == 1234) {
    console.log("Parool õige!");
}

// else

else {
    console.log("Parool vale!")
}

// arvude võrdlemine

let arv = 10

if ( arv < 15) {
    console.log("arv on väiksem kui 15 ");
} else {
    console.log("arv on suurem kui 15");
}

//tingimuslause tingimuslause sees

let parool = 1234;
let kontoSeis = 100;

if ( parool == 1234) {
    console.log("Parool õige!");
        console.log("Sisenesid pangaautomaati! Pangakontol on " + kontoSeis + " eurot.");
        console.log("sisesta, mitu eurot soovid välja võtta:");

        let soovitudRaha = 30;

        if ( soovitudRaha <= kontoSeis) {
            kontoSeis = kontoSeis - soovitudRaha;
            console.log("Palun võtke raha")
        }else {
            console.log("kontol ei ole piisavalt raha!")
        }

        console.log("Teie kontol on järel: " + kontoSeis + " eurot.");
}else {
    console.log("Parool vale!")
}

// Mitmeosaline tingimus. loogilised tehted ja avaldised

// AND tehe &&

let kood1 = 1234
let kood2 = 0000

console.log("Sisesta 1. parool:")
 const pakutudKood1 = 1234
console.log("sisesta 2. parool:")
const pakutudKood2 = 0000

if (pakutudKood1 == kood1 && pakutudKood2 == kood2) {
    console.log("seif avaneb!");
} else {
    console.log("Paroolid ei ühti proovi uuesti!");
}

// OR tehe || (ainult 1 koodidest peab olema õige)

let kood3 = 1234;
let kood4 = 0000;

console.log("Sisesta 3. parool:")
 const pakutudKood3 = 1234
console.log("sisesta 4. parool:")
const pakutudKood4 = 0000

if (pakutudKood3 == kood3 || pakutudKood4 == kood4) {
    console.log("seif avaneb!");
} else {
    console.log("Paroolid ei ühti proovi uuesti!");
}

// NOT tehe ! (MUUDAB TÕESE TEHTE VASTUPIDISEKS)

// else if

let punktid = 88;

if (punktid > 90) {
    console.log("Hinne A");
} else if (punktid < 80) {
    console.log("Hinne ei ole A ega B");
} else {
    console.log("Hinne ei ole A");
}

// suvaline arv Mündivise

// Mündivise

console.log("Kas kull(1) või kiri(2)?")

let kasutajaValik = "1"
let random = (Math.floor(Math.random() * 2));

if ( random == 1) {
    console.log("Kull!");
} else {
    console.log("Kiri!")
}

if (kasutajaValik == random) {
    console.log("Arvasid õigesti!")
}else{
    console.log("Arvasid valesti!")
}

//WHILE-tsükkel

let i = 0;
while ( i < 5) {
    console.log("tere!");
    i++;
    console.log(i)
}
