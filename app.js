//TSÜKLID

//FOR tsükkel
//Üldtsükkel

let lause;

for (let arv = 1; arv <= 10; arv++){
lause = "arv = ";
 if(arv < 10) {
     lause = lause + " ";
 }
 lause = lause + arv;
 if( arv % 2 == 0) {
     lause = lause + " - paaris";
 } else {
    lause = lause + " - paaritu";
    continue;
}

 console.log(lause)
}
