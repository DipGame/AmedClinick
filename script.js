// Начало настроек слайдера
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
});
// Конец настроек слайдера

// Начало скрипта кнопки фильтра лево право и зависящих скриптов
const choiceBtn = document.querySelectorAll('.choice-filter-btn');
const organizationPers = document.getElementById('organizationPers');
const naturalPers = document.getElementById('naturalPers');

choiceBtn.forEach(el => {
    const colorChoiceDiv = el.querySelector('.choice-filter-btn__color');
    const titleChoice = el.querySelectorAll('.choice-filter-btn__title');
    el.addEventListener('click', () => {
        colorChoiceDiv.classList.toggle('choice-filter-btn__color-right');
        if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
            titleChoice[1].classList.add('choice-filter-btn__title-color');
            titleChoice[0].classList.remove('choice-filter-btn__title-color');
        } else {
            titleChoice[0].classList.add('choice-filter-btn__title-color');
            titleChoice[1].classList.remove('choice-filter-btn__title-color');
        }
        // Для предложений
        if (el.classList.contains('offer__btn-choice')) {
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                organizationPers.classList.remove('invisibility');
                naturalPers.classList.add('invisibility');
            } else {
                organizationPers.classList.add('invisibility');
                naturalPers.classList.remove('invisibility');
            }
        }
    })
})
// Конец скрипта кнопки фильтра лево право и зависящих скриптов
