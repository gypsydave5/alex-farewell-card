var test = new Firebase('https://noxtest.firebaseio.com/test'); //sets which Firebase branch to post to
var inline_template = $('#message-template').html();

  var usersRef = test.child("users"); //sets the child branch it will be posting to, so test/users in this case

  var getUsers = function(){
    $('.message-container').empty()
    usersRef.on('value', function(user){
			var users = user.val();
			for(name in users){
				var template = '<div class="messages" id="{{name}}_{{cohort}}"><h1>{{name}}</h1><p>{{message}}</p><h2>{{cohort}}</h2>'
				var maker = users[name];
				$('.message-container').prepend(Mustache.render(template, maker));
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
