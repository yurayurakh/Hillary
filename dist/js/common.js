var $W = $(window),
    $D = $(document),
    $B = $("body"),
    $HB = $("html, body");

(function () {

    $D.ready(function() {

        // Sliders
        $('#owl-release').owlCarousel({
            margin: 0,
            items: 1,
            nav: true,
            navText: ['', '']
        });

        $('#owl-events').owlCarousel({
            margin: 0,
            items: 3,
            nav: true,
            navText: ['', ''],
            responsive: {

                0:{
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        $('#owl-mass-media').owlCarousel({
            loop: true,
            margin: 39,
            items: 3,
            nav: true,
            navText: ['', ''],
            responsive: {

                0:{
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });


        $('.js-tab-link').on('click', function () {

            var $this = $(this),
                dataTab = $this.attr("data-tab"),
                tabWrap = $('.tab-wrap');

            $('.js-tab-link').removeClass("active");
            $this.addClass("active");
            tabWrap.find('.tab-item').hide();
            $("#"+dataTab).fadeIn().css("display", "flex");
        });

        // Youtube video
        if ( $(".js-modal-youtube").length ) youtubePlugIn();

        function youtubePlugIn() {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

            function onYouTubeIframeAPIReady() {
                //console.log("onYouTubeIframeAPI Ready");
            }
        }

        function popBoxStart(popId){
            var $thisPopbox = $( popId ),
                $popYoutube = $thisPopbox.find(".js-modal-youtube"),
                youtubeSource = $popYoutube.data("yt-source"),
                widthPlayer = 640,
                heightPlayer = 360,
                youtubePlayer;

            if(screen.width < 768){
                widthPlayer = 320;
                heightPlayer = 180;
            }

            youtubePlayer = new YT.Player( $popYoutube[0], {
                videoId: youtubeSource, // YouTube Video ID
                width: widthPlayer,               // Player width (in px)
                height: heightPlayer,              // Player height (in px)
                playerVars: {
                    autoplay: 1,        // Auto-play the video on load
                    controls: 1,        // Show pause/play buttons in player
                    showinfo: 0,        // Hide the video title
                    modestbranding: 0,  // Hide the Youtube Logo
                    playlist: youtubeSource,
                    loop: 0,            // Run the video in a loop
                    rel: 0,
                    fs: 1,              // Show the full screen button
                    cc_load_policy: 0,  // Hide closed captions
                    iv_load_policy: 3,  // Hide the Video Annotations
                    autohide: 1         // Hide video controls when playing
                }
            });

            function stopPlay() {
                if ( youtubePlayer ) {
                    youtubePlayer.destroy();
                    youtubePlayer = "";
                }
            }

            $(".close").click(function () {
                stopPlay();
            });

            $(".modal").click(function(e){
                stopPlay();
            });
        }

        // Popup
        $(".js-modal").click(function () {

            var $this =  $(this),
                modalPop = $this.data("pop");

            popBoxStart( "#" + modalPop );
            $("#" + modalPop).css("display","block");
        });

        $(".close").click(function () {
            $(".modal").css("display","none");
        });

        $(".modal").click(function(e){
            if(e.target === this) {
                $(this).css("display","none");
            }
        });

        //Scroll
        $('.js-scroll').on('click', function() {

            var $this = $(this),
                target = $('[data-scroll-target="' + $this.attr('data-scroll') + '"]');

            if(target.length) {
                $('html,body').stop().animate({ scrollTop: target.offset().top }, 1000);
            }
        });

    });

})();
