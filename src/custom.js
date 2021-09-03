var mainslider;
var sliding = false;

$(document).ready(function(){
    var options = {
        slides: '.slide', // Nama slide di slidecontainer
        swipe: false,     // handler swipe, wajib include touchSwipe
        transition: "slide", // Transisi slide=> slide dan fade
        slideTracker: true, // menambah pelacakan slide
        slideTrackerID: 'slideposition', // Nama pelacakan slide  
        slideOnInterval: false, // Interval slide
        interval: 9000, // Interval slide, jika slideOnInterval is enabled/true
        animateDuration: 1000, // Durasi animasi
        animationEasing: 'ease', // Nilai yang diterima: linear ease in out in-out snap easeOutCubic
                                 // easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo
                                 // easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart
                                 // easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine
                                 // easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: false, // pasu jika user mengarahkan kursor ke slide container
        magneticSwipe: true, // efek menempel pada slide ketika swipping/dragging
        neverEnding: true // aktifkan untuk membuat efek yang tidak pernah berhenti/neverending.
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");
    /* yes, that's all! */

    $(".slider").on("beforeSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + prevSlide + "'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").hide();
        sliding = true;
    });

    $(".slider").on("afterSliding", function(event){
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").fadeIn();
        sliding = false;
    });

    $(".gallery").flipping_gallery({
        direction: "forward", // This is will set the flipping direction when the gallery is clicked. Options available are "forward", or "backward". The default value is forward.
        selector: "<a", // This will let you change the default selector which by default, will look for <a> tag and generate the gallery from it. This option accepts normal CSS selectors.
        spacing: 15, // You can set the spacing between each photo in the gallery here. The number represents the pixels between each photos. The default value is 10.
        showMaximum: 15, // This will let you limit the number of photos that will be in the viewport. In case you have a gazillion photos, this is perfect to hide all those photos and limit only a few in the viewport.
        enableScroll: true, // Set this to false if you don't want the plugin to override your scrolling behavior. The default value is true.
        flipDirection: "bottom", // You can now set which direction the picture will flip to. Available options are "left", "right", "top", and "bottom". The default value is bottom.
        autoplay: false // You can set the gallery to autoplay by defining the interval here. This option accepts value in milliseconds. The default value is false.
      });
    
    /**
     * Control the slider by scrolling
     */
    $(window).bind('mousewheel', function(event) {
        if(!sliding){
            if(event.originalEvent.deltaY > 0) {
                mainslider.nextSlide();
            }
            else{
                mainslider.prevSlide();
            }
        }
    });
    $(".Tema .Theme").select2();
    $(".slide#satu").backstretch("designweb/images/Image1.jpg");
    $(".slide#dua").backstretch("designweb/images/Image2.jpg");
    $(".slide#tiga").backstretch("designweb/images/Image3.jpg");
    $(".slide#empat").backstretch("designweb/images/Image4.jpg");
    $(".slide#lima").backstretch("designweb/images/Image5.jpg");
    $(".slide#enam").backstretch("designweb/images/Image6.jpg");
    $(".slide#tujuh").backstretch("designweb/images/Image7.jpg");
    

    $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function(){
        $(this).css('margin-top', -$(this).height()/2);
    });

    
      
});