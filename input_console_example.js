// ========== Biodata ==========
// Ini adalah biodata ku
// Nama: Muhamamd Rivaldy
// Umur: 24th
// Tempat, Tgl Lahir: Cirebon, 16 May 1997
// Hobi: Ngoding
// Tempat Kerja: Flip
// =============================

const prompt = require('prompt-sync')(); 
console.log('What is your name?');
const name = prompt('> ');
console.log('How old are you?');
const age = prompt('> ');
console.log('Where is your date of birth?');
const birth = prompt('> ');
console.log('What is your hobby?');
const hobby = prompt('> ');
console.log('Where do you work?');
const work = prompt('> ');
console.log(`========== Biodata ==========
ini adalah biodataku
Nama: ${name}
Umur: ${age}
Tempat, Tgl Lahir: ${birth}
Hobi: ${hobby}
Tempat Kerja: ${work}
=============================
`);