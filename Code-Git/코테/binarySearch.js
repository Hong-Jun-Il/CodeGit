const a = [51,548,21,644,8451,2166];

a.sort((a,b)=> a - b);

const target = a[5];

let start = 0;
let end = a.length - 1;
console.log(a);

while(start<=end){
    const mid = Math.trunc((start + end) / 2);
    
    if(a[mid] == target){
        console.log(a[mid]);
        break;
    }

    else{
        if(target<a[mid]){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
}