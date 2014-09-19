  var test = new Firebase('https://noxtest.firebaseio.com/test'); //sets which Firebase branch to post to

  $(document).ready( function() {
   $('#test-post').on('submit', function(e) {
    e.preventDefault();
      test.push({
          name: $('#name').val(),
          cohort: $("#cohort").val(),
          message: $("#message").val()
      })
    });
  })
