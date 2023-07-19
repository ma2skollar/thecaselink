const mobileNav = document.querySelector(".mobile-nav");
const mobileHam = document.querySelector(".mobile-ham");
const html = document.querySelector("html");
const body = document.querySelector("body");
const mobileCancel = document.querySelector(".close-mobile-nav");

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
