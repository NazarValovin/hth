"use strict";


document.addEventListener('DOMContentLoaded', () => {


    // Swiper Slider

    function slider() {
        const sliderOfferBig = document.querySelector('.big-slider-offer-main');
        const sliderOfferSmall = document.querySelector('.small-slider-offer-main');
        const sliderRewiew = document.querySelector('.slider-rewiews-main__slider');
        const sliderClient = document.querySelector('.client-main__slider');
        const sliderCaseSinglePage = document.querySelectorAll('.case-single-content-one__slider');

        if (sliderOfferBig) {
            const swiperSmall = new Swiper(sliderOfferSmall, {
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    654: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 4,
                    },
                    1154: {
                        slidesPerView: 5,
                    },
                }
            });
            const swiperBig = new Swiper(sliderOfferBig, {
                slidesPerView: 1,
                parallax: true,
                thumbs: {
                    swiper: swiperSmall
                }
            });
        }
        if (sliderRewiew) {
            const swiperBig = new Swiper(sliderRewiew, {
                slidesPerView: 1,
                parallax: true,
                spaceBetween: 78,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
        if (sliderClient) {
            const swiperBig = new Swiper(sliderClient, {
                slidesPerView: 4,
                loop: true,
                spaceBetween: 15,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    670: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }
            });
        }
        if (sliderCaseSinglePage.length > 0) {
            for (let index = 0; index < sliderCaseSinglePage.length; index++) {
                const element = sliderCaseSinglePage[index];

                const swiperCase = new Swiper(element, {
                    slidesPerView: 1,
                    loop: true,
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    spaceBetween: 45,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                });
            }
        }
    }
    slider();

    //==========================================================================


    // Language

    function languageClick() {
        const languageHead = document.querySelector('.top-header__language-header');
        const languageHeadText = document.querySelector('.top-header__language-text');
        const languageBody = document.querySelector('.top-header__language-body');
        const languageItems = document.querySelectorAll('.top-header__language-body a');
        const body = document.body;

        const div = document.createElement('div');
        div.classList.add('div-click');

        if (languageHead) {
            languageHead.addEventListener('click', () => {
                languageBody.classList.toggle('_active');
                if (languageBody.classList.contains('_active')) {
                    body.appendChild(div);
                } else {
                    div.remove();
                }
            });

            div.addEventListener('click', () => {
                languageBody.classList.remove('_active');
                div.remove();
            });

            for (let index = 0; index < languageItems.length; index++) {
                const element = languageItems[index];
                if (element.closest('.current-lang')) {
                    languageHeadText.textContent = element.textContent;
                }
                // element.addEventListener('click', () => {
                //     languageBody.classList.remove('_active');
                //     languageHeadText.textContent = element.textContent;
                //     div.remove();
                // });
            }
        }
    }

    languageClick();

    //=========================================================================


    // Header CallBack

    function headerCallback(selectorBtn) {
        const btn = document.querySelector(selectorBtn);
        const poppup = document.querySelector('.poppup-bottom-header');
        const btnClose = document.querySelector('.poppup-bottom-header__close');
        const body = document.body;

        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                poppup.classList.add('_active');
                body.classList.add('_active');
            });
            btnClose.addEventListener('click', () => {
                poppup.classList.remove('_active');
                body.classList.remove('_active');
            });
        }
    }
    headerCallback('.bottom-header__callback');
    headerCallback('.subscribe__btns-callback');

    //============================================================================




    //Header Top Menu

    function topMenu() {
        const topMenu = document.querySelector('.top-header');
        const topMenuWrapper = document.querySelector('.top-header__wrapper');

        const buttonTopMenu = document.createElement('div');
        buttonTopMenu.classList.add('topHeaderBtn');

        if (document.documentElement.clientWidth <= 914) {
            topMenuWrapper.classList.add('_fixed');
        } else {
            topMenuWrapper.classList.remove('_fixed');
        }

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth <= 914) {
                topMenuWrapper.classList.add('_fixed');
            } else {
                topMenuWrapper.classList.remove('_fixed');
            }
        });

    }

    topMenu();


    //=====================================================================================



    // Top Btn Click

    function topClickBtn() {
        const topBtn = document.querySelector('.top-header__mobile-btn');
        const header = document.querySelector('.header');
        const topClose = document.querySelector('.top-header__mobile-close');
        const topMenuWrapper = document.querySelector('.top-header__wrapper');
        const body = document.body;

        if (topBtn) {
            const divOver = document.createElement('div');
            divOver.classList.add('overBody');

            topBtn.addEventListener('click', () => {
                header.appendChild(divOver);

                body.classList.add('_active');
                topMenuWrapper.classList.add('_active');
            });

            topClose.addEventListener('click', () => {
                divOver.remove();
                body.classList.remove('_active');
                topMenuWrapper.classList.remove('_active');
            });
        }
    }
    topClickBtn();

    //=====================================================================================


    // Burger

    function burgerClick() {
        const burger = document.querySelector('.burger-header');
        const header = document.querySelector('.header');
        const menu = document.querySelector('.bottom-header__nav');
        const logo = document.querySelector('.bottom-header__logo');
        const body = document.body;

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');


        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                burger.classList.toggle('animate__animated');
                burger.classList.toggle('animate__rubberBand');
                body.classList.toggle('_active');
                menuMobile.classList.toggle('_active');

                if (document.documentElement.clientWidth <= 768) {
                    header.classList.toggle('_active');
                }
            });

            if (document.documentElement.clientWidth <= 768) {
                burger.insertAdjacentElement('afterend', menuMobile);
                menuMobile.insertAdjacentElement('beforeend', menu);
            }

            window.addEventListener('resize', () => {
                if (document.documentElement.clientWidth <= 768) {
                    burger.insertAdjacentElement('afterend', menuMobile);
                    menuMobile.insertAdjacentElement('beforeend', menu);
                } else {
                    logo.insertAdjacentElement('afterend', menu);
                    menuMobile.remove();
                }
            });
        }
    }

    burgerClick();

    //=======================================================================================



    // Poppup Video

    function openPoppup(selectopModal, selectorClose, selectorOpen) {
        const modal = document.querySelector(selectopModal);
        const closeBtn = document.querySelector(selectorClose);
        const openBtn = document.querySelector(selectorOpen);
        const body = document.body;

        const content = document.querySelector('.video-main__poppup-content');
        const iframe = document.querySelector('.video-main__poppup-content iframe');

        if (iframe) {
            const videoHTML = iframe;
            iframe.remove();

            const src = iframe.src;
            iframe.src = 'fff';
            openBtn.addEventListener('click', (e) => {
                e.preventDefault();
                content.appendChild(videoHTML);
                iframe.src = src;
            });
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                iframe.src = 'gggg';
                iframe.remove();
            });
        }

        if (modal) {
            openBtn.addEventListener('click', (e) => {
                e.preventDefault();
                body.classList.add('_active');
                modal.classList.add('_active');
            });

            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                body.classList.remove('_active');
                modal.classList.remove('_active');
            });
        }
    }
    openPoppup('.video-main__poppup', '.video-main__poppup-close', '.video-main__video-play');

    //===================================================================================



    //Scroll window Animated


    function windowScroll(selectorElement) {
        const animatedItem = document.querySelectorAll(selectorElement);

        if (animatedItem.length > 0) {
            animatedItem.forEach((item, i) => {
                const windowHeight = document.documentElement.clientHeight;
                let number = windowHeight / 100 * 45;

                window.addEventListener('scroll', () => {
                    const elementPosition = item.offsetTop;

                    if (window.pageYOffset + number >= elementPosition) {
                        item.classList.add('_active');

                    }
                    // else {
                    //     if (window.pageYOffset + number < elementPosition) {
                    //         item.classList.remove('_active');
                    //     }
                    // }
                });
            });
        }
    }

    windowScroll('._animatedItem');

    //================================================================


    // Number Index

    function numberIndex(selectorItem, stop = false) {
        const numberItem = document.querySelectorAll(selectorItem);

        if (numberItem.length > 0) {
            if (stop === false) {
                for (let index = 0; index < numberItem.length; index++) {
                    const element = numberItem[index];
                    const dataNum = Number(element.dataset.number);
                    const dataNumProcent = Math.round(dataNum * 0.1);
                    let i = dataNumProcent;

                    let timer = setInterval(() => {
                        if (i <= dataNum) {
                            element.textContent = i++;
                        }
                        if (i === (dataNum + 1)) {
                            clearInterval(timer);
                        }
                    }, 0.1);
                }
            }
        }
    }

    function animatedNumbersIndex() {
        const realize = document.querySelector('.numbers-main');

        if (realize) {
            const elementPositionRealize = realize.offsetTop;
            const windowHeight = document.documentElement.clientHeight;
            let number = windowHeight / 100 * 75;

            window.addEventListener('scroll', () => {

                if (window.pageYOffset + number >= elementPositionRealize) {
                    if (!realize.classList.contains('_stop')) {
                        numberIndex('.numbers-main__number span');
                    }
                    realize.classList.add('_stop');
                } else {
                    realize.classList.remove('_stop');
                }
            });
        }
    }

    animatedNumbersIndex();

    //===============================================================================================================


    // Parallax Footer

    function parallaxFooter() {
        const footer = document.querySelector('.footer');
        const footerWrap = document.querySelector('.footer__wrap');

        if (footer) {
            if (document.documentElement.clientWidth >= 992) {


                window.addEventListener('scroll', () => {
                    const heightFooter = footerWrap.scrollHeight;
                    const windowHeight = document.documentElement.clientHeight;
                    footer.style.height = `${heightFooter}px`;

                    const positionF = footer.getBoundingClientRect().top;
                    const elementPosition = positionF + window.pageYOffset;

                    if (window.pageYOffset + windowHeight >= elementPosition) {
                        footerWrap.classList.add('_active');
                    } else {
                        footerWrap.classList.remove('_active');
                    }

                    if (window.pageYOffset >= elementPosition) {
                        footerWrap.classList.add('_scroll');
                    } else {
                        footerWrap.classList.remove('_scroll');
                    }
                });
            }
        }
    }

    parallaxFooter();

    //=========================================================================================================




    // Tab Case

    function removeActiveTab(tabs) {
        for (let index = 0; index < tabs.length; index++) {
            const element = tabs[index];
            element.classList.remove('_active');
        }
    }

    function itemsDataset(items, tabs) {
        for (let index = 0; index < items.length; index++) {
            const el = items[index];
            if (el.dataset.content === tabs.dataset.tab) {
                el.classList.add('_none');
                el.classList.remove('_active');
            } else {
                el.classList.remove('_none');
                el.classList.add('_active');
            }

            if (tabs.dataset.tab === 'Все') {
                el.classList.remove('_active');
                el.classList.add('_none');
            }
        }
    }

    function tabCase() {
        const tabs = document.querySelectorAll('.case-page__tab');
        const items = document.querySelectorAll('.content-case-page__items .case-main__item');

        if (tabs.length > 0) {

            tabs[0].classList.add('_active');

            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                element.classList.add('_none');
                element.classList.remove('_active');
            }
            for (let index = 0; index < tabs.length; index++) {
                const element = tabs[index];
                element.addEventListener('click', () => {
                    removeActiveTab(tabs);

                    element.classList.add('_active');

                    itemsDataset(items, element);
                });
            }
        }
    }
    tabCase();

    //======================================================================================================



    //Header Fixed

    function headerFixed() {
        let lastScroll = 0;
        const defaulScroll = 80;

        const header = document.querySelector('.header');

        const height = header.clientHeight;
        const nextElement = header.nextElementSibling;
        const childrenNextElement = nextElement.children;

        window.addEventListener('scroll', (e) => {
            if (document.documentElement.clientWidth >= 600) {
                if (window.pageYOffset > lastScroll && window.pageYOffset >= defaulScroll) {
                    header.classList.add('_fixed');
                    header.classList.remove('_swingOutX');
                    header.classList.add('_slideDown');
                    // childrenNextElement[0].style.marginTop = ``;
                    childrenNextElement[0].style.marginTop = `${height}px`;

                } else {

                    if (window.pageYOffset >= defaulScroll) {
                        header.classList.add('_fixed');
                        header.classList.remove('_slideDown');
                        header.classList.add('_swingOutX');
                        childrenNextElement[0].style.marginTop = `${height}px`;
                    } else {
                        header.classList.remove('_fixed');
                        header.classList.remove('_swingOutX');
                        childrenNextElement[0].style.marginTop = ``;
                    }
                }
                lastScroll = window.pageYOffset;
            }
        });

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth <= 600) {
                header.classList.remove('_fixed');
            }
        });
    }
    headerFixed();

    //====================================================================


    // Go Top

    function goTop() {
        const goTop = document.querySelector('.footer__go-top');
        const body = document.documentElement;

        if (goTop) {
            goTop.addEventListener('click', () => {
                const bodyPosition = body.getBoundingClientRect().top;
                window.scrollTo({
                    top: bodyPosition,
                    behavior: "smooth"
                });
            });
        }
    }
    goTop();


    //=====================================================================


    // Visible

    function map(selectorItem, selectorPrevElement) {
        const map = document.querySelector(selectorItem);
        const mapPrevEl = document.querySelector(selectorPrevElement);

        if (map) {
            const mapPos = mapPrevEl.offsetTop;

            window.addEventListener('scroll', () => {
                const windowHeight = document.documentElement.clientHeight;
                if (window.pageYOffset >= mapPos - windowHeight) {
                    map.classList.remove('_noActive');
                }
            });
        }
    }
    map('.client-main', '.rewiews-main');
    map('.case-main', '.numbers-main');

    //================================================================================================


});