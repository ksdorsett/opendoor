var onSubmit = function() {
    var username = $('#uname').val();
    var password = $('#psw').val();
    if ((username!="")&&(password!="")){
        alert("username is "+username+"\npassword is "+password);
        document.cookie = "username="+username+"; path=/";
        window.location.replace("forum.html");
    }
};
