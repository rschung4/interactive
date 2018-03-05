$(document).ready(function(){

// PART 1

  $('#status').show();
    console.log("Regular Status");

//BUTTON LIGHT FUNCTION

  var status = 'OFF';
    console.log("outside of button: " + status);

  $("button").click(function() {

      console.log("button clicked!");
      if (status == 'OFF') {
          $("#stem, .petal").addClass("light");
          console.log("ON");
          $("#ground").addClass("groundlight");
          status = "ON";
        }

      else {
        $("#stem, .petal").removeClass("light");
        $("#ground").removeClass("groundlight");
        status = "OFF";
      }
    });

  $("button2").click(function() {
    if (status == 'OFF') {
      $("#stem, .petal, #ground").addClass("gradient");
      console.log("ON");
      status = "ON";
    }

    else {
      $("#stem, .petal, #ground").removeClass("gradient");
      console.log("OFF");
      status = "OFF";
    }
  })

});
