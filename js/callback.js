function square(n){
    return n*n;
}

function sumOfSquare(a,b){
    const val1=square(a);
    const val2=square(b);
    return val1 +val2;
}

console.log(sumOfSquare(1,2));
