const navBio = document.getElementById('navBio');
const aElements = document.querySelectorAll('a');

console.log(aElements);

const biographyRedirect = () => {

    //console.log(navBio);
    navBio.href = "http://127.0.0.1:3000/PortfolioPages/biography.html";

};


navBio.addEventListener("click", biographyRedirect);



