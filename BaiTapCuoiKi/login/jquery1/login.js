$(document).ready(function(){
  var a = $(".name")
  $("button").click(function(){
    if(a == 0){
      alert("Bạn chưa nhập gì")
    }
    alert("Bạn đã đăng nhập thành công !")
  })
})
