/** scroll reveal effect **/
const sr = ScrollReveal({
    reset : false,  // 한번만 실행
}) 

sr.reveal('.landing-text-box', {
    duration : 1000,
    origin : 'right',
    distance : '80px',
});

sr.reveal('.meet-text-box', {
    duration : 1000,
    origin : 'bottom',
    distance : '40px',
});

sr.reveal('.meet-wrapper img, .feature', {
    duration : 1000,
    origin : 'bottom',
    distance : '40px',
    interval : 200,  // 0.2초 간격으로 차례로 효과 진행
});

/** swiper slider effect **/
setTimeout(() => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable : true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}, 300);
