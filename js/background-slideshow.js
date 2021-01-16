/* Background-image slideshow */
$(document).ready(function(){
   //Array of images which you want to show: Use path you want.
    var images=new Array('img/wallpaper-basketball-min.jpg','img/wallpaper-football-min.jpg','img/wallpaper-music-min.jpg','img/wallpaper-videogames-min.jpg');
    var nextimage=0;
    doSlideshow();

    function doSlideshow(){
        if(nextimage>=images.length){nextimage=0;}
        $('.personal')
        .css('background-image','url("' + images[nextimage++] + '")')
        .fadeIn(5000,function(){
            setTimeout(doSlideshow,5000);
        });
    } 
});

/* Add smooth scrolling on click to its respective sections */
$(document).ready(function() {
    
                'use strict';
                
                var $root = $('html, body');
                
                /* Auto scroll for the button section*/            
    
                $('.btn-tour').click(function(){
                    
                    'use strict';
                   
                    $root.animate({
                        scrollTop: $('.choices').offset().top
                    }, 1500);

                    return false;
                        
                });  
    
                /* Auto scroll for the choices section*/
    
                $('.choice-education').click(function(){
                    
                    'use strict';
                    
                     $root.animate({
                        scrollTop: $('.edu').offset().top
                    }, 600);

                    return false;
                });
    
                $('.choice-work').click(function(){
                    
                    'use strict';
                    
                     $root.animate({
                        scrollTop: $('.work').offset().top
                    }, 600);

                    return false;
                });  
    
                $('.choice-personal').click(function(){
                    
                    'use strict';
                    
                     $root.animate({
                        scrollTop: $('.personal').offset().top
                    }, 600);

                    return false;
                });  
    
                /* Auto scroll for the floating choices section*/
    
                $('.floating-choices .education-history').click(function(){
                    
                    'use strict';
                    
                     $root.animate({
                        scrollTop: $('.edu').offset().top
                    }, 600);

                    return false;
                });
    
                $('.floating-choices .work-experience').click(function(){
                    
                    'use strict';
                    
                     $root.animate({
                        scrollTop: $('.work').offset().top
                    }, 600);

                    return false;
                });  
    
                $('.floating-choices .personal-information').click(function(){
                    
                    'use strict';
                    
                     $root.animate({
                        scrollTop: $('.personal').offset().top
                    }, 600);

                    return false;
                });  
            });

/* Show Floating choices section after the choices section is passed */
$(document).ready(function(){
    
    $(window).on('scroll', function() { 
            if ($(window).scrollTop() >= $( '.choices').offset().top + $('.choices').outerHeight()) { 
                $('.floating-choices').css("display","block");
            }
            else{
                $('.floating-choices').css("display","none");
            }
    });
});

/* Show Video of myself when i click the watch intro button */
$(document).ready(function(){
   //refer to the iframe made for the webinar form Laserfiche Forms   
    var modal = $('.introduction .Modal');
    var modal_iframe = $('.introduction .Modal .iFrame');
    var span = $('.introduction .Modal .close');
    
    $('.btn-introVideo').click(function(){
        modal.css("display","block");
    });
    
    // When the user clicks on (x), close the modal
    span.click(function(){
       modal.css("display","none"); 
    });
    
    // When the user clikcs anywhere outside of the modal, close it.
    $(window).click(function(event){
        if (event.target == modal) {
            modal.css("display", "none");
        }
    });
    
    // When the user press the escape button, close it 
    $(document).keyup(function(e){
       if(e.keyCode === 27)
           span.click(); //esc
    });
});

/* urls to my respective social media platform links down below */
$(document).ready(function(){
    
    $('.instagram').click(function(){
        window.open('https://www.instagram.com/watchmepose4you/?hl=en');
    });
    
    $('.facebook').click(function(){
        window.open('https://www.facebook.com/jmaarri');
    });
    
    $('.linkedin').click(function(){
        window.open('https://www.linkedin.com/in/josephmaary');
    });
      
});