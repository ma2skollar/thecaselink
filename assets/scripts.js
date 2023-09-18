const mobileNav = document.querySelector(".mobile-nav");
const mobileHam = document.querySelector(".mobile-ham");
const html = document.querySelector("html");
const body = document.querySelector("body");
const mobileCancel = document.querySelector(".close-mobile-nav");
const scrollUpArrow = document.querySelector('.scroll-up-arrow-container');

let listItems = mobileNav.childNodes[3].children;


mobileHam.addEventListener("click", () => {
  mobileNav.classList.remove("mobile-nav-hidden");
  html.classList.add("overscroll-disable");
  body.classList.add("fix-body");
});

mobileCancel.addEventListener("click", () => {
  mobileNav.classList.add("mobile-nav-hidden");
  html.classList.remove("overscroll-disable");
  body.classList.remove("fix-body");
});

for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].classList.contains("mobile-nav-hr")) continue;
  listItems[i].firstChild.addEventListener("click", () => {
    mobileNav.classList.add("mobile-nav-hidden");
    html.classList.remove("overscroll-disable");
    body.classList.remove("fix-body");
  });
}

document.addEventListener('scroll', () => {
  const bodyRect = body.getBoundingClientRect()
  const scrollUpArrowRect = scrollUpArrow.getBoundingClientRect()
  const offset = scrollUpArrowRect.top - bodyRect.top;
  console.log(window.innerHeight * 1.1)
  console.log(bodyRect.top)
  console.log(scrollUpArrowRect.top)
  if (offset > (window.innerHeight * 1.1)) scrollUpArrow.classList.add('visible-scroll-up-arrow')
  else scrollUpArrow.classList.remove('visible-scroll-up-arrow')
});

scrollUpArrow.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});