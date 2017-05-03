var onSubmit = function() {
    var username = $('#uname').val();
    var password = $('#psw').val();
    var url = 'getPerson?';
    if ((username!="")&&(password!="")){
        url += ('&userName=' + username);
        url += ('&password=' + password);
        $.getJSON(url, function(result) {
            if (result.length) {
                var foundUser = result[0];
                alert(foundUser.userName);
                alert(foundUser.password);
                alert(foundUser.affil);
                alert("Access Granted");
                document.cookie = "username="+username+"; path=/";
                window.location.replace("forum.html");
            }else{
                alert("Please Register");
            }
        })
    }
};