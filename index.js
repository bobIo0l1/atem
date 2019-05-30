$(function(){
  $(window).resize(function(){
    if(!$("#menu-button").length && $(window).width() <= 800){
       $("#titlename").prepend(`<button id="menu-button">☰</button>`);
    } else if($("#menu-button").length){
      $("#menu-button").remove();
    }
  });
});
