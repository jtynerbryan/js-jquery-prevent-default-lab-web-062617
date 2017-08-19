$(document).ready(function(){
  
  submitForm();

});

// function submitForm() {
// 	$('form').on('submit', function(e) {
//		e.preventDefault();
// 		let listItem = $('#item').val()
//   	$('ol').append(`<li>${listItem}</li>`)
//  })
// }


function submitForm(){
  $('form').on('submit', function(event){
    var listItem = $('#item').val();
    $('ol').append( '<li>' + listItem + '</li>' );
    event.preventDefault();
  });
}
