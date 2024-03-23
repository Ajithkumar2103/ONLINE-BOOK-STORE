// searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick =()=>{
//     searchForm.classList.toggle('active');
// }
window.onscroll = ()=>{
    searchForm.classList.remove('active');
}


let loginForm = document.querySelector('.login-form-container');
let btn = document.querySelector('#login')
let close = document.getElementById('close-login-btn')
btn.addEventListener('click', () => {
    loginForm.classList.add('active');
})
close.addEventListener('click', () => {
    loginForm.classList.remove('active');
})



window.console = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header  .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header  .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header  .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header  .header-2').classList.remove('active');
    }

    
}

// // Initialize Swiper
// var swiper = new Swiper(".reviews-slider",{
//     spaceBetween:10,
//     grabcursor:true,
//     loop:true,
//     centeredSlider:false,
//     autoplay:{
//         delay:9500,
//         disableOnInteraction:false,
//     },
//     breakpoints:{
//         0:{
//             slidesPreView:1,
//         },
//         768:{
//             slidesPreView:2,
//         },
//         1024:{
//             slidesPreView:3,
//         },
//     }
// });
// var swiper = new Swiper(".blogs-slider",{
//     spaceBetween:10,
//     grabcursor:true,
//     loop:true,
//     centeredSlider:true,
//     autoplay:{
//         delay:9500,
//         disableOnInteraction:false,
//     },
//     breakpoints:{
//         0:{
//             slidesPreView:1,
//         },
//         768:{
//             slidesPreView:2,
//         },
//         1024:{
//             slidesPreView:3,
//         },
//     }
// });
