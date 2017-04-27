var onSubmit = function() {
    var newPost = $('#postBox').val();
    var username = getCookie("username");
    var unixStamp = Math.round(+new Date()/1000);
    alert("username="+username);
    if (username != "") {
        //submit http post request with json object username/content
        //call route putContent
        $.post("/putContent", { "username" : username,
								    "content" : newPost,
                                    "timeOfPost": unixStamp});
        alert("Posted by "+username);
        alert(newPost);
    //this is where we will have to connect to database and add message (newPost) before reloading page
    location.reload();
    }else{
        alert("Login Boroski!");
        window.location.replace("Login.html");
    }
};

var onLogout = function() {
    document.cookie = "username=; path=/";
    alert("logged out");
    window.location.replace("Login.html");
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