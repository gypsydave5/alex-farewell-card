$(document).ready( function() {
  $('#test-post').on('submit', function(e) {
    e.preventDefault();
    $('.message-container').prepend('<h1>'+$('#name').val()+'</h1><h2>'+$('#cohort').val()+'</h2><p>'+$('#message').val()+'</p><br>')
  }); 
});
