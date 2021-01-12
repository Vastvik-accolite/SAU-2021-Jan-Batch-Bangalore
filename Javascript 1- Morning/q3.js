/*3.Write a JavaScript program to check whether all the digits in a given number are the same or not.  */

function check(num){
    if(typeof(num) !== typeof(1)) return "Invalid parameter! Paremeter should be a number";

    var temp = num % 10;
    var val = true;

    while(num){
        console.log(num);
        
        if(num % 10 !== temp) {
            val = false;
            break;
        }
        num = Math.floor(num / 10);
        
    }
    //if(num !== temp) val = false;

    return val;
}