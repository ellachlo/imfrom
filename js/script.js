$(document).ready(function(){
    var ww = $(window).width();
    layout();

    AOS.init({
        disable: window.innerWidth <800
    }); 
    
    function layout(){
        if(ww >= 921){


            $('.main-menu li').mouseenter(function(){
                let tab = $(this).attr('data-tab');
            
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
                $(`#${tab}`).addClass('active');
                $(`#${tab}`).siblings().removeClass('active');
            });



        }else if(ww < 921){

            $('.sub-menu-con').addClass('active');
            $(this).removeClass('active');
            $('footer .info').click(function(){
                $('footer .info-detail').toggleClass('active');
                $('footer .delivery-detail').removeClass('active');
            });

            $('footer .delivery').click(function(){
                $('footer .delivery-detail').toggleClass('active');
                $('footer .info-detail').removeClass('active');
            });


        }
    }

    
        if(ww>=800){

            $('.sec-2 .sec-2-con').mouseenter(function(){
                $(this).find('.sec-2-inner').addClass('active');
                $(this).find('.sec-2-inner').siblings().removeClass('active');
                $(this).find('img').addClass('active');
                $(this).find('img').siblings().removeClass('active');

            });
        
            $('.sec-2 .sec-2-con').mouseleave(function(){
                $(this).find('.sec-2-inner').removeClass('active');
                $(this).find('img').removeClass('active');
            });
        }else{

        }

        if(ww>=651){
            $('.sec-6-con').mouseenter(function(){
                $(this).find('.img-over').addClass('active');
                $(this).find('.img-over').siblings().removeClass('active');
            });
            $('.sec-6-con').mouseleave(function(){
                $(this).find('.img-over').removeClass('active');
            });

            var swiper3 = new Swiper('.promotion-swiper',{
                direction : 'horizontal',
                slidesPerView : 'auto',
                speed : 2000,
                loop : true,
                autoplay : {
                    delay : 2000,
                    disableOnInteraction : false,
                }
            });
        }else if(ww<651){
            $('.sec-6 .m-star').addClass('active');
        }



        var swiper1 = new Swiper('.prom-swiper',{
            direction : 'vertical',
            loop : true,
            speed : 1500,
            autoplay : {
                delay : 1500,
                disableOnInteraction : false,
            }
        });

    var swiper2 = new Swiper('.banner-swiper',{
        effect : 'fade',
        spaceBetween : 0,
        speed : 2000,
        loop : true,
        autoplay : {
            delay : 1500,
            disableOnInteraction : false,
        }
    });

    if(ww>=501){
        var swiper4 = new Swiper('.sec-4-swiper',{
            slidesPerView : 1,
            spaceBetween : 0,
            speed : 2000,
            loop : true,
            autoplay : {
                delay : 300,
                disableOnInteraction : false,
            },    
            breakpoints : {
                650 : {
                    slidesPerView : 2,
                    spaceBetween : 5,
                },
    
                800 : {
                    slidesPerView : 3,
                    spaceBetween : 10,
                },
            },
        
        });
    }else{

    }



    
    

    $('.menu-btn').click(function(){
        $('.menu-btn span:nth-child(1)').toggleClass('down');
        $('.sub-menu-box').toggleClass('active');
        $('.header').toggleClass('on');
        $('.menu-btn span').toggleClass('on');
        $('.logo').toggleClass('on');
        $('.menu-icon svg').toggleClass('on');
    });



    $('.sec-1-con-box .con-box').mouseenter(function(){
        $(this).find('.img-box').addClass('active');
        $(this).siblings().find('.img-box').removeClass('active');
    });

    $('.sec-1-con-box .con-box').mouseleave(function(){
        $(this).find('.img-box').removeClass('active');
    });

    $('.sec-1-menu li').click(function(){
        const alt = $(this).attr('data-alt');

        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(`#${alt}`).addClass('active');
        $(`#${alt}`).siblings().removeClass('active');
    });








    $(window).scroll(function(){
        let sct = $(window).scrollTop();

        if(sct >= 800){
            $('.header').addClass('active');
            $('.menu-btn span').addClass('active');
            $('.logo').addClass('active');
            $('.menu-icon svg').addClass('active');
            $('.top-btn').fadeIn();
            $('.sub-menu-box').addClass('on');
        }else if(sct<800){
            $('.header').removeClass('active');
            $('.menu-btn span').removeClass('active');
            $('.logo').removeClass('active');
            $('.menu-icon svg').removeClass('active');
            $('.top-btn').fadeOut();
            $('.sub-menu-box').removeClass('on');
        }

    });

    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });


    $(window).resize(function(){
        ww = $(window).width();
        layout();
        //지역 스코프 안에서 함수 호출
    });
    

});