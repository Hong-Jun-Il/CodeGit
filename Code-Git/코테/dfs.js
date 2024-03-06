function solution(park, routes) {
    let answer = [];
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[0].length; j++) {
            if (park[i][j] == 'S') {
                answer.push(i, j);
            }
        }
    }
    let [currentRow, currentCol] = answer;

    routes.map(e => {
        const direction = e.split(' ')[0];
        const n = e.split(' ')[1];

        let nextRow = currentRow;
        let nextCol = currentCol;
        for (let i = 0; i < n; i++) {
            switch (direction) {
                case 'N':
                    nextRow -= 1;
                    break;
                case 'S':
                    nextRow += 1;
                    break;
                case 'W':
                    nextCol -= 1;
                    break;
                case 'E':
                    nextCol += 1;
                    break;
            }
            console.log(`실행 ${direction}, ${i}`)

            if (nextRow < 0 || nextRow >= park.length || nextCol < 0 || nextCol >= park[0].length || park[nextRow][nextCol] == 'X') {
                nextRow = currentRow;
                nextCol = currentCol;
                return;
            }
        }
        currentRow = nextRow;
        currentCol = nextCol;

    })

    return [currentRow, currentCol];
}

console.log(solution(["SXX","OOO","OXO"],["E 2","S 2","E 1"]));