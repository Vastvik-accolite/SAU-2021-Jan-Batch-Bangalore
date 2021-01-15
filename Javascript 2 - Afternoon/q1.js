class Check{
    constructor(){
        var inp = document.getElementById("input");
        this.input = inp.value;
        console.log("Input String: " + this.input);
    }

    checkStr = (inp) => {
        let isNumeric = false;
        for(let i=0; i<inp.length; i++){
            if(inp[i] >= '0' && inp[i] <= '9'){
                isNumeric = true;
                break;
            }
        }
        return isNumeric;
    }

    calculateLength = (inp) => {
        console.log("Length: " + inp.length);
        return "Length of the Input String: " + inp.length;
    }

    displayCases = (inp) => {
        let lower = inp.toLowerCase();
        let upper = inp.toUpperCase();
        console.log("Uppercase: " + upper);
        console.log("Lowercase: " + lower);
        return "UpperCase: " + upper + "<br>LowerCase: " + lower;
    }

    separateVowels = (inp) => {
        let vowels = "";
        let consonants = "";
        for(let i=0; i<inp.length; i++){
            if(inp[i] === 'A' || inp[i] === 'a' || inp[i] === 'E' || inp[i] === 'e' || inp[i] === 'I' || inp[i] === 'i' || inp[i] === 'O' || inp[i] === 'o' || inp[i] === 'U' || inp[i] === 'u')
            vowels += inp[i];

            else 
            consonants += inp[i];
        }
        console.log("Vowels: " + vowels);
        console.log("Consonants: " + consonants);
        return "Vowels: " + vowels + "<br>Consonants: " + consonants;
    }

    mainFunction = () => {
        var isNumeric = this.checkStr(this.input);
        if(isNumeric){
            console.log("Error: String contains numeric values!");
            document.getElementById('error').innerHTML = "Error: String contains numeric values!";
            return;
        }
        
        document.getElementById('length').innerHTML = this.calculateLength(this.input);
        document.getElementById('cases').innerHTML = this.displayCases(this.input);
        document.getElementById('vowels').innerHTML = this.separateVowels(this.input);
    }

}