function isPrime(x){
    if(x<2)
    return "Is Not Prime";
    for(var i=2;i<x;i++)
    {if(x%i==0)
    return "Is Not Prime";
    }
    return "Is Prime";}
console.log(isPrime(10));
console.log(isPrime(1));
console.log(isPrime(0));
console.log(isPrime(2));
console.log(isPrime(3));