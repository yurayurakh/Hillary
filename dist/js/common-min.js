var $W=$(window),$D=$(document),$B=$("body"),$HB=$("html, body");$D.ready(function(){$("#owl-release").owlCarousel({margin:0,items:1,nav:!0,navText:["",""]}),$("#owl-events").owlCarousel({margin:0,items:3,nav:!0,navText:["",""],responsive:{0:{items:1},768:{items:2},992:{items:3}}}),$("#owl-reviews").owlCarousel({loop:!0,margin:30,items:2,slideBy:2,nav:!0,navText:["",""],responsive:{0:{items:1},768:{items:2},992:{items:2}}}),$(".js-tab-link").on("click",function(){var e=$(this),t=e.attr("data-tab"),o=$(".tab-wrap");$(".js-tab-link").removeClass("active"),e.addClass("active"),o.find(".tab-item").hide(),$("#"+t).fadeIn().css("display","flex")}),function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),window.onYouTubeIframeAPIReady=function(){console.log("onYouTubeIframeAPI Ready")}}(),setTimeout(function(){var e,t,o,a;e=$("#block-youtube").find(".js-youtube-block"),t=e.data("yt-source"),o=660,a=370,screen.width<768&&(o=320,a=180),new YT.Player(e[0],{videoId:t,width:o,height:a,playerVars:{autoplay:0,controls:1,showinfo:0,modestbranding:0,playlist:t,loop:0,rel:0,fs:1,cc_load_policy:0,iv_load_policy:3,autohide:1}})},1e3),$(".close").click(function(){$(".modal").css("display","none")}),$(".modal").click(function(e){e.target===this&&$(this).css("display","none")}),$(".js-scroll").on("click",function(){var e=$(this),t=$('[data-scroll-target="'+e.attr("data-scroll")+'"]');t.length&&$("html,body").stop().animate({scrollTop:t.offset().top},1e3)})});