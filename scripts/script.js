$(document).ready(function(){
  $("#hidden_bar").hide();
  hiConfig = {
    sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
    interval: 0, // number = milliseconds for onMouseOver polling interval
    timeout: 400, // number = milliseconds delay before onMouseOut
    over: function() {
      $("#hidden_bar").slideDown();
    }, // function = onMouseOver callback (REQUIRED)
    out: function() { $("#hidden_bar").slideUp();  } // function = onMouseOut callback (REQUIRED)
   }
   $('#toolbar').hoverIntent(hiConfig)
});