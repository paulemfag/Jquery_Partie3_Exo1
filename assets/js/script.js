$(function(){
var count = 0;
  $("button").click(function(){
    count++;
    $('#counter').val("Nombre de clics : "+count);
  })
})
