function send(){
    var templateParams = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };

    emailjs.send("service_w5xrpnu", "template_ls69zlv", templateParams).then(
    (response) => {
            alert('SUCCESS!',response.status, response.text);
        },
        (error) => {
            alert('FAILED...', error);
        },
    );
}