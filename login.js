(function () {
    console.log('running...');
    var main = function() {
        $("button").on("click", function() {
        console.log("clicked");
        var username = $('#uname').val();
        var password = $('#psw').val();
        if ((username!="")&&(password!="")){
            alert("username is "+username+"\npassword is "+password);
        }
        });
    };
    
    $(document).ready(main());
})();
