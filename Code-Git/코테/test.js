    let input=require('fs').readFileSync('Code-Git/코테/test.txt').toString().trim().split('\n');    
    // let input=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let price = Number(input.shift().split(' ')[1]);
    let answer = 0;
    input = input.map(Number);

    input.sort((a,b)=>b-a);

    for(let i = 0; i < input.length; i++){
        answer+= Math.trunc(price / input[i]);
        price %= input[i];
    }

    console.log(answer);