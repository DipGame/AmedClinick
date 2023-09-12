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

let docsSwiper = new Swiper(".docsSwiper", {
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    }
});
// Конец настроек слайдера

// Начало скрипта кнопки фильтра лево право и зависящих скриптов
const choiceBtn = document.querySelectorAll('.choice-filter-btn');

const organizationPers = document.getElementById('organizationPers');
const naturalPers = document.getElementById('naturalPers');

const docsAppointment = document.getElementById('docsAppointment');
const docsStudy = document.getElementById('docsStudy');

const nignevartovskDocs = document.getElementById('nignevartovskDocs');
const megionDocs = document.getElementById('megionDocs');

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
        // Для прием врачей
        if (el.classList.contains('docs-appointment__btn-choice')) {
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                docsStudy.classList.remove('invisibility');
                docsAppointment.classList.add('invisibility');
            } else {
                docsStudy.classList.add('invisibility');
                docsAppointment.classList.remove('invisibility');
            }
        }
        // Для списка врачей
        if (el.classList.contains('docs__btn-choice')) {
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                megionDocs.classList.remove('invisibility');
                nignevartovskDocs.classList.add('invisibility');
            } else {
                megionDocs.classList.add('invisibility');
                nignevartovskDocs.classList.remove('invisibility');
            }
        }
    })
})
// Конец скрипта кнопки фильтра лево право и зависящих скриптов

// Начало скрипта поиска
const searchBtn = document.querySelector('.search');
const searchInputContainer = document.querySelector('.search__input-container');
const searchInput = searchInputContainer.querySelector('.search__input');
const searchClearBtn = searchInputContainer.querySelector('.search__clear-btn')
const searchContainer = searchInputContainer.querySelector('.search__container')

window.addEventListener('click', (e) => {
    if (e.target.id !== 'search') {
        searchInputContainer.classList.add('invisibility');
    }
})

searchBtn.addEventListener('click', () => {
    searchInputContainer.classList.toggle('invisibility');
})

searchClearBtn.addEventListener('click', () => {
    searchInput.value = "";
    searchContainer.classList.add('invisibility');
})

searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 2) {
        searchContainer.classList.remove('invisibility');
    } else {
        searchContainer.classList.add('invisibility');
    }
});
// Конец скрипта поиска

// Начало скрипта обратной связи
const overlayRecOnline = document.querySelectorAll('.overlayRecOnline');

overlayRecOnline.forEach(el => {
    const popupForm = el.querySelector('.popup-rec-online__form');
    const popupRecOnlineContainer = el.querySelectorAll('.popup-rec-online__container');
    const megionContainer = el.querySelector('#megionContainer');
    const nignevartovskContainer = el.querySelector('#nignevartovskContainer');
    const popupRecOnlineName = el.querySelector('.popup-rec-online__name');
    const popupRecOnlineSurname = el.querySelector('.popup-rec-online__surname');
    const popupRecOnlineTel = el.querySelector('.popup-rec-online__tel');
    const popupRecOnlineComment = el.querySelector('.popup-rec-online__comment');
    const popupSubmitBtn = el.querySelector('.popup-rec-online__submit-btn');

    console.log(popupSubmitBtn.disable);

    popupRecOnlineContainer.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.id === 'megion') {
                megionContainer.classList.add('popup-rec-online__container_checked');
                nignevartovskContainer.classList.remove('popup-rec-online__container_checked');
            } else {
                nignevartovskContainer.classList.add('popup-rec-online__container_checked');
                megionContainer.classList.remove('popup-rec-online__container_checked');
            }
        })
    })

    popupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        popupRecOnlineContainer.forEach(item => {
            if (item.classList.contains('popup-rec-online__container_checked') && popupRecOnlineName.value && popupRecOnlineTel.value) {
                console.log(item.querySelector('.city__name').textContent);
                console.log(popupRecOnlineName.value);
                console.log(popupRecOnlineSurname.value);
                console.log(popupRecOnlineTel.value);
                console.log(popupRecOnlineComment.value);
            }
        })
    })
})
// Конец скрипта обратной связи

// Начало Скрипта маски телефона
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('.popup-rec-online__tel'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});
// Конец Скрипта маски телефона