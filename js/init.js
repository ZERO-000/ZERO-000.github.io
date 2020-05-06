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
    
    
    wow = new WOW(
        {
          animateClass: 'animated',
          offset:       100,
          callback:     function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
          }
        }
      );
      wow.init();



    $("#scrollTop").hide()
    $(function(){             
        $(window).scroll(function(){                 
            if($(this).scrollTop()>20){
                $("#scrollTop").fadeIn();    
            } else {      
                $("#scrollTop").fadeOut();  
            }          
        })
    })

    $("#scrollTop").click(function(){            
         $("html,body").animate({scrollTop:0},500);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改             
         return false;         
    });


});

$(document).ready(function($){
    var ua = navigator.userAgent;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
    isAndroid = ua.match(/(Android)\s+([\d.]+)/)
    isMobile = isIphone || isAndroid
    if (isMobile) {
      $('.swiper-slide img').addClass('v-h')
      $('.category-item img').addClass('ct-i')
      $('category-item title').addClass('ct-t')
      $('category-item description').addClass('ct-d')
      var img = $('.swiper-slide img')
      for (let i = 1; i < img.length-1; i++) {
        img[i].setAttribute("src", "images/slider-"+i+".jpg")
      }
      img[0].setAttribute("src", "images/slider-3.jpg")
      img[4].setAttribute("src", "images/slider-1.jpg")
      $('.swiper-slide img').removeClass('v-h')
    }
})


// $(document).ready(function($){
//   var ua = navigator.userAgent;
//   var ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
//   isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
//   isAndroid = ua.match(/(Android)\s+([\d.]+)/)
//   isMobile = isIphone || isAndroid
//   if (isMobile) {
//     var picHref = [];
//     $(".swiper-slide .rel .bgimg").each(function(){
//       picHref.push($(this).find("img").attr("src"));//存放图片原地址
//     });
//     //alert(picHref[0]);
//     $(".swiper-slide .rel .bgimg").click(function(){
//         //alert($(this).find("img").attr("src"));
//         var src_2 = $(this).find("img").attr("src_2");//获取点击后新的图片地址
//         $(this).find("img").attr("src",src_2);//添加当前新地址图片
//         //给同级元素替换回原来的图片地址
//         $(this).siblings().each(function(){
//             var index = $(this).index();
//             //alert(index);
//             $(this).find("img").attr("src",picHref[index]);
//         });    
//         return false;
//     });
//  }
// })