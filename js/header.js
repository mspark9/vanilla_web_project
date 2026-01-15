/** header change effect **/
const header = document.querySelector('#header');

const stickyHeader = () => {
    const scry = window.scrollY;
    
    if (scry > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', stickyHeader);


/** menu elements clone for mobile **/
const mobileMenus = document.querySelector('.mobile-menus');
const navs = document.querySelector('.nav-lists').cloneNode(true);
const info = document.querySelector('.info').cloneNode(true);

mobileMenus.appendChild(navs);
mobileMenus.appendChild(info);


/** mobile menu toggle **/
const mobileBtn = document.querySelector('.mobile-btn');
const menuHeight = mobileMenus.scrollHeight;

toggleMobileBtn = (e) => {
    const target = e.currentTarget;
    target.classList.toggle('active');

    if(target.classList.contains('active')) {
        target.classList.remove('not-active');
        mobileMenus.style.height = menuHeight + 'px';
    } else {
        target.classList.add('not-active');
        mobileMenus.style.height = 0;
    }
}

mobileBtn.addEventListener('click', toggleMobileBtn);