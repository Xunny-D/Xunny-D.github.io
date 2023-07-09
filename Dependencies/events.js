// //Appear on scroll
const headTarget = document.querySelector(".headTarget");

const nameTarget = document.querySelector(".nameTarget");

//All pages initialized here
const homePage = document.querySelector("#Home");
//Hide porfolio, contacts, and bio page initially
const portfolioPage = document.querySelector("#Portfolio");
portfolioPage.classList.add("hidden");
const contactsPage = document.querySelector("#Contacts");
contactsPage.classList.add("hidden");
const bioPage = document.querySelector("#Biography");
bioPage.classList.add("hidden");

let options = {
    root: null,
    rootmargin: "2vh",
    threshold: 0.1
    };

function handleintersectMain(entries) {
    entries.map((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("animate-transitionToRight");
            //.classList.add("animate-fadeOut");
            //headTarget.classList.remove("animate-fadeIn");
        }
        else{
            entry.target.classList.remove("animate-transitionToRight");
            //headTarget.classList.remove("animate-fadeOut");
        }
    });
}

// function handleintersectHeader(entries) {
//     entries.map((entry) => {

//         if(entry.isIntersecting){
//             headTarget.classList.remove("opacity-40");
//             headTarget.classList.add("opacity-100");
//         }
//         else{
//             headTarget.classList.add("opacity-40");
//             headTarget.classList.remove("opacity-100");
//         }
//     });
// }

let observerMain = new IntersectionObserver(handleintersectMain, options);
// let observerHeader = new IntersectionObserver(handleintersectHeader);

// observerHeader.observe(nameTarget);

let scrollTargets = document.querySelectorAll(".scrollTarget");

scrollTargets.forEach((target) =>{
    // hide the element
    target.classList.add("opacity-0");
    //target.classList.add("max-h-0");
    // add the element to the watcher
    observerMain.observe(target);
    });

//Show pages based of nav bar click
const homeNav = document.querySelector("#homeNav");

homeNav.addEventListener("click", () => {
    homePage.classList.remove("hidden");
    portfolioPage.classList.add("hidden");
    contactsPage.classList.add("hidden");
    bioPage.classList.add("hidden");
});

const portfolioNav = document.querySelector("#portfolioNav");

portfolioNav.addEventListener("click", () => {
    portfolioPage.classList.remove("hidden");
    homePage.classList.add("hidden");
    contactsPage.classList.add("hidden");
    bioPage.classList.add("hidden");
});

const biographyNav = document.querySelector("#biographyNav");

biographyNav.addEventListener("click", () => {
    bioPage.classList.remove("hidden");
    contactsPage.classList.add("hidden");
    homePage.classList.add("hidden");
    portfolioPage.classList.add("hidden");
});

const contactsNav = document.querySelector("#contactsNav");

contactsNav.addEventListener("click", () => {
    contactsPage.classList.remove("hidden");
    bioPage.classList.add("hidden");
    homePage.classList.add("hidden");
    portfolioPage.classList.add("hidden");
});

//Expand picture when clicking on it


