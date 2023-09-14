// Начало настроек слайдера
let swiper = new Swiper(".mySwiper", {

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
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

// Конец Скрипта спойлера скрытого мобильного меню
const header = document.querySelector('.header');
const headerMobileMenuBtn = header.querySelector('.header-mobile__menu-btn');
const headerHiddenContainer = header.querySelector('.header__hidden-container');
const headerHiddenContainerMenu = header.querySelectorAll('.disabled');

function toggleMenu() {
    headerHiddenContainer.classList.toggle('header__hidden-container_open');
    headerMobileMenuBtn.classList.toggle('header-mobile__menu-btn_close');
}

headerMobileMenuBtn.addEventListener('click', () => {
    toggleMenu();
})

headerHiddenContainer.addEventListener('swiped-left', () => {
    toggleMenu();
})

// window.addEventListener('click', (e) => {
//     console.log(e.target.id);
// })

headerHiddenContainerMenu.forEach(el => {
    const headerMenuSecondFloor = el.querySelector('.header__menu-second-floor');
    el.addEventListener('click', (e) => {
        if (e.target.id === 'firstMenu') {
            el.classList.toggle('disabled-color');
            headerMenuSecondFloor.classList.toggle('header__menu-second-floor_open');
            el.classList.toggle('disabled_none-border');
        }
    })
})
// Конец Скрипта спойлера скрытого мобильного меню



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
const searchBtn = document.querySelectorAll('.search');
const searchInputContainer = document.querySelectorAll('.search__input-container');


searchInputContainer.forEach(element => {
    const searchInput = element.querySelector('.search__input');
    const searchClearBtn = element.querySelector('.search__clear-btn')
    const searchContainer = element.querySelector('.search__container')

    window.addEventListener('click', (e) => {
        if (e.target.id !== 'search') {
            element.classList.add('invisibility');
        }
    })

    searchBtn.forEach(el => {
        el.addEventListener('click', () => {
            element.classList.toggle('invisibility');
        })
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
})


// Конец скрипта поиска

// Начало скрипта обратной связи
const overlayRecOnline = document.querySelectorAll('.overlayRecOnline');
const recBtn = document.querySelectorAll('.rec-btn');

overlayRecOnline.forEach(el => {
    const popupForm = el.querySelector('.popup-rec-online__form');
    const popupRecOnlineContainer = el.querySelectorAll('.popup-rec-online__container');
    const megionContainer = el.querySelector('#megionContainer');
    const overlayCloseBtn = el.querySelector('.popup-rec-online__close-btn');
    const nignevartovskContainer = el.querySelector('#nignevartovskContainer');
    const popupRecOnlineName = el.querySelector('.popup-rec-online__name');
    const popupRecOnlineSurname = el.querySelector('.popup-rec-online__surname');
    const popupRecOnlineTel = el.querySelector('.popup-rec-online__tel');
    const popupRecOnlineComment = el.querySelector('.popup-rec-online__comment');
    const popupSubmitBtn = el.querySelector('.popup-rec-online__submit-btn');
    const popupSpan = el.querySelectorAll('.popup-rec-online__span');

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            overlayClose();
        }
    })
    recBtn.forEach(element => {
        element.addEventListener('click', () => {
            if (el.id === element.id) {
                overlayOpen();
            }
        })
    })

    overlayCloseBtn.addEventListener('click', () => {
        overlayClose();
    })

    function overlayOpen() {
        el.classList.add('overlay_open');
    }

    function overlayClose() {
        el.classList.remove('overlay_open');
    }

    function addErr(name) {
        popupSpan.forEach(el => {
            if (name) {
                if (el.id === name.name) {
                    el.classList.add('popup-rec-online__span_open');
                    name.classList.add('input__err');
                }
            } else {
                if (el.id === 'citySpan') {
                    el.classList.add('popup-rec-online__span_open');
                }
            }
        })
    }

    function removeErr(name) {
        popupSpan.forEach(el => {
            if (name) {
                if (el.id === name.name) {
                    if (el.classList.contains('popup-rec-online__span_open')) {
                        el.classList.remove('popup-rec-online__span_open');
                        name.classList.remove('input__err');
                    }
                }
            } else {
                if (el.id === 'citySpan') {
                    el.classList.remove('popup-rec-online__span_open');
                }
            }
        })
    }

    function checkValidInput(elementInput) {
        if (elementInput.name === 'phone') {
            if (elementInput.value.length < 17) {
                addErr(elementInput);
                return false;
            } else {
                removeErr(elementInput);
                return true;
            }
        }
        if (elementInput.name === 'name') {
            if (elementInput.value.length < 2) {
                addErr(elementInput);
                return false;
            } else {
                removeErr(elementInput);
                return true;
            }
        }
    }

    function handleInputCheck(elementInput) {
        checkValidInput(elementInput);
        elementInput.addEventListener('input', () => {
            checkValidInput(elementInput);
        })
        if (checkValidInput(elementInput)) {
            return true;
        } else {
            return false;
        }
    }

    function handleValidateCheck() {
        handleInputCheck(popupRecOnlineName);
        handleInputCheck(popupRecOnlineTel);
        choiceErr();
        if (handleInputCheck(popupRecOnlineName) && handleInputCheck(popupRecOnlineTel) && choiceErr()) {
            return true;
        } else {
            return false;
        }
    }

    function choiceErr() {
        if (megionContainer.classList.contains('popup-rec-online__container_checked') || nignevartovskContainer.classList.contains('popup-rec-online__container_checked')) {
            return true;
        } else {
            addErr();
            return false;
        }
    }

    popupRecOnlineContainer.forEach(item => {
        item.addEventListener('click', (e) => {
            removeErr();
            if (e.target.id === 'megion') {
                megionContainer.classList.add('popup-rec-online__container_checked');
                nignevartovskContainer.classList.remove('popup-rec-online__container_checked');
            } if (e.target.id === 'nignevartovsk') {
                nignevartovskContainer.classList.add('popup-rec-online__container_checked');
                megionContainer.classList.remove('popup-rec-online__container_checked');
            }
        })
    })

    popupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleValidateCheck();
        if (handleValidateCheck()) {
            popupRecOnlineContainer.forEach(item => {
                if (item.classList.contains('popup-rec-online__container_checked')) {
                    console.log(item.querySelector('.city__name').textContent.trimStart());
                }
            })
            console.log(popupRecOnlineName.value);
            console.log(popupRecOnlineSurname.value);
            console.log(popupRecOnlineTel.value);
            console.log(popupRecOnlineComment.value);
            overlayClose();
        }
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

// Начало Скрипта для предложений
const offer = document.querySelector('.offer');
// const offerCard = offer.querySelectorAll('.offer__card');
const offerContainerGrid = offer.querySelectorAll('.offer__container-grid');

function invisibilityCard(card) {
    card.classList.add('invisibility');
}

function visibleCard(card) {
    card.classList.remove('invisibility');
}

function hiddenCard(card) {
    if (window.screen.width < 686) {
        invisibilityCard(card);
    } else {
        visibleCard(card);
    }
}

let staticWidth = 680;

function hiddenSuperfluous() {
    
    // if (window.screen.width < 680) {
    
    offerContainerGrid.forEach(el => {
        const offerCard = el.querySelectorAll('.offer__card');
        let num = 0;
        offerCard.forEach(element => {
            if (element.classList.contains('offer__card-two-column')) {
                invisibilityCard(element);
            } else {
                num++;
                if (num > 4) {
                    invisibilityCard(element);
                }
            }
        })
    })
    
}

function visualSuperfluous() {    
    offerContainerGrid.forEach(el => {
        const offerCard = el.querySelectorAll('.offer__card');
        offerCard.forEach(element => {
            if (element.classList.contains('invisibility')) {
                visibleCard(element);
            }
        })
    })
}

hiddenSuperfluous();

window.addEventListener('resize', function () {
    if (staticWidth > window.screen.width) {
        hiddenSuperfluous();
    } else {
        visualSuperfluous();
    }
});

// Конец Скрипта для предложений