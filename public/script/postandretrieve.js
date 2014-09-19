var test = new Firebase('https://noxtest.firebaseio.com/test'); //sets which Firebase branch to post to

  var usersRef = test.child("users"); //sets the child branch it will be posting to, so test/users in this case

  var getUsers = function(){
    $('.message-container').empty()
    usersRef.on('value', function(user){
			var template = $('#message-template');
			var users = user.val();
			for(name in users){
				$("<div class='messages' id='" + users[name].name + users[name].cohort + "'>" +'<h1>'+users[name].name + '</h1>' + '<p>' + users[name].message + '</p>' + '<h2>' + users[name].cohort + '</h2></div>').appendTo('.message-container')
			}
		})
	}

  $(document).ready( function() {
    getUsers();
   $('#post').on('submit', function(e) {
    e.preventDefault();
    var postName = $('#name').val();
      usersRef.push({
          name: $('#name').val(),
          cohort: $("#cohort").val(),
          message: $("#message").val()
      })
    getUsers();
    });
  })
