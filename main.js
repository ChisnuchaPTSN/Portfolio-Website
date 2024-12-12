let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add
        ('active');
      });
    };
  });
};

window.addEventListener('scroll', () => {

  const firstElements = document.querySelectorAll('.skill-head, .education-head, .projects-head, .contact-head');
  firstElements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      element.classList.add('show-animation');
    }
  });

  const secondElements = document.querySelectorAll('.skill-divider, .education-divider, .projects-divider, .contact-divider');
  secondElements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      element.classList.add('show-animation2');
    }
  });

  const thirdElements = document.querySelectorAll('.skill-tables, .education-rows, .education-rows2, .projects-items, .contact-box');
  thirdElements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      element.classList.add('show-animation3');
    }
  });
});

let swiperCards = new Swiper('.card-content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        470: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    },
  });