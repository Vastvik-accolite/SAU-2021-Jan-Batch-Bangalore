/*5.Create an HTML Form with different kind of controls.
  -Submit button should validate all the controls.
  -Input fields should be required.
  -Radio should be selected.
  -Dropdown should be selected.
  -Email should be validated.
  -If all Form controls are valid at the time of submission, then it should print the value of controls in Console window in the following way:

	{
		“FirstName” : “…….”,
		“LastName” :  “……”,
		….
    }
*/

function validate(event){
    event.preventDefault();

    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var gender = document.getElementById("data").elements["gender"]
    var age = document.getElementById('age');
    

    if(fname.value == "" || lname.value == "" || email.value == "" || gender.value == "" || age.value == ""){
        alert("All fields are required");
        return;
    }
    var regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{3}$/;

    if(regex.test(email.value)){
        var details = JSON.parse(JSON.stringify(`{First_Name: ${fname.value}, LastName: ${lname.value}, Gender: ${gender.value}, E-mail: ${email.value}, ageGroup: ${age.value}}`));
        console.log(details);
    }

    else{
        alert("Enter a valid Email address");
    }
}
    

