var $D = $(document),
    $HB = $("html, body");

(function () {

    $D.ready(function() {

        youtubePlugIn();

        function youtubePlugIn() {

            var tag = document.createElement('script'),
                firstScriptTag = document.getElementsByTagName('script')[0];

            tag.src = "https://www.youtube.com/iframe_api";
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

            function onYouTubeIframeAPIReady() {}
        }

        function popBoxStart(popId){
            var $thisPopbox = $( popId ),
                $popYoutube = $thisPopbox.find(".js-youtube-block"),
                youtubeSource = $popYoutube.data("yt-source"),
                widthPlayer = 660,
                heightPlayer = 370,
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
                    autoplay: 0,        // Auto-play the video on load
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
        }

        setTimeout(function () {
            popBoxStart( "#block-youtube");
        }, 1000);

        $('#owl-reviews').owlCarousel({
            loop: true,
            margin: 30,
            items: 2,
            slideBy: 2,
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
                    items: 2
                }
            }
        });

        if(screen.width > 1199 || screen.width < 768){
            // Sliders
            $('#owl-certificates').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: true,
                navText: ['', '']
            });
        }


        $('.js-tab-link').on('click', function () {

            var $this = $(this),
                dataTab = $this.attr("data-tab"),
                tabWrap = $('.tab-wrap');

            $('.js-tab-link').removeClass("active");
            $this.addClass("active");
            tabWrap.find('.tab-item').hide();
            $("#"+dataTab).fadeIn().css("display", "flex");
        });

        // Popup
        $(".js-modal").click(function () {

            var modalPop = $(this).data("pop");

            $("#" + modalPop).fadeIn("fast");
        });

        $(".close").click(function () {
            $(".modal").fadeOut("fast");
        });

        $(".modal").click(function(e){
            if(e.target === this) {
                $(this).fadeOut("fast");
            }
        });

        //Scroll
        $('.js-scroll').on('click', function() {

            var target = $('[data-scroll-target="' + $(this).attr('data-scroll') + '"]');

            if(target.length) {
                $HB.stop().animate({ scrollTop: target.offset().top }, 1000);
            }
        });

        // Phone mask
        $(".tel").mask("+38 (099) 999-99-99");
    });
})();
