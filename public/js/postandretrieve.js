var test = new Firebase('https://noxtest.firebaseio.com/' + DATABASE); //sets which Firebase branch to post to
// var inline_template = $('#message-template').html();

var usersRef = test.child("users"); //sets the child branch it will be posting to, so test/users in this case

var getUsers = function(){
  $('.message-container').empty()
  usersRef.on('value', function(user){
		var count = 0;
		var users = user.val();
		for(name in users){
			var maker = users[name];
			var template = "<article class='message-full modal' id='" + name + "'><h2>{{name}}</h2><p class='message-content'>{{message}}</p><span class='cohort'>{{cohort}}</span><br></article><a href='#" + name + "' rel='modal:open'><article class='message-preview' id='" + name + "'><h2>{{name}}</h2><span class='cohort'>{{cohort}}</span><br></article></a>";
			$('.message-container').prepend(Mustache.render(template, maker));
    }
	})
}

$(document).ready( function() {
  getUsers();
 $('#message-input').on("submit", function(e) {
  e.preventDefault();
  var postName = $('#name').val();
    usersRef.push({
        name: $('#name').val(),
        cohort: $("#cohort").val(),
        message: $("#message-content").val()
    })
    $.modal.close();
    $('#name').val('');
    $("#message-content").val('');
    $("#cohort").val('');
  getUsers();
  });
})
