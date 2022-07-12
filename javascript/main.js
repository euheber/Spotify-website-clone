const profileBtn = document.querySelector("#profile-btn");
const profile = document.querySelector(".active-profile");
const angleD = document.querySelector(".fa-angle-down");
const mobileBtn = document.querySelector('#mobile-btn')
const mobileMenu = document.querySelector('#active-mobile-menu')
const barIcon = document.querySelector('.fa-bars')

profileBtn.addEventListener("click", () => {
  profile.classList.toggle("on");
  angleD.classList.toggle("fa-angle-up");
});

mobileBtn.addEventListener('click', ()=> { 
  mobileMenu.classList.toggle('active')
  mobileBtn.classList.toggle('active')
  
  if(mobileMenu.classList.contains('active')){
    barIcon.style.color = 'var(--base)'
  } else{ 
    barIcon.style.color = 'var(--white)'
  }
})
