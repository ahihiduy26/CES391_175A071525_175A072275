$(document).ready(function(){
  var a = $('input')
  $("#bntt").click(function(){
    if( a == 0){
      alert("You have not entered")
    }else{
      alert("Your post has been sent")
    }
  })
})
