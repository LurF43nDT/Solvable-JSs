// OPPGAVE EN
// PUTT IN RIKTIG VARIABEL INNI HVA DISSE BESKRIVER

// variabler: 
// 23
// "per knut"
// "skog", "vann", "mark"
// navn: "Nina", alder: 42, 
// true
// `kaldt inne i ${array[1]}en`
export const string = "per knut"; 
export const number = 23;
export const array = ["skog", "vann", "mark"];
export const object = { navn: "Nina", alder: 42};
export const boolean = true;
export const litteralString =  `kaldt inne i ${array[1]}en`;


// OPPGAVE TO
// denne for loopen står feil endre den så han funker
//NB HUSK OG UNCOMMENT
export function myFunc(plussAbleNumber) {
    for (let i = 0; i < plussAbleNumber; i++) {
        plussAbleNumber++;
    }
    return plussAbleNumber;
}


// OPPGAVE TRE
// putt inn riktig info med bruk av nina objectet. og send ut infoen (se oppgave 2)
export function myFunc(plussAbleNumber) {
    let val = `${Nna} kan kode, og er ${42} år.`
    return val;
}

//OPPGAVE FIRE 
// ta og fjern den som ikke matcher med arrayet og reassign fulført array så den har riktig ting i seg
export function oppgave4(fullførtArray) {
    let fullførtArray = ["tomat", "stål", "leverpostei"]
    let arr1 = ["suppe", "tomat", "stål", "leverpostei"]


    return fullførtArray
}

//OPPGAVE FEM
// endre floating til 640 med matte (*, /, +, -). prøv og gjøre den så intrisang som mulig
export function oppgave5(floating) {
    const static1 = 4;
    const static2 = 20;
    const static3 = 10;
    let floating = (static1 * static2 * static3); 
    console.log(static1, static2, static3, floating);
    return floating
}

//OPPGAVE SEKS
// lag en if else statment som vil sjekke om bool er true eller false. om den er true return bool. om den e false gjør bool true
export function oppgave6() {
    let bool = true;
    if (!bool) {
        bool = true;
    }
    return bool;
}


//OPPGAVE syv 
// lag et div element som blir sendt inn. for og lage deres egen oppgave fulført
export function oppgave7() {
// div (med class "box-style")
// p
// text = godt jobbet :3 oppgave 1 løst
return div
}

//oppgave 8
//ta og vis dere fram med noe kode
function showoff() {
    let saveEl = document.getElementById("save-el")
    let countEL = document.getElementById("count-el")
    let count = 0



    function increment() {
    console.log("clicked")
    count += 1
    countEL.textContent = count
}

    function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0

}

save()
}
