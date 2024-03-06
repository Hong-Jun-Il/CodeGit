const r = [
    [1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1]
];

const bfs1 = (r) =>{
    let answer = 0;
    const nv = [];
    const d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for(let i = 0; i < r.length; i++){
        for(let j = 0; j < r[0].length; j++){
            if(r[i][j]==1){
                r[i][j] = 2
                answer++;
                nv.push([i, j]);
                while(nv.length!==0){
                    const cur = nv.shift();
                    const [row, col] = cur;
                    for(const[nr, nc] of d){
                        const nextRow = row + nr;
                        const nextCol = col + nc;

                        if(nextRow >= 0 && nextRow < r.length && nextCol >= 0 && nextCol < r[0].length && r[nextRow][nextCol] == 1){
                            nv.push([nextRow, nextCol]);
                            r[nextRow][nextCol] = 2;
                        }
                    }
                }
            }
        }
    }
    return answer;
}

console.log(bfs1(r));

// 위에건 인접한 모든 1이 몇개가 있냐

const ar = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
  ];

const bfs2 = (ar, r, c) =>{
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const nv = [];
    nv.push([r, c]);
    while(nv.length!==0){
        const cur = nv.shift();
        const [row, col] = cur;
        for(const [nr, nc] of directions){
            const nextRow = nr + row;
            const nextCol = nc + col;
            if(nextRow >= 0 && nextRow < ar.length && nextCol >= 0 && nextCol < ar[0].length && ar[nextRow][nextCol] == 1  && (nextRow !== r || nextCol !== c)){
                ar[nextRow][nextCol] += ar[row][col];
                nv.push([nextRow, nextCol]);
            }
        }
    }
    return ar;
}

console.log(bfs2(ar, 0, 0));

// 이건 최단거리