$(document).ready(function(){
    
    /*Sticky navigation*/
    $(".js-section-features").waypoint(function(direction){

            if(direction=="down"){

              $("nav").addClass("sticky");
        
        } else{

            $("nav").removeClass("sticky");


        }                                
    }, {
  offset: '10%'
  });

    
    /*Scroll effects*/
    
    $(".js-scroll-to-plans").click(function(){
        
        $("html,body").animate({scrollTop:$(".js-section-plans").offset().top},1000)
        
        
    });
    
    
     $(".js-scroll-to-start").click(function(){
        
        $("html,body").animate({scrollTop:$(".js-section-features").offset().top},1000)
        
        
    });
    
//                 WRITTEN PART FADE IN
    $(".js-wp-1").waypoint(function(direction){
            $(".js-wp-1").addClass("animate__animated animate__fadeIn")


        },{
            offset:"50%"
    });
    
    
    
    $(".js-wp-2").waypoint(function(direction){
            $(".js-wp-2").addClass("animate__animated animate__fadeInUp")


        },{
            offset:"50%"
    });
    
    $(".js-wp-3").waypoint(function(direction){
            $(".js-wp-3").addClass("animate__animated animate__fadeIn")


        },{
            offset:"50%"
    });
    
    
    $(".js-wp-4").waypoint(function(direction){
            $(".js-wp-4").addClass("animate__animated animate__pulse")


        },{
            offset:"50%"
    });
    
    
//    Moblie Nav
    $(".js-nav-icon").click(function(){
        
        
        var nav = $(".js-main-nav");
        
        nav.slideToggle(200);
        
        if ( $("#nav-mobile").attr("name")=="menu"){
             $("#nav-mobile").attr("name","close");
            }
        else if( $("#nav-mobile").attr("name")=="close"){
            $("#nav-mobile").attr("name","menu");
            }
    });
    
});

