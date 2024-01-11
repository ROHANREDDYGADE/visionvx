document.addEventListener("DOMContentLoaded", function() {
    // When the page is fully loaded, hide the preloader
    window.addEventListener('load', function() {
        // When the page is fully loaded, hide the preloader
        document.querySelector('.preloader').style.display = 'none';
      });
      
  });
  

const images = document.querySelectorAll('.img');
let num1=document.getElementById('home1');
let num2=document.getElementById('home2');
let num3=document.getElementById('home3');
let num4=document.getElementById('home4');
document.querySelector('.aa').addEventListener('mousemove', (event) => {
  images.forEach(img => {
    if (!img.classList.contains('aa')) {
      const mouseX = event.clientX / window.innerWidth ;
      const mouseY = event.clientY / window.innerHeight ;
      img.style.transition = 'transform 0.3s linear';
      num1.style.transform = `translate(${15 * mouseX}px, ${15 * mouseY}px)`;
      num2.style.transform = `translate(${20 * mouseY}px, ${10 * mouseX}px)`;
      num3.style.transform = `translate(${-10 * mouseY}px, ${10 * mouseX}px)`;
      num4.style.transform = `translate(${-15 * mouseY}px, ${10 * mouseX}px)`;
      
    //   img.style.transform = `translate(${20 * mouseX}px, ${20 * mouseY}px)`;
    }
  });
});

document.querySelector('.aa').addEventListener('mouseleave', () => {
  images.forEach(img => {
    img.style.transform = 'translate(0, 0)';
  });
});


$('.slide').slick({
  infinite: true,
  autoplay: true,
  
  slidesToShow: 1,
  slidesToScroll: 1
});
$('.slide2').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 400,
  slidesToShow: 5,
  slidesToScroll: 1
});

AOS.init();
