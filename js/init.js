$(document).ready(function($){


    // $('html,body').stop().animate({scrollTop: '0px'}, 100)

  var mySwiper = new Swiper ('.swiper1', {
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
      // pagination: {
      //     el: '.swiper-pagination',
      // },
      
      // 如果需要前进后退按钮
      navigation: {
          nextEl: '.swiper1_next .swiper-button-next',
          prevEl: '.swiper1_prev .swiper-button-prev',
      },
  })
  
    


  var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 1,
      spaceBetween: 20,
      // init: false,
      // centeredSlides:true,
      offsetPxBefore:1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100,
        // callback: function(box) {
          
        // }
      }
    );
    wow.init();


  $("#proVidoe").click(function(){
    // $(this).find("video")[0].play
    // $(this).find(".mask").removeClass("mask")
    // console.log($(this).find("video")[0].play())
    console.log($(this).find("video").hasClass('pause'))
     if($(this).find("video").hasClass('pause')){
            $(this).find("video").removeClass('pause');
            $(this).find("video").addClass('play');
            $(this).find("video")[0].play()
            $(this).find(".mask").removeClass("mask")
 
        }else{
            $(this).find("video").removeClass('play');
            $(this).find("video").addClass('pause');
            $('#proVidoe div:first-child').addClass('mask');
            $(this).find("video")[0].pause()
        }
  })


function feedback(){
  $('.side').click(function(){
    $('.feedback').show()
  })
  $('.close').click(function(){
    $('.feedback').hide()
  })
  setTimeout(()=>{
    $('.feedback').show()
  },5000)  
}
feedback()


  $("#scrollTop").hide()
  $(function(){             
      $(window).scroll(function(){                 
          if($(this).scrollTop()>600){
            $("#scrollTop").fadeIn();
            $(".side").fadeIn();           
          } else {      
              $("#scrollTop").fadeOut();  
              $(".side").fadeOut();  
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
    // $('.ov-x').removeClass('container')
    $('.swiper1 .swiper-slide img').addClass('v-h')
    // $('.swiper2 .swiper-slide').css({width:'100%'})
    // $('.swiper2 .swiper-wrapper').css({padding:'50px'})
    // $('#services').find('div[class="container"]').addClass("ov-x")
    // $('#services').find('div[class="container ov-x"]').removeClass("container")
    $('.proVidoe').find('div[class="container"]').removeClass("container")
    $('.category-item img').addClass('ct-i')
    $('.caption p.title').addClass('ct-t')
    $('.caption p.description').addClass('ct-d')
    var img = $('.swiper1 .swiper-slide img')
    var i;
    for (i = 1; i < img.length-1; i++) {
      img[i].setAttribute("src", "images/slider-"+i+".jpg")
    }
    img[0].setAttribute("src", "images/slider-3.jpg")
    img[4].setAttribute("src", "images/slider-1.jpg")
    console.log(i)
    setTimeout(()=>{
      if (i == img.length-1) {
        $('.swiper1.swiper-container img').addClass('appear')
        $('.swiper1 .swiper-slide img').removeClass('v-h')      
      }
    },800)
  }else{
    $('.swiper1.swiper-container img').css({opacity:1})
  }
})


