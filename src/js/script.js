
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $(".js-hamburger, .js-drawer, .js-drawer a").click(function () {
    $(".js-hamburger, body").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });

  // ドロワーメニューアニメーション
  $(".js-hamburger").click(function () {
    $(".js-drawer, .js-drawer__inner").toggleClass('panelactive');
    $(".js-circle").toggleClass('circleactive');
  })
  $(".header__drawer-item a, .js-drawer").click(function () {
    $(".js-drawer, .js-drawer__inner").removeClass('panelactive');
    $(".js-circle").removeClass('circleactive');
  })

  // News・Worksカテゴリのクリックイベント
  $(".list__category-item").click(function ()  {
    $(".list__category-item").each(function () {
      $(this).removeClass("is-active");
    })
    $(this).addClass('is-active');
  })

});

const swiper = new Swiper(".mv__js-swiper", {
  direction: "vertical", //　縦方向
  loop: true,
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

// easeの定義
const custom = CustomEase.create("custom", "0.48,-0.02,0,0.85");

const serviceTrigger = {
  trigger:'.service__title',
  start:'top 75%',
};
const worksTrigger = {
  trigger:'.works__title',
  start:'top 75%',
};
const newsTrigger = {
  trigger:'.news__title',
  start:'top 75%',
};

const mm = gsap.matchMedia();
mm.add('(min-width:769px)', function () {
  if ($("main").hasClass('js-top')) {
    gsap.to('.service__title',{clipPath:'inset(0 0 0 0%)',duration:2,ease:custom,scrollTrigger:serviceTrigger});
    gsap.to('.works__title',{clipPath:'inset(0 0% 0 0)',duration:2,ease:custom,scrollTrigger:worksTrigger});
    gsap.to('.news__title',{clipPath:'inset(0 0% 0 0)',duration:2,ease:custom,scrollTrigger:newsTrigger});

    // gsap.fromTo('.about__img',
    //   {opacity:0, x:-30},
    //   {opacity:1, x:0, duration:1, scrollTrigger:{
    //     trigger:'.about__img',
    //     start:'top 70%',
    // }});
    // gsap.fromTo('.about__contents',
    //   {opacity:0, x:30},
    //   {opacity:1, x:0, duration:1, scrollTrigger:{
    //     trigger:'.about__contents',
    //     start:'top 70%',
    // }});

    let images=document.querySelectorAll('.js-image');
    images.forEach((image)=>{
      // divタグを生成
      let coverDiv = document.createElement('div');
      coverDiv.classList.add('js-image-cover');
      image.appendChild(coverDiv);

      gsap.fromTo(
        image.querySelector('.js-image-cover'),
        {
          skewX:10,
          scale:1.2,
          xPercent:0,
        },
        {
          skewX:10,
          scale:1.2,
          xPercent:-120,
          duration:1,
          ease:Power3.easeOut,
          scrollTrigger:{
            trigger:image,
            start:"top bottom",
          }
        }
      );
    });

    gsap.fromTo('.service__card',
      {opacity:0, y:20},
      {opacity:1, y:0, duration:1, stagger:.3, scrollTrigger:{
        trigger:'.service__card',
        start:'top 75%',
    }});

    gsap.fromTo('.works__item',
      {opacity:0, y:20},
      {opacity:1, y:0, duration:1, stagger:.5, scrollTrigger:{
        trigger:'.works__item',
        start:'top 75%',
    }});

    gsap.fromTo('.list__categories',
      {opacity:0, y:20},
      {opacity:1, y:0, duration:1.5, scrollTrigger:{
        trigger:'.list__categories',
        start:'top 75%',
    }});

    gsap.fromTo('.list__menu-item',
      {opacity:0, y:20},
      {opacity:1, y:0, duration:.3, stagger:.3, scrollTrigger:{
        trigger:'.list__menu-item',
        start:'top 75%',
    }});

  } else if ($("main").hasClass('js-listPage')) {
    gsap.fromTo('.list__categories',
      {opacity:0, y:20},
      {opacity:1, y:0, duration:1.5, scrollTrigger:{
        trigger:'.list__categories',
        start:'top 75%',
    }});
  
    gsap.fromTo('.list__menu-item',
      {opacity:0, y:20},
      {opacity:1, y:0, duration:.3, stagger:.3, scrollTrigger:{
        trigger:'.list__menu-item',
        start:'top 75%',
    }});
  }

  if(document.querySelector('.lower-mv__title') !== null) {
    // 下層ページMVアニメーション
    gsap.fromTo('.lower-mv__title',
      {opacity:0, x:-30},
      {opacity:1, x:0, duration:1, delay:.5});
  
    gsap.fromTo('.lower-mv__img',
      {opacity:0, x:30},
      {opacity:1, x:0, duration:2});
  }
});