//VARIÁVEIS
var btnContact = document.querySelector('.sp-btn-contact');
var toggleModal = document.querySelectorAll('.sp-toggle-modal');
var toggleMenu = document.querySelectorAll('.sp-toggle-menu');
var menuMobile = document.querySelectorAll('.sp-menu-mobile');
var btnMenuMobIcon = document.querySelectorAll('.sp-btn-menu-mobile ion-icon');

//PÁGINA PRELOADER
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.sp-preloader');
    pagePreloder.classList.add('sp-fade-out');
 
    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//BOTÃO TOGGLE DE CONTATO
btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.sp-contact-info');
    boxContact.classList.toggle('sp-is-open');
    this.classList.toggle('sp-change-icon');
});

//Abrindo e fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.sp-menu-overlay');
        overlay.classList.toggle('sp-is-open');
        menuMobile.classList.toggle('sp-menu-is-closed');
        menuMobile.classList.toggle('sp-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }

    });
}

//Abrindo e fechando o Modal de Orçamento
for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.sp-overlay');
        var modalOcamento = document.querySelector('#sp-modal-orcamento');

        overlay.classList.toggle('sp-is-open');
        modalOcamento.classList.toggle('sp-is-open');
        modalOcamento.classList.toggle('sp-slide-top-in');
    });
};

var postGallery = document.querySelector('.sp-post-gallery');
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (postGallery.clientHeight - 270) + 'px';

//Animando elementos on Scroll com Waypoints
var myScrollDown = document.querySelector('.sp-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
      myScrollDown.classList.toggle('sp-fade-out');
    },
    offset: '80%'
  });




