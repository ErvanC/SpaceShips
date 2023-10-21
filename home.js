const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const counter = document.querySelectorAll('.counter');
let scrollStarted = false;
document.addEventListener('scroll', scrollpage)

function scrollPage() {
    const scrollPos = window.scrollY;
  
    if (scrollPos > 100 && !scrollStarted) {
      countUp();
      scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
      reset();
      scrollStarted = false;
    }
  }
  
function countUp() {
    counters.forEach((counter) => {
      counter.innerText = '0';
  
      const updateCounter = () => {
        // Get count target
        const target = +counter.getAttribute('data-target');
        // Get current counter value
        const c = +counter.innerText;
  
        // Create an increment
        const increment = target / 100;
  
        // If counter is less than target, add increment
        if (c < target) {
          // Round up and set counter value
          counter.innerText = `${Math.ceil(c + increment)}`;
  
          setTimeout(updateCounter, 75);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
  }

function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
  }