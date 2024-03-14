    let input=require('fs').readFileSync('Code-Git/코테/test.txt').toString().trim();    
    // let input=require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number); 
    
    const n = Number(input);

    const arr = Array(n+1).fill(true).fill(false, 0, 2);

    for(let i = 2; i * i <= n; i++){
        if(arr[i]){
            for(let j = i * i; j <= n; j+=i){
                arr[j] = false;
            }
        }
    }

    console.log(arr.filter((e, i) => e).length);
