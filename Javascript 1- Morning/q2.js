/*2.Write a JavaScript program to change the capitalization (case) of all letters in a given string. */

function changeCase(s){
    if(typeof(s) != typeof("")) return "Invalid parameter! Paremeter should be a String";
    var i;
    var res = "";
    for(i=0; i<s.length; i++){
        if(s[i] == s[i].toUpperCase()) res += s[i].toLowerCase();
        else res += s[i].toUpperCase();
    }
    return res;
}