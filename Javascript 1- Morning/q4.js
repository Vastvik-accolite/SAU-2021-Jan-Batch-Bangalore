/*Write a JavaScript program to compute the sum of all digits that occur in a given string. */


function sumOfDigits(s){
    if(typeof(s) !== typeof("")) return "Invalid parameter! Paremeter should be a String";

    var i;
    var res = 0;
    for(i=0; i<s.length;i++){
        if(s[i] >= '0' && s[i] <= '9') res += (s[i] - '0');
    }
    return res;
}