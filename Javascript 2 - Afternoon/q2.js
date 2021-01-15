var student = {};

validate = (event) => {
    event.preventDefault()
    let fname = document.getElementById("details").elements["fname"].value;
    let lname = document.getElementById("details").elements["lname"].value;
    let gender = document.getElementById("details").elements["gender"].value;
    let age = document.getElementById("details").elements["age"].value;
    let roll = document.getElementById("details").elements["roll"].value;
    let dob = document.getElementById("details").elements["dob"].value;

    age = parseInt(age);
    roll = parseInt(roll);

    if(fname.value == "" || lname.value == "" || gender.value == "" || age.value == "" || roll.value == "" || dob.value == ""){
        alert("All fields are required");
        return;
    }

    

    console.log(age);
    if(typeof(age) !== typeof(1) || isNaN(age)){
        console.log("alert");
        alert("age should be an integer");
        return;
    }

    if(typeof(roll) !== typeof(1) || isNaN(roll)){
        alert("Roll No. should be an integer");
        return;
    }

    document.getElementById("occupation").style.display = "block";
    document.getElementById("sub2").style.display = "block";
    student.fname = fname;
    student.lname = lname;
    student.gender =  gender;
    student.age = age;
    student.roll =  roll;
    student.dob =  dob;

    console.log(student);
    
    
}

const addOccupation = () => {

    let occupation = document.getElementById('occupation');
    if(occupation.value === ""){
        alert("occupation should not be empty");
        return;
    }
    student.occupation = occupation.value;
    console.log("occupation added " + student.occupation);

    document.getElementById("get").style.display = "block";
    document.getElementById("getDetails").style.display = "block";

    
};

const getStudentDetails = () => {

    
    let query_roll = parseInt(document.getElementById("get").value);
    console.log(query_roll);
    var print = document.getElementById('printDetails');

    if(query_roll !== student.roll){
        console.log("No such student exists!!!");
        print.innerHTML = "No such student exists!!!";
        return;
    }
    
    console.log("student exists");

    print.innerHTML = "<p>First Name: " + student.fname + "</p> <br>" +
    "<p>Last Name: " + student.lname + "</p> <br>" +
    "<p>Gender: " + student.gender + "</p> <br>" +
    "<p>Age: " + student.age + "</p> <br>" +
    "<p>Roll No: " + student.roll + "</p> <br>" +
    "<p>DOB: " + student.dob + "</p> <br>" +
    "<p>Occupation: " + student.occupation;

}



 


