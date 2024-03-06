    // let input=require('fs').readFileSync('코테/test.txt').toString();    
    let input=require('fs').readFileSync('/dev/stdin').toString();
    
    input = Number(input);

    let ar = [];

    for(let i = 1; i <= input; i++){
        ar.push(i);
    }

    while(ar.length!==1){
        ar.shift();
        let a = ar.shift();
        ar.push(a);
    }

    console.log(ar[0]);