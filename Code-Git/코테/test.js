    let input=require('fs').readFileSync('Code-Git/코테/test.txt').toString().trim().split('\n').map(e=>e.trim());    
    // let input=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e=>e.trim());   
    
    input.shift();

    const ar = input.map(e=>e.split(' ')).map(e=>e.map(Number));

    let q = [];
    let dup = [...Array(ar.length)].map(()=>Array(ar[0].length).fill(0));
    const d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let head = 0;

    for(let i = 0; i < ar.length; i++){
        for(let j = 0; j <ar[0].length; j++){
            if(ar[i][j]==1){
                q.push([i, j]);
            }

            if(ar[i][j]==0){
                dup[i][j] = -1;
            }
        }
    }

    while(q.length > head){
        let [curRow, curCol] = q[head++];

        for(let [nextRow, nextCol] of d){
            let nr = nextRow + curRow;
            let nc = nextCol + curCol;

            if(nr < 0 || nr >= ar.length || nc < 0 || nc >= ar[0].length || dup[nr][nc] !== -1){
                continue;
            }

            dup[nr][nc] = dup[curRow][curCol] + 1;
            q.push([nr, nc]);
        }
    }
    let ox = 0;
    let answer = 0;
    dup.map(e=>{
        if(e.includes(-1)){
            ox++;
        }
    })

    if(ox > 0){
        answer = -1;
    }
    else{
        dup.map(e=>{
            e.map(el=>{
                answer = Math.max(el, answer);
            })
        })
    }

    console.log(answer);