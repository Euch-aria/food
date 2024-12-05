const menuBtn = document.querySelector("#menuIcon");
const navBar = document.querySelector("#navBar");
const closeBtn = document.querySelector("#closeIcon")

menuBtn.addEventListener("click", menuBtnFunc);
closeBtn.addEventListener("click", closeIconFunc)

function menuBtnFunc() {
  navBar.style.transition = " all .8s ease-in-out";
  navBar.style.top = 0;
}

function closeIconFunc() {
    navBar.style.top = "-500px";
}

// preloader

window.addEventListener('load', function () {
   
    const preloader = document.getElementById('preloader');
    
  
    preloader.style.transition = 'opacity 7s ease';
    preloader.style.opacity = '0';

   
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 7000); 
  });
