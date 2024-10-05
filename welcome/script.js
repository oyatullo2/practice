window.addEventListener('scroll', function() {
    var section = document.querySelector('.section-main');
    var sectionPosition = section.getBoundingClientRect().top; 
    var screenPosition = window.innerHeight / 1.2; 

    if (sectionPosition < screenPosition) {
        section.classList.add('section-visible');
    }
});