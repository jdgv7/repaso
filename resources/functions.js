function send(){
    let name  = document.querySelector("#txtName").value;
    let lastname  = document.querySelector("#txtLastName").value;
    let emial  = document.querySelector("#txtEmail").value;
    let phone  = document.querySelector("#txtPhone").value;
    if(name != "" &&
    lastname != "" &&
    emial != "" &&
    phone != ""){
        alert("Sending....")
    }else{
        alert("Please fill information")
    }

}