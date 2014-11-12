ajaxFollow = {}

// ajaxFollow.getFollow = function(){
//   $.ajax({
//     url: '/users/' + user1,
//     type: 'GET',
//     dataType: "json"
//   }).success(function(data){
//     console.log(data);
//     debugger;
//   })
// } 

ajaxFollow.Unfollow = function(){
  event.preventDefault();
  var subId = $('#subscription').data("value");
  console.log(subId);
  $.ajax({
      url: '/subscriptions/' + subId,
      type: 'DELETE',
      dataType: 'json'
    }).success(function(data){
      console.log(data);
      $('.stars').html('');
      $('.stars').append('<i class = "glyphicon glyphicon-star" id ="star"></i>')
    })
}

ajaxFollow.Follow = function(){
  var user1 = parseInt(window.location.href.split('/').pop());
  var user2 = parseInt($('#user').data("value"));
  event.preventDefault();
  $.ajax({
    url: '/subscriptions',
    method: 'POST',
    data: {subscription: {user1_id: user1, user2_id: user2}},
    dataType: 'json'
  }).success(function(data){
    $('.stars').html('');
    $('.stars').append('<i class = "glyphicon glyphicon-star" id =  "unfollow"></i>')
    console.log(data);
  })
}


$(document).ready(function(){
  $(document).on('click', "#star", ajaxFollow.Follow)
  $(document).on('click', "#unfollow", ajaxFollow.Unfollow);
})