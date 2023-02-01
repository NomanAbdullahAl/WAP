$(document).ready(function() {
    $("#status").text("Move your mouse over the 'S' to begin.");
    
    // Set event listeners for the walls
    $(".boundary").mouseover(function() {
      $(this).addClass("youlose");
      $("#status").text("You lose! :(");
    });
    
    // Set event listener for the end area
    $("#end").mouseover(function() {
      $("#status").text("You win! :D");
    });
    var start = $("#start");

    $("#maze").mousemove(function(event) {
        // Update the position of the "S" element based on the mouse's position
        start.offset({
          left: event.pageX,
          top: event.pageY
        });
      });
  });
  