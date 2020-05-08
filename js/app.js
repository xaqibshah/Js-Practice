document.querySelector('.img-btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s-signup');
  });
  


var emailEl = document.getElementById("email");
var psd = document.getElementById("psd");
var name = document.getElementById('name');
var confirmPsd = document.getElementById('cm-psd');
var dob = document.getElementById('dob')
var isValidEmail = false 

var UsersInfo = [];
function registration() {
    var userInfo = {
        email: emailEl.value,
        password: psd.value
    }
    if (userInfo.password.length < 8) {
        document.getElementById("msg").innerHTML = "Passwords must have at least 8 characters";
        // console.log("Enter Eight Digits Passwod");
    }

    //  else if (userInfo.password.length >= 8 && UsersInfo) {
    //     var userInputEmail = emailEl.value;
    //     for (var i = 0; i < UsersInfo.length; i++) {
    //         var userObj = UsersInfo[i];
    //         if (userObj.email === userInputEmail) {
    //             console.log("Email is already Exsist");
    //             document.getElementById("msg").innerHTML = "Email is already Exsist";                            
    //             break;
    //         }
    //     }
    // }
    else {
        UsersInfo.push(userInfo);
        console.log("HEllo")
    }
}





function login() {
    var userInputEmail = emailEl.value;
    var userInputPsd = psd.value;
    var message = "";

    for (var i = 0; i < UsersInfo.length; i++) {
        var userObj = UsersInfo[i];

        // console.log(userInputEmail === userObj.email && userInputPsd != userObj.password);

        if (userInputEmail === userObj.email && userInputPsd === userObj.password) {
            message = ("You are Sucessfully Login");
            console.log("You are Sucessfully Login");
            break;
        }
        else if (userInputEmail === userObj.email && userInputPsd !== userObj.password) {
            message = ("Your Password is not Correct");
            console.log("Your Password is not Correct");
            break;
        }

        else {
            message = ("User Don't Exist");
            console.log("User Don't Exist");

        }


    }

    document.getElementById("msg").innerHTML = message



}



console.log(UsersInfo);