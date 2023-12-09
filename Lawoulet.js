//Deklarasyon de varyab nou yo
let nonbChwazi;
let chans = 5;
let nonbOdinate = Math.floor(Math.random() * (500 - 1 + 1) + 1);

console.log("Jwėt Lawoulėt, pa bliye ou gen 5 chans")

//Enstriksyon sa ap fè bouk lan pap kanpe toutotan ke itilizatè a gen chans toujou
while (chans > 0) {
    //Nonb k ap antre a, l ap an String, n ap konveti l an Number
    nonbChwazi = parseInt(prompt("Ki nonb ou chwazi itilizatè?"));

    //Kondisyon pou si l jwenn nonb lan
    if (nonbChwazi === nonbOdinate) {
        console.log("Ou jwenn nonb lan, Felisitasyon !");
        break; 
    //Kondisyon pou si nonb lan pi gran
    } else if (nonbChwazi > nonbOdinate){
        chans--;    //A chak fwa n dekremante nonb chans lan 
        console.log("Nonb sa : " +  nonbChwazi + " pi gran ke nonb ou dwe jwenn lan.");
        console.log("Ou rete " + chans + " chans");
    //Kondisyon pou si nonb lan pi piti
    } else {
        chans--;
        console.log("Nonb sa : " +  nonbChwazi + " pi piti ke nonb ou dwe jwenn lan.");
        console.log("Ou rete " + chans + " chans");
       
    }
}

// Afichaj bon nonb lan lè tout chans itilizatè a fini
if (chans === 0) {
    console.log("--> Ou pa rete chans anko. ");
    console.log("--> Bon nonb lan ete " + nonbOdinate)
}