console.log("Hello World")

const n = "Uttam Bohara"
const h1 = document.querySelector(".heading-primary")

h1.addEventListener("click", function () {
     h1.textContent = n;
     h1.style.backgroundColor = "red";
     h1.style.padding = "5rem"
})

const currDate = document.querySelector(".current-year")
const current = new Date().getFullYear()

currDate.textContent = current


// nav-mobile-btn
//  nav-open header

const mobileNav = document.querySelector(".nav-mobile-btn");
const header = document.querySelector(".header")

mobileNav.addEventListener("click", function () {
     header.classList.toggle("nav-open")
})


const sectionHero = document.querySelector(".section-hero")
const obs = new IntersectionObserver(function (entries) {
     const ent = entries[0]
     console.log(ent)

     if (ent.isIntersecting === false) {
          document.body.classList.add("sticky")
     }
     if (ent.isIntersecting !== false) {
          document.body.classList.remove("sticky")
     }
}, {
     root: null,
     threshold: 0,
     rootMargin: "80px"
})

obs.observe(sectionHero)


const allLinks = document.querySelectorAll("a:link")

allLinks.forEach(function(link){
     link.addEventListener("click", function(e){
          e.preventDefault()

          const href = link.getAttribute("href")
          console.log(href)

          if (href=== "#")
          window.scrollTo ({
               top: 0,
               behavior: "smooth"
          })

          if (href !== "#" && href.startsWith("#")) {
               const section = document.querySelector(href)
               section.scrollIntoView({behavior: "smooth"})
          }

     })
})