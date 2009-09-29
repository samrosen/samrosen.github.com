function loadTweets() {
  $(".twitter_feed").getTwitter({
    userName: "rosenboy",
    numTweets: 1,
    loaderText: "Twittering Twitter...",
    slideIn: false,
    showHeading: false,
    showProfileLink: false
  });
  Cufon.replace('.twitter_feed span');
  Cufon.now();
}


$(document).ready(function(){

  loadTweets();

  Cufon.replace('.nav a');
  Cufon.replace('h1 a');
  Cufon.replace('.headline');
  Cufon.replace('#content')
  
  
  $("body.home #toolbar .hidden_bar").hide();

  hiConfig = {
    sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
    interval: 0, // number = milliseconds for onMouseOver polling interval
    timeout: 400, // number = milliseconds delay before onMouseOut
    over: function() {
      $("#toolbar .hidden_bar").slideDown();
      $("#toolbar .hidden_bar div").fadeIn('fast');
    }, // function = onMouseOver callback (REQUIRED)
    out: function() { 
      $("#toolbar .hidden_bar div").hide('fast');
      $("#toolbar .hidden_bar").slideUp(); 
    } // function = onMouseOut callback (REQUIRED)
   }
   $('#toolbar').hoverIntent(hiConfig);

});