
 $(document).ready(function($) {
     //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      });

      //wow 

      new WOW().init();
      //scrolltop
      $('body').materialScrollTop();
 
            

});