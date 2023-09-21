// Начало настроек слайдера
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1011: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1340: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        1432: {
            slidesPerView: 6,
            spaceBetween: 30
        },
    }
});

let reviewsSwiper = new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.reviews-swiper-button-next',
        prevEl: '.reviews-swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    loop: false,
    breakpoints: {
        866: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1281: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});


let reviewsSwiperTwo = new Swiper(".reviewsSwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.ddd-next',
        prevEl: '.ddd-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    loop: false,
    breakpoints: {
        866: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1281: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

let licenceSwiper = new Swiper(".licenceSwiper", {
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        546: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1011: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1340: {
            slidesPerView: 5,
            spaceBetween: 30
        },
    }
});

// Конец настроек слайдера

// Начало Скрипта спойлера скрытого мобильного меню
const header = document.querySelector('.header');
const headerMobile = header.querySelector('.header-mobile');
const headerMobileMenuBtn = header.querySelector('.header-mobile__menu-btn');
const headerHiddenContainer = header.querySelector('.header__hidden-container');
const headerHiddenContainerMenu = header.querySelectorAll('.disabled');

function toggleMenu() {
    headerHiddenContainer.classList.toggle('header__hidden-container_open');
    headerMobileMenuBtn.classList.toggle('header-mobile__menu-btn_close');
    // headerMobile.classList.toggle('header-mobile_fixed');
    
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

const reviewsVideo = document.getElementById('reviewsVideo');
const reviewsPhoto = document.getElementById('reviewsPhoto');

const servicesForPeople = document.getElementById('servicesForPeople');
const servicesForOrganizaci = document.getElementById('servicesForOrganizaci');

const fmcDescription = document.getElementById('fmcDescription');
const fmcPreparation = document.getElementById('fmcPreparation');

const nignevartovskDoctors = document.getElementById('nignevartovskDoctors');
const megionDoctors = document.getElementById('megionDoctors');

const fotoNign = document.getElementById('fotoNign');
const fotoMegion = document.getElementById('fotoMegion');

choiceBtn.forEach(el => {
    const colorChoiceDiv = el.querySelector('.choice-filter-btn__color');
    const titleChoice = el.querySelectorAll('.choice-filter-btn__title');
    el.addEventListener('click', (e) => {
        if (!colorChoiceDiv.classList.contains('invisibility')) {
            colorChoiceDiv.classList.toggle('choice-filter-btn__color-right');
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                titleChoice[1].classList.add('choice-filter-btn__title-color');
                titleChoice[0].classList.remove('choice-filter-btn__title-color');
            } else {
                titleChoice[0].classList.add('choice-filter-btn__title-color');
                titleChoice[1].classList.remove('choice-filter-btn__title-color');
            }
        } else {
            colorChoiceDiv.classList.remove('invisibility');
            if (e.target.id === 'nignevartovskBtn') {
                colorChoiceDiv.classList.remove('choice-filter-btn__color-right');
                titleChoice[0].classList.add('choice-filter-btn__title-color');
                titleChoice[1].classList.remove('choice-filter-btn__title-color');
            } else {
                colorChoiceDiv.classList.add('choice-filter-btn__color-right');
                titleChoice[1].classList.add('choice-filter-btn__title-color');
                titleChoice[0].classList.remove('choice-filter-btn__title-color');
            }
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
        // Для наши специалисты
        if (el.classList.contains('specialistPeople__btn-choice')) {
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                megionDoctors.classList.remove('invisibility');
                nignevartovskDoctors.classList.add('invisibility');
            } else {
                megionDoctors.classList.add('invisibility');
                nignevartovskDoctors.classList.remove('invisibility');
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
        // Для фото - видео
        if (el.classList.contains('reviews__btn-choice')) {
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                reviewsPhoto.classList.remove('invisibility');
                reviewsVideo.classList.add('invisibility');
            } else {
                reviewsPhoto.classList.add('invisibility');
                reviewsVideo.classList.remove('invisibility');
            }
        }
        // Для страницы услуг
        if (el.classList.contains('services__btn-choice')) {
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                servicesForOrganizaci.classList.remove('invisibility');
                servicesForPeople.classList.add('invisibility');
            } else {
                servicesForOrganizaci.classList.add('invisibility');
                servicesForPeople.classList.remove('invisibility');
            }
        }
        // Для страницы услуг
        if (el.classList.contains('fmc__btn-choice')) {
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                fmcPreparation.classList.remove('invisibility');
                fmcDescription.classList.add('invisibility');
            } else {
                fmcPreparation.classList.add('invisibility');
                fmcDescription.classList.remove('invisibility');
            }
        }
        // Для Фото клиник
        if (el.classList.contains('clinic__btn-choice')) {
            if (colorChoiceDiv.classList.contains('choice-filter-btn__color-right')) {
                fotoMegion.classList.remove('invisibility');
                fotoNign.classList.add('invisibility');
            } else {
                fotoMegion.classList.add('invisibility');
                fotoNign.classList.remove('invisibility');
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

// Начало скрипта попапа картинок
const overlayImg = document.querySelector('.overlayImg');
const popupImg = overlayImg.querySelector('.popupImg');
const popupSwiperWrapper = overlayImg.querySelector('.swiper-wrapper');
const popupClose = overlayImg.querySelector('.popup-rec-online__close-btn');

function overlayOpen() {
    overlayImg.classList.add('overlay_open');
}

function overlayClose() {
    overlayImg.classList.remove('overlay_open');
    popupSwiperWrapper.innerHTML = "";
}

window.addEventListener('click', (e) => {
    if (e.target.alt === 'kartinka') { // По Alt определеям картинки, которые нужно вывести в слайдер попапа
        let imageArr = e.target.offsetParent.offsetParent.childNodes;
        let arr = [];
        let num = 0;
        imageArr.forEach(el => {
            if (el.localName) {
                el.id = num;
                num++;
                let copy = el.cloneNode(true);
                arr.push(copy);
                popupSwiperWrapper.appendChild(copy);
            }
        })
        var numIdImg = e.target.offsetParent.id;
        let popupSwiper = new Swiper(".popupSwiper", {
            slidesPerView: 1,
            initialSlide: e.target.offsetParent.id,
            spaceBetween: 30,
            navigation: {
                nextEl: '.popup-swiper-button-next',
                prevEl: '.popup-swiper-button-prev',
            },
            loop: false,
        });
        console.log(numIdImg);
        overlayOpen();
        popupClose.addEventListener('click', () => {
            overlayClose();
            popupSwiper.destroy(true, true);
        })
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('overlay')) {
                overlayClose();
                popupSwiper.destroy(true, true);
            }
        })
    }
})
// Конец скрипта попапа картинок

// Начало скрипта обратной связи
const overlayRecOnline = document.querySelectorAll('.overlayRecOnline');
const recBtn = document.querySelectorAll('.rec-btn');
const appBtn = document.querySelectorAll('.app-btn');

overlayRecOnline.forEach(el => {
    const popupForm = el.querySelector('.popup-rec-online__form');
    const popupRecOnline = el.querySelector('.popup-rec-online');
    const popupRecOnlineContainer = el.querySelectorAll('.popup-rec-online__container');
    const megionContainer = el.querySelector('#megionContainer');
    const overlayCloseBtn = el.querySelector('.popup-rec-online__close-btn');
    const nignevartovskContainer = el.querySelector('#nignevartovskContainer');
    const popupRecOnlineName = el.querySelector('#inputName');

    const popupRecOnlineSurname = el.querySelector('.popup-rec-online__surname');
    const popupRecOnlineTel = el.querySelector('.popup-rec-online__tel');
    const popupRecOnlineComment = el.querySelector('.popup-rec-online__comment');
    const popupSubmitBtn = el.querySelector('.popup-rec-online__submit-btn');
    const popupSpan = el.querySelectorAll('.popup-rec-online__span');
    const popupBottomContainer = el.querySelector('.popup-rec-online__bottom-container');
    const popupTitle = el.querySelector('.popup__title');
    const popupLinkTitle = el.querySelector('.popup__link-title');

    if (el.id === 'app') {
        const popupRecOnlineDate = el.querySelector('#inputDate');
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        console.log(month);
        if (month < 10) {
            month = '0' + month;
        }
        let day = date.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        let nowDate = year + '-' + month + "-" + day;
        popupRecOnlineDate.value = nowDate;
    }

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            overlayClose();
        }
        console.log(el.id === e.target.id);
    })
    recBtn.forEach(element => {
        element.addEventListener('click', () => {
            if (el.id === element.id) {
                overlayOpen();
            }
        })
    })
    appBtn.forEach(element => {
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

    function handleValidateCheck(nameInput, telInput) {
        handleInputCheck(nameInput);
        handleInputCheck(telInput);
        choiceErr();
        if (handleInputCheck(nameInput) && handleInputCheck(telInput) && choiceErr()) {
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
            if (e.target.id === 'megionOne') {
                megionContainer.classList.add('popup-rec-online__container_checked');
                nignevartovskContainer.classList.remove('popup-rec-online__container_checked');
            } if (e.target.id === 'nignevartovskOne') {
                nignevartovskContainer.classList.add('popup-rec-online__container_checked');
                megionContainer.classList.remove('popup-rec-online__container_checked');
            }
        })
    })

    popupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleValidateCheck(popupRecOnlineName, popupRecOnlineTel);
        if (handleValidateCheck(popupRecOnlineName, popupRecOnlineTel)) {
            popupRecOnlineContainer.forEach(item => {
                if (item.classList.contains('popup-rec-online__container_checked')) {
                    console.log(item.querySelector('.city__name').textContent.trimStart());
                }
            })
            if (el.id === 'app') {
                console.log(el.querySelector('#inputDate').value);
                console.log(el.querySelector('#select').value);
            }
            console.log(popupRecOnlineName.value);
            console.log(popupRecOnlineSurname.value);
            console.log(popupRecOnlineTel.value);
            console.log(popupRecOnlineComment.value);
            popupForm.classList.add('invisibility');
            popupBottomContainer.classList.add('invisibility');
            popupLinkTitle.classList.add('invisibility');
            popupRecOnline.classList.add('popup__height');
            popupTitle.textContent = 'Спасибо, форма успешно отправленна! Мы вам перезвоним!'
            setTimeout(() => {
                overlayClose();
            }, 3500);
        }
    })
})
// Конец скрипта обратной связи

// НАчало скрипта обратной связи банер
if (document.querySelector('.callback-baner')) {
    const callbackBaner = document.querySelector('.callback-baner');
    const callbackForm = callbackBaner.querySelector('.popup-rec-online__form');
    const callbackRecOnlineName = callbackBaner.querySelector('.popup-rec-online__name');
    const callbackRecOnlineTel = callbackBaner.querySelector('.popup-rec-online__tel');
    const callbackSubmitBtn = callbackBaner.querySelector('.popup-rec-online__submit-btn');
    const callbackSpan = callbackBaner.querySelectorAll('.popup-rec-online__span');
    const callbackChoiceFilterBtn = callbackBaner.querySelector('.choice-filter-btn');
    const callbackTitle = callbackBaner.querySelector('.callback-baner__title');
    const callbackLinkText = callbackBaner.querySelector('.callback-baner__link-text');
    const callbackChoiceFilterBtnColor = callbackBaner.querySelector('.choice-filter-btn__color');
    const callbackChoiceFilterBtnTitle = callbackBaner.querySelectorAll('.choice-filter-btn__title');

    callbackChoiceFilterBtn.addEventListener('click', () => {
        removeCallBackErr();
    })

    function addCallBackErr(name) {
        callbackSpan.forEach(el => {
            if (name) {
                if (el.id === name.name) {
                    el.classList.add('popup-rec-online__span_open');
                    name.classList.add('input__err');
                }
            } else {
                if (el.id === 'callbackSpan') {
                    el.classList.add('popup-rec-online__span_open');
                }
            }
        })
    }

    function removeCallBackErr(name) {
        callbackSpan.forEach(el => {
            if (name) {
                if (el.id === name.name) {
                    if (el.classList.contains('popup-rec-online__span_open')) {
                        el.classList.remove('popup-rec-online__span_open');
                        name.classList.remove('input__err');
                    }
                }
            } else {
                if (el.id === 'callbackSpan') {
                    el.classList.remove('popup-rec-online__span_open');
                }
            }
        })
    }

    function choiceCallBackErr() {
        if (callbackChoiceFilterBtnColor.classList.contains('invisibility')) {
            addCallBackErr();
            return false;
        } else {
            return true;
        }
    }

    function clearInputs() {
        callbackForm.classList.add('invisibility');
    }

    function checkCallBackValidInput(elementInput) {
        if (elementInput.name === 'phone') {
            if (elementInput.value.length < 17) {
                addCallBackErr(elementInput);
                return false;
            } else {
                removeCallBackErr(elementInput);
                return true;
            }
        }
        if (elementInput.name === 'name') {
            if (elementInput.value.length < 2) {
                addCallBackErr(elementInput);
                return false;
            } else {
                removeCallBackErr(elementInput);
                return true;
            }
        }
    }

    function handleCallBackInputCheck(elementInput) {
        checkCallBackValidInput(elementInput);
        elementInput.addEventListener('input', () => {
            checkCallBackValidInput(elementInput);
        })
        if (checkCallBackValidInput(elementInput)) {
            return true;
        } else {
            return false;
        }
    }

    function handleCallBackValidateCheck(nameInput, telInput) {
        handleCallBackInputCheck(nameInput);
        handleCallBackInputCheck(telInput);
        choiceCallBackErr();
        if (handleCallBackInputCheck(nameInput) && handleCallBackInputCheck(telInput) && choiceCallBackErr()) {
            return true;
        } else {
            return false;
        }
    }

    callbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleCallBackValidateCheck(callbackRecOnlineName, callbackRecOnlineTel);
        if (handleCallBackValidateCheck(callbackRecOnlineName, callbackRecOnlineTel)) {
            callbackChoiceFilterBtnTitle.forEach(el => {
                if (el.classList.contains('choice-filter-btn__title-color')) {
                    console.log(el.textContent.trimStart());
                }
            })
            console.log(callbackRecOnlineName.value);
            console.log(callbackRecOnlineTel.value);
            clearInputs();
            callbackTitle.textContent = 'Спасибо, форма успешно отправленна! Мы вам перезвоним!'
            callbackLinkText.textContent = '';
        }
    })
}
// Конец скрипта обратной связи банер

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
if (document.querySelector('.offer')) {
    const offer = document.querySelector('.offer');
    const offerContainerGrid = offer.querySelectorAll('.offer__container-grid');

    let staticWidth = 680;

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

    function hiddenSuperfluous() {
        if (staticWidth > window.screen.width) {

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
    }

    function visualSuperfluous() {
        if (staticWidth <= window.screen.width) {
            offerContainerGrid.forEach(el => {
                const offerCard = el.querySelectorAll('.offer__card');
                offerCard.forEach(element => {
                    if (element.classList.contains('invisibility')) {
                        visibleCard(element);
                    }
                })
            })
        }
    }

    hiddenSuperfluous();

    window.addEventListener('resize', function () {
        hiddenSuperfluous();
        visualSuperfluous();
    });
}
// Конец Скрипта для предложений