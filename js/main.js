const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

//_.throttle(함수, 시간) -> lodash라는 라이브러리의 기능
window.addEventListener('scroll', _.throttle(function(){
  if (window.scrollY > 500){
    //Hide Badge
    //gsap 이라는 라이브러리에서 가져온다
    // gsap.to(요소, 지속시간, 욥션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      //보이는것 뿐만 아니라 진짜로 없애야 함
      display: 'none'
    })
    gsap.to(toTopEl, .2, {
      x: 0,
      opacity:1
    })
  }else{
    //Show Badge
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })

    gsap.to(toTopEl, .2, {
      x: 100,
      opacity:0
    })
  }
}, 300))

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})


const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 1000
  },
  autoplayDisableOnInteraction: false,
  pauseOnMouseEnter: true,
})

new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  pauseOnMouseEnter: true,
  autoplayDisableOnInteraction: false,
  autoplay: {
    delay: 1000
  },
  centeredSlides:true,
  pagination:{
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 3,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  } else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo:true,
    ease: Back.easeInOut.config(1.7),
    delay: random(0, delay)
  })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      //보여짐 여부를 감시할 요소를 지정한다.
      triggerElement: spyEl,
      triggerHook: .8 //뷰포트 맨 위가 0 맨 아래가 1이다. 이 위치를 트리거로 한다.
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})
