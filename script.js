

searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){

        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}




var swiper = new Swiper(".books-slider", {
    loop:true, //nables an infinite loop
    centeredSlides:true,//provides a visual effect,when there are multiple slides visible at once.
    autoplay: {
      delay: 9500,//specific time between each slide
      disableOnInteraction: false //ensures that autoplay continues even if the user interacts with the slider.
    },
   breakpoints: { //breakpoint defines responsive behaviour based on screen width
     0: {
       slidesPerView: 1,//For screens with a width less than or equal to 768 pixels
     },
     768: {
       slidesPerView: 2,//For screens between 768 and 1024 pixels wide
     },
     1024: {
       slidesPerView: 3,//For screens wider than 1024 pixel
     },
   },
 });

 
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,//the gap between slides is set to 10 pixel
    loop:true,//When the last slide is reached it  transitions back to the first slide.
    centeredSlides:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false
    },
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     450: {
        slidesPerView: 2,
      },
     768: {
       slidesPerView: 3,
     },
     1024: {
       slidesPerView: 5,
     },
   },
 });

 var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10, //the gap between slides is set to 10 pixel
    loop:true,//When the last slide is reached it  transitions back to the first slide.
    centeredSlides:true,
    autoplay: {
      delay: 9500,// time (in milliseconds) between each slide transition
      disableOnInteraction: false
    },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });
 var swiper = new Swiper(".review-slider", {
  spaceBetween: 10,
  grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false
    },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });



