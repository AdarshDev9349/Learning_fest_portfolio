
var typed = new Typed('#typed-text', {
    strings: ["I am a web developer","also interested in AI ML"],
    typeSpeed: 30,
    backSpeed: 50,
    loop: true,
    showCursor: false
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


gsap.registerPlugin(ScrollTrigger);


gsap.from(".about", {
  duration: 1.5,
  opacity: 0,
  y: -50,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about", 
    start: "top center", 
    end: "bottom center", 
    toggleActions: "restart none none none", 
  },
});
