/*
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

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