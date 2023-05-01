//PORTFÓLIO SLIDER
//Declarando variáveis
var sliderContainer = document.querySelector('.sp-slider-container');
var sliderList = document.querySelector('.sp-slider-list');
var sliderItem = document.querySelectorAll('.sp-portfolio-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.sp-item-prev');
var nextItem = document.querySelector('.sp-item-next');
var sliderPosition = 0;
var currentSlide = document.querySelector('.sp-current-slide');
var totalSlide = document.querySelector('.sp-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.sp-item-navigator a');
var navCounter = document.querySelector('.sp-navigator-counter span');

//Capturando larguras individuais
if(window.innerWidth < 992) {
    var containerWidth = sliderContainer.parentElement.offsetWidth - 30;
} else {
    var containerWidth = sliderContainer.parentElement.offsetWidth;
};

//Passando larguras dinânmicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';

    var sliderItemWidth = sliderItem[p].offsetWidth;
    
    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';

//Fazendo animação do Slider onClick

//HANDLERS

//Next Slider Animação
var nextSlideAnim = function(){
    var lastItem = sliderListWidth - containerWidth;

    if ((-1*(sliderPosition) === lastItem)) {
        return;
    }

    sliderPosition -= containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPosition,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

//Prev Slider Animação
var prevSlideAnim = function() {
    if ((sliderPosition === 0)) {
        return;
    }

    sliderPosition += containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPosition,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

//Counter Formatter
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}


//Counter Add
var counterAdd = function () {
    if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Counter Remove
var counterRemove = function () {
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Set Active Nav
var setActiveNav = function () {
    for (var nv = 0; nv < navItems.length; nv++) {
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));

        if (myNavNum === currentCounter) {
            navItems[nv].classList.add('sp-item-active');

            anime({
                targets: '.sp-item-active',
                width: 90
            });
        }
    }
}

//Set Active Slide
var setActiveSlide = function () {
    for (var sld = 0; sld < sliderItem.length; sld++) {
        let mySlideNum = parseInt(sliderItem[sld].getAttribute('data-slide'));

        if (mySlideNum === currentCounter) {
            sliderItem[sld].classList.add('sp-slide-active');
            sliderItem[sld].querySelector('.sp-portfolio-item-box').classList.add('sp-scale-right');
            sliderItem[sld].querySelector('.sp-portfolio-item-thumb img').classList.add('sp-scale-up');
            sliderItem[sld].querySelector('.sp-portfolio-item-info').classList.add('sp-fade-from-left');
        }
    }
}

var changeActive = function () {
    for (var rm = 0; rm < navItems.length; rm++) {
        navItems[rm].classList.remove('sp-item-active');
        anime({
            targets: navItems[rm],
            width: 20
        });
    }

    for (var rms = 0; rms < sliderItem.length; rms++) {
        sliderItem[rms].classList.remove('sp-slide-active');
        sliderItem[rms].querySelector('.sp-portfolio-item-box').classList.remove('sp-scale-right');
        sliderItem[rms].querySelector('.sp-portfolio-item-thumb img').classList.remove('sp-scale-up');
        sliderItem[rms].querySelector('.sp-portfolio-item-info').classList.remove('sp-fade-from-left');
    }
    setActiveNav();
    setActiveSlide();

}

//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
    targets: '.sp-item-active',
    width: 90
});

nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
    changeActive();
});

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
    changeActive();
});