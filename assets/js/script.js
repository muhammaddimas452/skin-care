let navbar = document.querySelector('.menu');

document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('menu-active');
}

const navscroll = document.querySelector(".navbar-box");

window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 0;
    navscroll.classList.toggle("scrolling-active", windowPosition);
})

var slideIndex = 1;
            showSlide(slideIndex);

        function nextslide(n){
            showSlide(slideIndex += n);
        }


        function showSlide(n) {
            var i;
            var slides = document.getElementsByClassName("text-slide");
            
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                
                slides[i].style.display = "none";
            }

            slides[slideIndex - 1].style.display = "block";

        }  