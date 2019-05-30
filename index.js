$(function(){
  $("#titlename").prepend(`<button id="menu-button">☰</button>`);
  $(window).resize(function(){
    if(!$("#menu-button").length && $(window).width() >= 800){
      $("nav").show();
    }
  }).trigger("resize"); 
  $("#menu-button").click(function(){
    if(!$("#menu-button").length && $(window).width() <= 800){
      $("nav").first().toggle();
    }
  });
});
