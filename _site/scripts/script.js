$(document).ready(function(){
  Cufon.replace('.nav a');
  Cufon.replace('h1 a');
  Cufon.replace('.headline');
  Cufon.replace('#content')
  
  $("#toolbar .hidden_bar").hide();

  hiConfig = {
    sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
    interval: 0, // number = milliseconds for onMouseOver polling interval
    timeout: 400, // number = milliseconds delay before onMouseOut
    over: function() {
      $("#toolbar .hidden_bar").slideDown();
      $("#toolbar .hidden_bar div").fadeIn('fast');
    }, // function = onMouseOver callback (REQUIRED)
    out: function() { 
      $("#toolbar .hidden_bar div").hide();
      $("#toolbar .hidden_bar").slideUp(); 
    } // function = onMouseOut callback (REQUIRED)
   }
   $('#toolbar').hoverIntent(hiConfig)
});