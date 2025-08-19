//filtriranje na dadena niza po daden parametar

let niza = [55,33,21,56,78,43,67,44];

let filteredNiza = niza.filter(broj => broj > 40);
console.log(filteredNiza);

// sortiranje na niza

let sorteredNiza = niza.sort((a, b) => a - b);
console.log(sorteredNiza);

// presmetuvanje na suma na site elementi vo niza

let sumOfNiza = niza.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfNiza);

// pronajdi element vo niza

let findElement = niza.find(broj => broj % 2 === 0);
console.log(findElement);

// Funkciite se prvи класи во JavaScript, i se mogu da se prenesat kako argumenti na drugi funkciji
// i da se vrakjaat kako rezultati od funkciji 