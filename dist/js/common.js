var $W = $(window),
    $D = $(document),
    $B = $("body"),
    $HB = $("html, body");

(function () {

    $D.ready(function() {

        // Sliders
        $('#owl-certificates').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: true,
            navText: ['', '']
        });

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


        $('.js-tab-link').on('click', function () {

            var $this = $(this),
                dataTab = $this.attr("data-tab"),
                tabWrap = $('.tab-wrap');

            $('.js-tab-link').removeClass("active");
            $this.addClass("active");
            tabWrap.find('.tab-item').hide();
            $("#"+dataTab).fadeIn().css("display", "flex");
        });

        youtubePlugIn();

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

            function stopPlay() {
                if ( youtubePlayer ) {
                    youtubePlayer.destroy();
                    youtubePlayer = "";
                }
            }
        }

        setTimeout(function () {
            popBoxStart( "#block-youtube");
        }, 1000);

        // Popup
        $(".js-modal").click(function () {

            var $this =  $(this),
                modalPop = $this.data("pop");

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

            var $this = $(this),
                target = $('[data-scroll-target="' + $this.attr('data-scroll') + '"]');

            if(target.length) {
                $('html,body').stop().animate({ scrollTop: target.offset().top }, 1000);
            }
        });

        // Phone mask
        $(".tel").mask("+38 (099) 999-99-99");

    });

})();

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
(function(){

    var app = {

        initialize : function () {
            this.setUpListeners();
        },

        setUpListeners : function () {
            $('form').on('submit', app.submitForm);
            $('form').on('keydown', 'input', app.removeError);
        },

        submitForm : function (e) {
            e.preventDefault();

            var form = $(this),
                submitBtn = form.find('button');

            if ( app.validateForm(form) === false ) return false;

            submitBtn.attr('disabled', 'disabled');

            var str = form.serialize();

            $.ajax ({
                url: 'contact_form/contact_process.php',
                type: 'POST',
                data: str
            })
                .done(function(msg){
                    if(msg === "OK"){
                        setTimeout(function(){
                            $(".modal").fadeOut("fast");
                        }, 150);
                        setTimeout(function(){
                            $("#pop-success").fadeIn("fast");
                        }, 500);
                        setTimeout(function(){
                            $("#pop-success").fadeOut();
                            $(".form__input").val("");
                        }, 3000);

                    } else {
                        form.html(msg);
                    }
                })
                .always(function(){
                    submitBtn.removeAttr('disabled');
                });
        },

        validateForm : function (form) {
            var inputs = form.find('input'),
                valid = true;

            $.each(inputs, function(index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input;

                if (val.length === 0) {
                    formGroup.addClass('has-error').removeClass('has-success');
                    valid = false;
                }else {
                    formGroup.addClass('has-success').removeClass('has-error');
                }
            });

            return valid;
        },

        removeError : function () {
            $(this).removeClass('has-error')
        }
    };

    app.initialize();

}());
