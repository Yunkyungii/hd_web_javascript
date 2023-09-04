//변수를 사용할 때 => var(요즘 사용 거의x) let(숫자) const(그 외)
const TOPBANNER = document.querySelector('.TopBanner')

const TOPBANNER_DOTS = document.querySelectorAll('.TopBanner .dots li');

const TOPBANNER_SLIDE = new Swiper('.TopBanner_slide', {
    loop: true,
    autoplay: {
        delay: 3000
    },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex); //this 를 데리고 오려면 function 사용
            TOPBANNER_DOTS.forEach(it => it.classList.remove('on'));
            TOPBANNER_DOTS[this.realIndex].classList.add('on')
        }
    }
});


TOPBANNER_DOTS.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        // console.log(idx);
        TOPBANNER_SLIDE.slideToLoop(idx);
    })
});

const TOPBANNER_CLOSE = document.querySelector('.TopBanner .close');

TOPBANNER_CLOSE.addEventListener('click', e => {
    e.preventDefault();
    TOPBANNER.classList.add('on');
})