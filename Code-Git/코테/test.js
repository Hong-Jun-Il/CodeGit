    let input=require('fs').readFileSync('Code-Git/코테/test.txt').toString().trim().split('\n').map(e=>e.trim());    
    // let input=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
    let ar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let n = 2;
    let s = 59;

    console.log("일 월 화 수 목 금 토");
    
    s %= 7; 

    console.log('  ' + ' '.repeat(s*3)+'d');
