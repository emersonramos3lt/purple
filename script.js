window.sr = ScrollReveal ({reset: true});

sr.reveal('p, div', {duration: 1500});

const elements = document.querySelectorAll('main')
const options = { // Usado para com que a animação não aconteça de forma automatica, mas apenas quando a pessoa rolar a pagina para baixo
    root: null,
    rootMargin: '0px',
    threshold: .5 // Que parte a animação acontece
}
const callbacks = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
    observer.observe(element);
});