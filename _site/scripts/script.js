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

  Cufon.replace('.nav a, h1 a, .headline, #content');  

  hiConfig = {
    sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
    interval: 0, // number = milliseconds for onMouseOver polling interval
    timeout: 400, // number = milliseconds delay before onMouseOut
    over: function() {
      $(".hidden_bar").slideDown("normal");
    }, // function = onMouseOver callback (REQUIRED)
    out: function() { 
      $(".hidden_bar").slideUp("normal");
    } // function = onMouseOut callback (REQUIRED)
  }
  $('#toolbar').hoverIntent(hiConfig);

  $(".hidden_bar").hide();
   
  $(".slideshow").jCarouselLite({
    btnNext: ".next",
    btnPrev: ".prev",
    visible: 1,
    speed: 700,
    mouseWheel: true
  });

  $('#content .slideshow li').live("mouseover", function() {
    var buttons = $("button")
    buttons.fadeIn();
    $(this).mouseout(function() { buttons.fadeOut('slow'); });
  })

});
