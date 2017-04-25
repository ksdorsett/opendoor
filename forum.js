var onSubmit = function() {
    var newPost = $('#postBox').val();
    alert("Posted");
    alert(newPost);
    //this is where we will have to connect to database and add message (newPost) before reloading page
    location.reload();
};