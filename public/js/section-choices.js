$(document).ready(function(){

    let $root = $('html, body');

     /* Auto scroll for the choices section*/

     /* Handle the appearance of the education section */
    
     $('.choice-education').click(function(){

        $('.personal').hide()

        $('.work').hide()
                    
        $('.edu').fadeIn(1000)

        $root.animate({
            scrollTop: $('.edu').offset().top
        }, 1000)

    });

    /* Handle the appearance of the work section */

    $('.choice-work').click(function(){
        
        $('.edu').hide()

        $('.personal').hide()

        $('.work').fadeIn(1000)

         $root.animate({
            scrollTop: $('.work').offset().top
        }, 1000)

    });  

    /* Handle the appearance of the personal section */

    $('.choice-personal').click( function(){

        $('.edu').hide()

        $('.work').hide()

        $('.personal').fadeIn(1000);

        var images=new Array('img/wallpaper-basketball-min.jpg','img/wallpaper-football-min.jpg','img/wallpaper-music-min.jpg','img/wallpaper-videogames-min.jpg');
        
        var nextimage=0;

         $root.animate({
            scrollTop: $('.personal').offset().top
        }, 1000)

        /*doSlideshow();

        function doSlideshow(){

            if(nextimage>=images.length){nextimage=0;}

            let timer = function(){
                setTimeout(doSlideshow, 5000)
            }
            $('.personal').css('background-image','url("' + images[nextimage++] + '")').fadeIn(5000, timer);
        } 
        */
    }); 
})