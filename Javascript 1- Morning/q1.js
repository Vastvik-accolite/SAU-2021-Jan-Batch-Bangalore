/*1.Write a JavaScript program to find all distinct prime factors of a given integer.*/

function findPrimeFactors(x){
    if(typeof(x) !== typeof(1)) return "Invalid parameter! Paremeter should be a number";
    console.log("Primes factors of x are: ");
    var i;
    for(i=2; i<=x/2; ++i){
        var isPrime = true;
        for(var j=2; j<=Math.sqrt(i); ++j){
            if(i % j == 0){
                isPrime = false;
                break;
            }
        }
        if(x % i == 0 && isPrime) console.log(i);
    }
}
