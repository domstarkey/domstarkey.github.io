$(document).ready(function(){
    /*scrolling nonsense */
    $('body').scrollspy({
      target: '#navbar-main',
      offset:$('#navbar-main').height()+2
    })

    $(window).on('load', function () {
      $('body').scrollspy('refresh')
    })

    $('#navbar-main [href=#]').click(function (e) {
      e.preventDefault()
    }) ;


    /* hero paralaxing */

    var paraEle = $('.dsParalax');

    var paralaxEffect = function() {

                var eleHeight = 480;
                var scroll = $(window).scrollTop();

                if (scroll > eleHeight) return false; //why bother?

                var imgHeight = paraEle.width() / (4/3);

                var multiplier = Math.pow(420/imgHeight,2.4); //adjust position for smaller screens!

                yPos = -90 + (120*multiplier) + (Math.pow(scroll,1.6)/30);
                var coords = '50% '+ yPos + 'px';
                paraEle.css({ backgroundPosition: coords });
    };


    /* fade in hero & text */

    var img = new Image();
    var bgImg = "assets/img/header_bg.jpg";
    img.src = bgImg;
    img.onload = function(){
            paraEle.css({background: "url("+bgImg+") no-repeat center top",     "-webkit-background-size": "100%",
            "-moz-background-size": "100%", "-o-background-size": "100%", "background-size": "100%", "-webkit-background-size": "cover", 
            "-moz-background-size": "cover",    "-o-background-size": "cover",   " background-size": "cover"});
            paraEle.animate({opacity:1},"slow", function(){

            });
            $('#headerwrap p').fadeIn('fast').animate({
                    'bottom': '30px'
                    }, {duration: 'slow', queue: false}, function() {
                    
            });
            paralaxEffect();
            $(window).scroll(paralaxEffect); 
            $(window).resize(paralaxEffect);
    };

});