var onSubmit = function() {
    var newPost = $('#postBox').val();
    var username = getCookie("username");
    alert("username="+username);
    if (username != "") {
        alert("Posted by "+username);
        alert(newPost);
    //this is where we will have to connect to database and add message (newPost) before reloading page
    location.reload();
    }else{
        alert("Login Boroski!");
        window.open("Login.html","_self");
    }
};


//getCookie copied from W3Schools
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}