function sum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i;
    }
    return sum;
}

let ans = sum(2)
console.log(ans);