let input = require('fs').readFileSync('Code-Git/코테/test.txt').toString().split('\n');
// let input=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 

input.shift();

input = input[0].split(' ').map(Number);

const s = Array.from(new Set(input));
const hash = new Map();

s.sort((a,b)=>b - a);

s.map((e, i)=>{
    hash.set(e, s.length - i - 1);
})

input = input.map(e=>{
    return hash.get(e);
})

console.log(input.join(' '));