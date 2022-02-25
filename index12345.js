$(document).ready(function(){
    $("button").click(function(){
      var div = $("div");  
      div.animate({left: '300px'}, "slow");
    });
    
});



$(document).ready(function(){

$("button").dblclick(function(){
    var div = $("div");
    div.animate({right:'300px'}, "slow");
});
});