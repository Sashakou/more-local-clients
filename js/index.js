import '../css/scss/main.scss';

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    const body = document.getElementsByTagName('body')[0];
    const js_btn_menu = document.getElementsByClassName("js-btn-menu")[0];

    js_btn_menu.addEventListener('click', function() {
        if (body.classList.contains('mobile_menu__active')) {
            body.classList.remove('mobile_menu__active');
        } else {
            body.classList.add('mobile_menu__active');
        }
    });

    const js_input = document.getElementById('js_input');
    const js_search_cover = document.getElementsByClassName('js-search-cover')[0];
    const js_collapse = document.getElementById('js-collapse');
    js_search_cover.addEventListener("click", (event) => {
        js_input.focus();
    });
    js_input.addEventListener("focus", (event) => {
        js_search_cover.classList.add('border-grey');
        if (js_collapse) {
            const bsCollapse = new bootstrap.Collapse(js_collapse);
            bsCollapse.show();
        }
    });
    js_input.addEventListener("blur", (event) => {
        js_search_cover.classList.remove('border-grey');
        if (js_collapse) {
            const bsCollapse = new bootstrap.Collapse(js_collapse);
            bsCollapse.hide();
        }
    });

    document.querySelectorAll('.select-dropdown').forEach(function (dropdownWrapper) {
        const dropdownBtn = dropdownWrapper.querySelector('.select-dropdown-btn');
        const dropdownList = dropdownWrapper.querySelector('.select-dropdown-list');
        const dropdownItems = dropdownList.querySelectorAll('.select-dropdown-list-item');
        const dropdownInput = dropdownWrapper.querySelector('.select-dropdown-input')

        dropdownBtn.addEventListener('click', function () {
            dropdownList.classList.toggle('select-dropdown-list-visible');
            this.classList.toggle('active');
        });

        dropdownItems.forEach(function(listItem) {
            listItem.addEventListener('click', function (e) {
                dropdownItems.forEach(function(el) {
                    el.classList.remove('select-dropdown-list-item-active');
                })
                e.target.classList.add('select-dropdown-list-item-active');
                dropdownBtn.innerHTML = this.innerHTML;
                dropdownInput.value = this.dataset.value;
                dropdownList.classList.remove('select-dropdown-list-visible');
            })
        })

        document.addEventListener('click', function (e) {
            if ( e.target !== dropdownBtn ){
                dropdownBtn.classList.remove('active');
                dropdownList.classList.remove('select-dropdown-list-visible');
            }
        })

        document.addEventListener('keydown', function (e) {
            if( e.key === 'Tab' || e.key === 'Escape' ) {
                dropdownBtn.classList.remove('active');
                dropdownList.classList.remove('select-dropdown-list-visible');
            }
        })
    })

    new Splide( '#comments-slider', {
        type   : 'loop',
        perPage: 3,
        gap: 15,
        perMove: 1,
        arrows: true,
        pagination: false,
        breakpoints: {
            991: {
                perPage: 1.2,
            },
        }
    } ).mount();

    new Splide( '#gift-slider', {
        type   : 'loop',
        perPage: 1,
        gap: 15,
        perMove: 1,
        arrows: true,
        pagination: true,
        breakpoints: {
            991: {
                perPage: 1.2,
                arrows: true,
                pagination: false,
            },
        }
    } ).mount();

    const mountSlider = (width) => {
        if(width <= 991) {
            new Splide( '#product-slider', {
                type   : 'loop',
                perPage: 3,
                gap: 15,
                perMove: 1,
                arrows: false,
                pagination: false,
                breakpoints: {
                    991: {
                        perPage: 1.2,
                    },
                }
            } ).mount();
            new Splide( '#product-slider1', {
                type   : 'loop',
                perPage: 3,
                gap: 15,
                perMove: 1,
                arrows: false,
                pagination: false,
                breakpoints: {
                    991: {
                        perPage: 1.2,
                    },
                }
            } ).mount();
        }else {
            new Splide( '#product-slider', {
                destroy: true
            } ).mount();
            new Splide( '#product-slider1', {
                destroy: true
            } ).mount();
        }
    }

    mountSlider( window.innerWidth );

    window.addEventListener( 'resize', function() {
        mountSlider( window.innerWidth );
    } );
});
