const menu = document.querySelector('.nav__btn');
menu.onclick = function () {
    const nav = document.querySelector('.header__nav')
    const body = document.querySelector('.body')
    nav.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('active')
}

// header fixed

// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//     let scrollPos = 48;
//     let header = document.querySelector('.header');
//     let main = document.querySelector('.main');
//     if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
//         header.classList.add('fixed')
//     } else {
//         header.classList.remove('fixed')
//     }
// }

// dropDown

const dropBtn = document.querySelector('.nav__dropDown');

dropBtn.onclick = function () {
    const subList = document.querySelector('.sub__list');
    subList.classList.toggle('open')
    dropBtn.classList.toggle('open')
}

// accordion

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion')

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = document.querySelector('.accordion__control');
            const content = document.querySelector('.accordion__content')

            self.classList.toggle('open');

            if(self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false)
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true)
            }
        });
    });
});

// video 

let video = document.querySelector('.video__video')
let btn = document.getElementById('play-pause')

btn.onclick = function() {
    video.play();
    btn.style.display = 'none';
    video.controls = true;
    video.volume = 0.3;
}
