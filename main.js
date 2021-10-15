var swiper = new Swiper(".team-setion__slider", {
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
    speed: 500,
    navigation: {
        nextEl: '.team-setion__button-next',
        prevEl: '.team-setion__button-prev',
    },  
    on: {
        transitionStart: updateNumberSlider
    }
});

var swiper = new Swiper(".about-setion__scroll-block", {
    speed: 500,
    spaceBetween: 0,
    centeredSlides: false,
    grabCursor: true,
    slidesPerView: 'auto',
    initialSlide: 0,
    keyboardControl: false,
    resizeReInit: true,
    slidesOffsetBefore: (window.innerWidth - 1200)/2,
    navigation: {
        nextEl: '.about-setion__button-next',
        prevEl: '.about-setion__button-prev',
    },  
});

function updateNumberSlider() {
    const slider = document.querySelector('.team-setion__slider .swiper-wrapper')

    document.querySelector('.swiper-wrapper__numbers').lastElementChild.innerHTML = slider.childElementCount
    
    for (var i = 0; i < slider.children.length; i++) {
        if(slider.children[i].classList.contains('swiper-slide-active')){
            document.querySelector('.swiper-wrapper__numbers').firstElementChild.innerHTML = i + 1
        }
    }
}

updateNumberSlider()

const inputs = document.querySelectorAll('.contact-setion__input-group input')

inputs.forEach(el => {
    el.addEventListener('focus', e => {
        el.parentElement.classList.add('focus')
    })
    el.addEventListener('blur', e => {
        if(!el.value){
            el.parentElement.classList.remove('focus')
        }
    })
})