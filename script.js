




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // Fix typo: secoffsetTop -> sec.offsetTop
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active'); // Fix typo: links -> link
        document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
      });
    }
  });

  
  /*======= sticky navbar ====*/

let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);
};


ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img img, .about-img img, .skills-container, .project-box, .testimonial-wrapper, contact form', { origin: 'bottom' });




