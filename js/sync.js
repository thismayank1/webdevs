function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans += i;
    }
    return ans;
}

console.log(findSum(10))