const nameValue = document.getElementById("name");
const emailValue = document.getElementById("email");
const issueTitleValue = document.getElementById("issuetitle");
const issueDescriptionValue = document.getElementById("subject");


$('#submit').submit(function() {
    alert('something');
   });


const printfunc = () =>{ 
    console.log("button pressed");
}

const getdata = () =>{
    let name = nameValue.value;
    let email = emailValue.value;
    let issueTitle = issueTitleValue.value;
    let issueDescription = issueDescriptionValue.value;
    console.log(issueDescription);
    console.log(issueTitle);
    console.log(email);
    console.log(name);
}
