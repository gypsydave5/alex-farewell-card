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

  // var test = new Firebase('https://noxtest.firebaseio.com/test'); //sets which Firebase branch to post to

  // $(document).ready( function() {
  //  $('#test-post').on('submit', function(e) {
  //   e.preventDefault();
  //     test.push({
  //         name: $('#name').val(),
  //         cohort: $("#cohort").val(),
  //         message: $("#message").val()
  //     })
  //   });
  // })
