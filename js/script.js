var indicator = document.querySelector('#indicator');
var myCarousel = document.getElementById('carouselDemo1');

myCarousel.addEventListener('slide.bs.carousel', function (val) {
    // var str1 = "transform: translateX(" + (80 - val.to*5.31) + "vw);";
    // indicator.setAttribute("style", str1);
    indicator.animate([
        {
            transform: "translateX(" + (80 - val.from*5.31) + "vw)"
        },
        {
            transform: "translateX(" + (80 - val.to*5.31) + "vw)"
        }
    ], {
        duration: 500,
        fill: "forwards",
        easing: "ease-in-out"
    })
});


var navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var href = link.getAttribute('href');
        var element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});