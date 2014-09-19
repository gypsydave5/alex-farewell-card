var test = new Firebase('https://noxtest.firebaseio.com/' + DATABASE); //sets which Firebase branch to post to
var inline_template = $('#message-template').html();

  var usersRef = test.child("users"); //sets the child branch it will be posting to, so test/users in this case

  var getUsers = function(){
    $('.message-container').empty()
    usersRef.on('value', function(user){
			var count = 0;
			var users = user.val();
			for(name in users){
				var maker = users[name];
				var template = "<article class='this-message' id='" + name + "'><h1>{{name}}</h1><p>{{message}}</p><h2>{{cohort}}</h2></article>";
				$('.message-container').prepend(Mustache.render(template, maker));
			   $.modal.close();
      }
		})
	}


  $(document).ready( function() {
    getUsers();
   $('#test-post').on("submit", function(e) {
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

  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
    $('.message-container').addClass("sticky");
    $('#about').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
    $('.message-container').removeClass("sticky");
    $('#about').removeClass("sticky");
  }
});
