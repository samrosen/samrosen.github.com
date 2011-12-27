// Used as a callback from jquery.twitter.js to know when tweets have been loaded so we can cufon them
var tweetsLoaded = function() {
  Cufon.replace('.twitter_feed li');
  Cufon.now();
}

function loadTweets() {
  if ($(".twitter_feed").length > 0) {
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
}

function setupContentArea(){
  $("#content").css({
    'position':'absolute',
    'top':'0px',
    'height':'100%',
    'width':'100%',
    'margin':'0px'
  })
}

function loadMap(){
  setupContentArea();
  var latlng = new google.maps.LatLng(15,100);
  var myOptions = {
    zoom: 6,
    center: latlng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

$(document).ready(function(){

  loadTweets();

  Cufon.replace('.nav a, h1 a, .headline, #content, #iphone a');  

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

  $("#iphone a").live("click", function(){ $(".hidden_bar").slideUp("normal"); })
  // Picture pages, picture pages, lots of fun with ...

  $(".slideshow").jCarouselLite({
    btnNext: "button.next",
    btnPrev: "button.prev",
    visible: 1,
    speed: 700,
    auto: 5000
  });

  $('#content .slideshow').hover(
    function() { $("button").fadeIn(); },
    function() { $("button").fadeOut(); }
  );
  
  if ($("#map_canvas").length > 0) {
    loadMap();
  }
});
