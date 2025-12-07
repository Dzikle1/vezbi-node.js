

// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.

const studenti = require("./students.js");

const zad1 = studenti
  .filter(s => s.ime.endsWith("a"))
  .filter(s => s.grad === "Skopje")
  .filter(s => s.prosek > 7)
  .sort((a,b) => a.ime.localeCompare(b.ime));

console.log("Zad1:", zad1);

const zad2 = studenti
  .filter(s => s.prosek > 9)
  .filter(s => s.grad !== "Skopje")
  .sort((a,b) => b.prosek - a.prosek);

console.log("Zad2:", zad2);

const zad3 = studenti
  .filter(s => s.ime.length === 5)
  .sort((a,b) => b.prosek - a.prosek)
  .slice(0, 3);

console.log("Zad3:", zad3);
