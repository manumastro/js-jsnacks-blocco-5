/*
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

/*******************jsnack1***********************/
const jsnack1 = document.getElementById('jsnack1').addEventListener('click', function(){
document.getElementById('button-jsnack1').innerHTML = '';

const arrayZucchine = 
[
  {
    varietà: 'verde',
    peso: 60,
    lunghezza: 25
  },
  {
    varietà: 'napoletana',
    peso: 50,
    lunghezza: 22
  },
  {
    varietà: 'tonda',
    peso: 70,
    lunghezza: 24
  },
  {
    varietà: 'trombetta',
    peso: 50,
    lunghezza: 22
  },
  {
    varietà: 'romanesco',
    peso: 55,
    lunghezza: 23
  },
  {
    varietà: 'verde',
    peso: 65,
    lunghezza: 27
  },
  {
    varietà: 'lunghe',
    peso: 75,
    lunghezza: 28
  },
  {
    varietà: 'romanesco',
    peso: 50,
    lunghezza: 29
  },
  {
    varietà: 'trombetta',
    peso: 80,
    lunghezza: 22
  },
  {
    varietà: 'napoletana',
    peso: 50,
    lunghezza: 21
  },
  {
    varietà: 'napoletana',
    peso: 55,
    lunghezza: 20
  },
  {
    varietà: 'verde',
    peso: 60,
    lunghezza: 26
  },
]

let sum = 0;

for(let zucchina of arrayZucchine){
  sum += zucchina.peso;
}
console.log(sum);
const output1 = document.getElementById('output-1').innerHTML = `
<h1>La somma del peso delle zucchine è: ${sum}gr</h1>
`
})


/*
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

/*******************jsnack2***********************/
const jsnack2 = document.getElementById('jsnack2').addEventListener('click', function(){
  const arrayZucchineMeno15 = [];
  const arrayZucchinePiu15 = [];
  document.getElementById('button-jsnack2').innerHTML = '';
  
  const arrayZucchine = 
  [
    {
      varietà: 'verde',
      peso: 60,
      lunghezza: 10
    },
    {
      varietà: 'napoletana',
      peso: 50,
      lunghezza: 15
    },
    {
      varietà: 'tonda',
      peso: 70,
      lunghezza: 24
    },
    {
      varietà: 'trombetta',
      peso: 50,
      lunghezza: 13
    },
    {
      varietà: 'romanesco',
      peso: 55,
      lunghezza: 23
    },
    {
      varietà: 'verde',
      peso: 65,
      lunghezza: 27
    },
    {
      varietà: 'lunghe',
      peso: 75,
      lunghezza: 11
    },
    {
      varietà: 'romanesco',
      peso: 50,
      lunghezza: 29
    },
    {
      varietà: 'trombetta',
      peso: 80,
      lunghezza: 17
    },
    {
      varietà: 'napoletana',
      peso: 50,
      lunghezza: 21
    },
    {
      varietà: 'napoletana',
      peso: 55,
      lunghezza: 11
    },
    {
      varietà: 'verde',
      peso: 60,
      lunghezza: 15
    },
  ]

for(let zucchina of arrayZucchine){
  /* if(zucchina.lunghezza < 15){
    arrayZucchineMeno15.push(zucchina);
  }else{
    arrayZucchinePiu15.push(zucchina);
  } */
  (zucchina.lunghezza < 15) ? arrayZucchineMeno15.push(zucchina): arrayZucchinePiu15.push(zucchina);
}


let pesoTotaleLunghe = 0, pesoTotaleCorte = 0;
for(let zucchina of arrayZucchinePiu15){
  pesoTotaleLunghe += zucchina.peso;
}
for(let zucchina of arrayZucchineMeno15){
  pesoTotaleCorte += zucchina.peso;
}

const output2 = document.getElementById('output-2').innerHTML = 
`
<h1>Il peso delle zucchine che misurano meno di 15 cm è ${pesoTotaleCorte}gr</h1>
<h1>Il peso delle zucchine che misurano più di 15 cm è ${pesoTotaleLunghe}gr</h1>
`
})




/* 
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/
const jsnack3 = document.getElementById('jsnack3').addEventListener('click', function(){

  document.getElementById('button-jsnack3').innerHTML = '';

  const word = prompt('inserisci una parola');
  const reverseWord = (str) => str.split('').reverse().join('');  
  console.log(reverseWord(word));
  const output3 = document.getElementById('output-3').innerHTML = `<h1>La stringa girata è ${reverseWord(word)}</h1>`;

})





/* 
Jsnack 4
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal1 */

document.getElementById('jsnack4').addEventListener('click', function(){

  document.getElementById('button-jsnack4').innerHTML = '';
  const biciArray = 
[
  {
    nome: 'ciclocross',
    kg: 34
  },
  {
    nome: 'Ebike',
    kg: 21
  },
  {
    nome: 'gravel',
    kg: 10
  },
  {
    nome: 'scatto fisso',
    kg: 9
  }
]

let peso = biciArray[0].kg;

let biciLeggera = {};

for(let bici of biciArray){
  const {kg} = bici;

  if(peso > kg){
    peso = kg;
    biciLeggera = bici;
  }
}


printBike(biciLeggera);

function printBike(biciLeggera){
  console.log(biciLeggera);
  const {nome, kg} = biciLeggera;
  const output4 = document.getElementById('output-3').innerHTML = 
  `
    <h1>La bici che pesa meno è: ${nome} e pesa ${kg}</h1>
  `
}
})