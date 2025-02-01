
let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
  if (navbar.classList.contains("active")) {
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-times"); // Change to cross icon
  } else {
    menuBtn.classList.remove("fa-times");
    menuBtn.classList.add("fa-bars"); // Change back to bars icon
  }
};

window.onscroll = () => {
  navbar.classList.remove("active");
  menuBtn.classList.remove("fa-times");
  menuBtn.classList.add("fa-bars"); // Reset to bars icon on scroll
};


// document.addEventListener('DOMContentLoaded', function() {
//   function updateCountdown() {
//       const now = new Date();
//       const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//       const timeLeft = tomorrow - now;

//       const hours = Math.floor(timeLeft / (1000 * 60 * 60));
//       const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//       document.getElementById('timer').textContent = 
//           `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   }

//   updateCountdown();
//   setInterval(updateCountdown, 1000);
// });


