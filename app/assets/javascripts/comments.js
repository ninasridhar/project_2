// ajaxComments = {};

// var itemId = parseInt(window.location.href.split('/').pop());
// var user  = $('#username').val();
// var multitype = window.location.href.split('/')[3];

// ajaxComments.getComments = function(event){
//   $.ajax({
//     url: '/comments',
//     type: 'GET',
//     dataType: 'json'
//   }).success(function(data){
//     $('.comment').html('');
//     $.each(data, function(index, item){
//       if ((item.multi_type === multitype)&(item.multi_id === itemId)){
//         $('.comment').append("<tr><td><b>"+ item.username +"</b></td></tr><tr><td>"+ item.text +"</td></tr>")
//       } 
//     }) 
//   })
// }

// ajaxComments.postComment = function(event){
//   event.preventDefault();
//   var user  = $('#username').val();
//   var words = $('textarea#comment').val();
//   console.log(user)
//   $.ajax({
//     url: '/comments',
//     method: 'POST',
//     data: {comment: {username: user, multi_id: itemId, multi_type: multitype, text: words}},
//     dataType: 'json'
//   }).success(function(data){
//     console.log(data);
//     ajaxComments.getComments();
//   })
// }

// $(document).ready(function(){
//   $('#pencil').on('click', ajaxComments.postComment)
//   ajaxComments.getComments();
// })
 
