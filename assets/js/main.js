$(document).ready(function(){
   

  $('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });   

 // other options
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


});

function openNav(){
  document.getElementById("myNav").style.width = "100%";
};

function closeNav(){
  document.getElementById("myNav").style.width = "0%";
};