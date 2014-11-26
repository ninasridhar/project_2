ajaxFollow = {}

ajaxFollow.getFollow = function(){
  var user1 = parseInt(window.location.href.split('/').pop());
  var user2 = parseInt($('#user').data("value"));
  $.ajax({
    url: '/subscriptions',
    type: 'GET',
    dataType: "json"
  }).success(function(data){
    $('.stars').html('');
      $('.stars').append('<i class = "glyphicon glyphicon-star" id = "star"></i>');
    $.each(data, function(item){
      if ((data[item].user1_id === user1)&&(data[item].user2_id === user2)){
        $('.stars').html('');
        $('.stars').append('<i class = "glyphicon glyphicon-star" id =  "unfollow" data-id = "'+ data[item].id +'"></i>')
      } else{
        $('.stars').html('');
        $('.stars').append('<i class = "glyphicon glyphicon-star" id = "star" data-id = "'+ data[item].id +'"></i>');
      
      }
    });
  });
} 

ajaxFollow.Unfollow = function(){
  event.preventDefault();
  var subId = $(this).data("id");
  console.log(this);
  $.ajax({
      url: '/subscriptions/' + subId,
      type: 'DELETE',
      dataType: 'json'
    }).success(function(data){
      $('.stars').html('');
      $('.stars').append('<i class = "glyphicon glyphicon-star" id ="star"></i>');
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
    $('.stars').append('<i class = "glyphicon glyphicon-star" id =  "unfollow" data-id = "'+ data.id +'"></i>');
  })
}


$(document).ready(function(){
  $(document).on('click', "#star", ajaxFollow.Follow)
  $(document).on('click', "#unfollow", ajaxFollow.Unfollow);
  ajaxFollow.getFollow();
})