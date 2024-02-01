const hamburger = () => {
    const hamburger = document.querySelector('.hamburger'),
    hamburgerItem = hamburger.querySelectorAll('.hamburger__item'),
    menu = document.querySelector('.menu-mobile'),
    menuItems = document.querySelectorAll('.menu__link'),
    wrapper = document.querySelector('.menu__wrapper'),
    classes = {
        menu: 'menu-mobile_active',
        wrap: 'menu__wrapper_active',
        hide: 'hide',
        left: 'hamburger__item_left',
        right: 'hamburger__item_right'
    };

    function changeClasses(obj, action) {
    
    }
    menuItems.forEach(i => {
        i.addEventListener('click', (e) => {
            menu.classList.remove('menu-mobile_active');
            wrapper.classList.remove('menu__wrapper_active');
            hamburgerItem[1].classList.remove('hide');
            hamburgerItem[0].classList.remove('hamburger__item_left');
            hamburgerItem[2].classList.remove('hamburger__item_right');
        });
    });
    hamburger.addEventListener('click', (e) => {
        if (menu.classList.contains('menu-mobile_active')) {
            menu.classList.remove('menu-mobile_active');
            wrapper.classList.remove('menu__wrapper_active');
            hamburgerItem[1].classList.remove('hide');
            hamburgerItem[0].classList.remove('hamburger__item_left');
            hamburgerItem[2].classList.remove('hamburger__item_right');
           
        } else {
            menu.classList.add('menu-mobile_active');
            wrapper.classList.add('menu__wrapper_active');
            hamburgerItem[1].classList.add('hide');
            hamburgerItem[0].classList.add('hamburger__item_left');
            hamburgerItem[2].classList.add('hamburger__item_right');
        }
    });
    wrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu__wrapper_active')) {
            menu.classList.remove('menu-mobile_active');
            wrapper.classList.remove('menu__wrapper_active');
            hamburgerItem[1].classList.remove('hide');
            hamburgerItem[0].classList.remove('hamburger__item_left');
            hamburgerItem[2].classList.remove('hamburger__item_right');
        }
    });

};

export default hamburger;