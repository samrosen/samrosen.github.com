// Used as a callback from jquery.twitter.js to know when tweets have been loaded so we can cufon them
var tweetsLoaded = function() {
  Cufon.replace('.twitter_feed span');
  Cufon.now();
}

function loadTweets() {
  $(".twitter_feed").getTwitter({
    userName: "rosenboy",
    numTweets: 1,
    loaderText: "Twittering Twitter...",
    slideIn: false,
    showHeading: false,
    showProfileLink: false
  });
  tweetsLoaded(); // this call accounts for cufon'ing the loaderText
}

$(document).ready(function(){
  loadTweets();

  Cufon.replace('.nav a, h1 a, .headline, #content');  

  // The cool hidden tab nav bar thingamabob

  $('#toolbar').hoverIntent({
    sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
    interval: 0, // number = milliseconds for onMouseOver polling interval
    timeout: 400, // number = milliseconds delay before onMouseOut
    over: function() {
      $(".hidden_bar").slideDown("normal");
    }, // function = onMouseOver callback (REQUIRED)
    out: function() { 
      $(".hidden_bar").slideUp("normal");
    } // function = onMouseOut callback (REQUIRED)
  });

  $(".hidden_bar.hide_now").hide();

  // Picture pages, picture pages, lots of fun with ...

  $(".slideshow").jCarouselLite({
    btnNext: "button.next",
    btnPrev: "button.prev",
    visible: 1,
    speed: 700,
    auto: 3500
  });

  $('#content .slideshow').hover(
    function() { $("button").fadeIn(); },
    function() { $("button").fadeOut(); }
  );
});
