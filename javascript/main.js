const profileBtn = document.querySelector("#profile-btn");
const profile = document.querySelector(".active-profile");
const angleD = document.querySelector(".fa-angle-down");

profileBtn.addEventListener("click", () => {
  profile.classList.toggle("on");
  angleD.classList.toggle("fa-angle-up");
});
