$(document).ready(function($){


    // $('html,body').stop().animate({scrollTop: '0px'}, 100)

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // autoplay:false,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        on:{
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素 
            this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件
          }, 
          slideChangeTransitionEnd: function(){ 
            swiperAnimate(this); //每个slide切换结束时运行当前slide动画
         //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
          }
        },
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    
    
    
    // var y = $(window).scrollTop(); 
    // $(window).scrollTop(y+.2+"px");
    // var windowH, scrollTop, oSetTop
    // windowH = $(window).height()
    // $(window).scroll(function(){
        //     scrollTop = $(this).scrollTop()
    //     $('.fade-up').each(function () {
        //         oSetTop = $(this).offset().top
        //         if (windowH + scrollTop > oSetTop) {
    //             $(this).addClass("animated fadeInUp appear")
    //         }
    //     })
    //     // console.log(windowH, scrollTop, oSetTop)
    // })
    
    // // if (windowH + scrollTop > oSetTop) {
        // //     $(this).addClass("animated fadeInUp appear")
        // // }

    });
// $(document).ready(function($){   
//     //$('.fade-up, .fade-down, .bounce-in, .flip-in').addClass('no-display');
//     // $('.fade-up').one('inview', function() {
//     //     $(this).addClass('wow fadeInLeftBig appear');
//     // });

// });