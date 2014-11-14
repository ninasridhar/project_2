ajaxComments = {};

var itemId = parseInt(window.location.href.split('/').pop());
var multitype = window.location.href.split('/')[3];

ajaxComments.getComments = function(event){
  $.ajax({
    url: '/comments',
    type: 'GET',
    dataType: 'json'
  }).success(function(data){
    $('.comment').html('');
    $.each(data, function(index, item){
      if ((item.multi_type === multitype)&(item.multi_id === itemId)){
        $('.comment').append("<tr><td><b>"+ item.user_name +"</b></td></tr><tr><td>"+ item.comments +"</td></tr>")
      }
    }) 
  }) 
}


ajaxComments.postComment = function(event){
  event.preventDefault();
  var words = $('textarea#comment').val();
  $.ajax({
    url: '/comments',
    method: 'POST',
    data: {comment: {multi_id: itemId, multi_type: multitype, text: words}},
    dataType: 'json'
  }).success(function(data){
    console.log(data);
    $('#comment').val("");
    ajaxComments.getComments();
  })
}

$(function(){
  $('#pencil').on('click', ajaxComments.postComment);
  ajaxComments.getComments();
})