$(function(){
  $("#titlename").prepend(`<button id="menu-button">☰</button>`);
  $(window).resize(function(){
    if($(window).width() >= 800){
      $("nav").show();
      $("nav").css("top","0px");
    }else{
      $("nav").hide();
      $("nav").css("top",$("#titlename").outerHeight());
    }
  }).trigger("resize"); 
  $("#menu-button").click(function(){
    if($(window).width() <= 800){
      $("nav").first().toggle("slow");
    }
  });
});
