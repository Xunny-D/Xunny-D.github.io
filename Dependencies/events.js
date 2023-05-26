// //Appear on scroll
const numsteps = 20.0;

let scrollTargets;
let prevratio = 0.0;

// set things up
window.addEventListener(
  "load",
  () => {
    scrollTargets = document.querySelectorAll(".scrollTarget");

    createobserver();
 },
 false
);


function createobserver() {

    let options = {
    root: null,
    rootmargin: "0px",
    };

    let observer = new IntersectionObserver(handleintersect, options);

    // loop through each of the scroll target
    scrollTargets.forEach((target) =>{
    // hide the element
    //target.classList.add("h-0");
    // add the element to the watcher
    observer.observe(target);
    });
}

function handleintersect(entries) {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("expandVertical");

        }
        else{
            entry.target.classList.remove("expandVertical");
        }
    });
}


// //const projectOne = document.getElementById('projectOne');
