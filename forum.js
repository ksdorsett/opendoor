var onSubmit = function() {
    var newPost = $('#postBox').val();
    var username = getCookie("username");
    var unixStamp = dateify(new Date());
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
};

//http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
var dateify = function(date){
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    //var date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    return date;//hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

var onLoad = function() {
    var url = 'getContent?';
    $.getJSON(url, function(result) {
	if (result.length) {
        for(var i=0;i<result.length;i++){
            var foundContent = result[i];
            var color = "purple"
            if(foundContent.affil=="Republican"){
                color="red"
            }
            if(foundContent.affil=="Democrat"){
                color="red"
            }
            $("#starterP").prepend("<p color="+color+">"+foundContent.username+":    "+foundContent.content+"</p><p align=right>"+foundContent.timeOfPost+"</p> <hr>" );
        }
    }
    })
};