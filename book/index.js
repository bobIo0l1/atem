$(function(){
  const startTime = 9;
  const hoursOpen = 12;
  $("#escape-room-select").change(function(){
    let hourData = Number($(this).children(":selected").attr("data-hours"));
    let numHours = 12/hourData;
    if(numHours == undefined || numHours == null){
      numHours = 0;
    }
    $("#table-times").empty();
    $(".escape-room-time").off();
    for(i = 0; i < numHours; i++){
      let hourDecimal = parseFloat(((i*hourData-1)+startTime)%12+1);
      hourDecimal = hourDecimal.toFixed(Math.max(2, (hourDecimal.toString().split('.')[1] || []).length));
      let minutes = ("0" + ((hourDecimal % 1)*60)).slice(-2);
      console.log("hourdecimal: "+hourDecimal+" minutes "+minutes)
      $("#table-times").append(`<div class="escape-room-time">`+hourDecimal.toString().slice(0,hourDecimal.toString().indexOf(".")).concat(":",minutes)+`</div>`);
      $(".escape-room-time").click(function(){
        $(".escape-room-time.active").removeClass("active");
        $(this).addClass("active");
      });
    }
  });
});
