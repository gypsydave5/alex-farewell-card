var test = new Firebase('https://noxtest.firebaseio.com/test'); //sets which Firebase branch to post to

  var usersRef = test.child("users"); //sets the child branch it will be posting to, so test/users in this case
  var getUsers = function(){
    $('.message-container').empty()
    usersRef.on('value', function(user){
			var template = $('#message-template');
			var users = user.val();
			for(name in users){
				$(Mustache.render(template, user[name])).appendTo('.message-container');
			}
		})
	}

  $(document).ready( function() {
    getUsers();
   $('#test-post').on('submit', function(e) {
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