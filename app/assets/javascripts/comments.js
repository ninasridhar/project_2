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
      console.log(item);
      if ((item.multi_type === multitype)&(item.multi_id === itemId)){
        $('.comment').append("<div><tr><td><b>"+ item.user.name +"<span class = 'delete' data-id = '"+ item.id +"'> X </span></b></td></tr><br><tr><td>"+ item.text +"</td></tr><div>")
      }
    }) 
  }) 
}

ajaxComments.deleteComment = function(){
  event.preventDefault();
  $this  = $(this);
  var commentId = $this.data('id');
  console.log($this)
  $.ajax({
    url: '/comments/' + commentId,
    type: 'DELETE',
    dataType: 'json'
  }).success(function(data){
    $this.closest('div').remove();
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
    $('#comment').val("");
    ajaxComments.getComments();
  })
}

$(function(){
  $('#pencil').on('click', ajaxComments.postComment);
  $(document).on('click', '.delete', ajaxComments.deleteComment);
  ajaxComments.getComments();
})