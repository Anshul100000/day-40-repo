function primeFactors(n)
{
    let c = 2;
    while(n > 1)
    {
        if(n % c == 0){
            console.log(c + " ");
            n /= c;
        }
        else c++;
    }
}
 
let n = 16;
primeFactors(n);