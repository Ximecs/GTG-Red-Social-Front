
function mostrarPassword() {
    let cambio = document.getElementById("txtPassword");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash ').addClass('fa fa-eye');
        console.log("cambio a text");
    } else {
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash ');
        console.log("cambio a pass");
    }
} 

function mostrarPassword2() {
    let cambio = document.getElementById("txtPassword2");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon2').removeClass('fa fa-eye-slash ').addClass('fa fa-eye');
        console.log("cambio a text");
    } else {
        cambio.type = "password";
        $('.icon2').removeClass('fa fa-eye').addClass('fa fa-eye-slash ');
        console.log("cambio a pass");
    }
} 

function mostrarPassword3() {
    let cambio = document.getElementById("txtPassword3");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('.icon3').removeClass('fa fa-eye-slash ').addClass('fa fa-eye');
        console.log("cambio a text");
    } else {
        cambio.type = "password";
        $('.icon3').removeClass('fa fa-eye').addClass('fa fa-eye-slash ');
        console.log("cambio a pass");
    }
} 