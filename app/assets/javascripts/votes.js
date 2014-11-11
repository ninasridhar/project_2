railsAjax = {};


railsAjax.getVotes = function(photoId){
  $.ajax({
    url: '/photos/' + photoId,
    type: 'GET',
    dataType: "json"
  }).success(function(data){
    $('.no_votes').html('')
    $('.no_votes').append(data)
    // if data >= 0 {
    //   $('.no_votes').addClass('positive');
    // } else {
    //   $('.no_votes').addClass('negative');
    // }
  })
}

railsAjax.Vote = function(){
  // event.preventDefault();
  var photoId = parseInt(window.location.href.split('/').pop())
  var user  = parseInt($('#user').data("value"));
  var $this = $(this);
  railsAjax.getVotes();
  $.ajax({
    url: '/votes',
    method: 'POST',
    data: {vote: {photo_id: photoId, number_of_votes: $this.data("vote"), user_id: user}},
    dataType: 'json'
  }).success(function(data){
    console.log(data);
    $('.thumbs').html('');
    railsAjax.getVotes(photoId);
  })
}

$(document).ready(function(){
  $('#up').on('click', railsAjax.Vote);
  $('#down').on('click', railsAjax.Vote);
})