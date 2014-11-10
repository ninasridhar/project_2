railsAjax = {};


railsAjax.getVotes = function(photoId){
  $.ajax({
    url: '/photos/' + photoId,
    type: 'GET',
    dataType: "json"
  }).success(function(data){
    $('.no_votes').html('')
  })
}

railsAjax.Vote = function(){
  // event.preventDefault();
  var photoId = parseInt(window.location.href.split('/').pop())
  var $this = $(this);
  railsAjax.getVotes();
  $.ajax({
    url: '/votes',
    method: 'POST',
    data: {vote: {photo_id: photoId, number_of_votes: $this.data("vote")}},
    dataType: 'json'
  }).success(function(data){
    console.log(data);
    railsAjax.getVotes(photoId);
  })
}

$(document).ready(function(){
  $('#up').on('click', railsAjax.Vote);
  $('#down').on('click', railsAjax.Vote);
})