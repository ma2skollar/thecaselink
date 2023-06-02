const mobileNav = document.querySelector(".mobile-nav");
const mobileHam = document.querySelector(".mobile-ham");
const html = document.querySelector("html");
const mobileCancel = document.querySelector(".close-mobile-nav");

mobileHam.addEventListener("click", () => {
  mobileNav.classList.remove("mobile-nav-hidden");
  html.classList.add("overscroll-disable");
});

mobileCancel.addEventListener("click", () => {
  mobileNav.classList.add("mobile-nav-hidden");
  html.classList.remove("overscroll-disable");
});

let listItems = mobileNav.childNodes[3].children;

console.log(listItems[0].firstChild);
console.log(listItems.length);

for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].classList.contains("mobile-nav-hr")) continue;
  listItems[i].firstChild.addEventListener("click", () => {
    mobileNav.classList.add("mobile-nav-hidden");
    html.classList.remove("overscroll-disable");
  });
}
