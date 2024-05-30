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


// axios({
//     method:'get',
//     url: 'http://121.36.244.57:5244/d/AliDrive/SmartCampus/Walkthrough.mp4?sign=IjtfLX3nM2d-WtZQD4YMKijurhtAKGWPAYD5J9l1uvA=:0',
//     responseType: 'blob',
// }).then(res=>{
//     console.log(res);
//     console.log("Fired!!");
//     let blob = new Blob([res.data],{type:res.data.type});
//     let url = URL.createObjectURL(blob);
//     document.querySelector('video').src = url;
// }).catch(function(err){
//     console.log("Failed");
// });

