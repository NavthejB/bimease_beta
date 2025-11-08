

const heroImages = document.querySelectorAll('.hero-images');
const navBar = document.querySelector('.nav-bar');
const hero = document.getElementById('hero');
const coFoundersCard3 = document.getElementById('coFoundersCard3');
const featuredProjectCard = document.querySelectorAll(".featured-projects-card");
const projectsGrid = document.getElementById('projectsGrid');
const newHero = document.getElementById('newHero');
const navBarLinks = document.querySelectorAll('.nav-bar-links');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn');
const mobileMenuLinks = document.querySelectorAll('mobile-menu-links');
const hamburgerMenuStrip = document.querySelectorAll('.hamburger-menu-strip');


const projects = [
    {
        id : 1,
        name: "HiLITE OLYMPUS",
        containerName: "hilite-olympus",
        autodeskLink: "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci1wcm90ZWN0ZWQvdDE3NTQ3NTIzNjlfMDhmZTE2MGUtNDg2NS00ZGFlLWI5MGQtODM4OTlkYzM0NDhiLnJ2dA?sheetId=NmE1ZGU3YmEtZGViZi1hYTU1LTkxYWItZTkyZjZlMDdjMTlm",
        overiewDesc: "Rising above the ordinary, HiLITE Olympus is a masterpiece of refined living, offering an unparalleled residential experience in the heart of HiLITE City. Set across 8.64 acres of pristine greenery, this architectural marvel redefines grandeur and exclusivity, providing residents with a living space that is as expansive as it is exquisite. With 526 thoughtfully crafted apartments, ranging from 919 sq. ft. to 3150 sq. ft., Olympus is designed for those who seek sophisticated living with an uncompromised sense of space, privacy, and convenience.",
        imageLinks: [
            "images/Hilite/Hilite1.png",
            "images/Hilite/Hilite2.png"
        ]
    },
    {
        id : 2,
        name: "GALAXY ATMOSPHERE",
        containerName: "galaxy-atmosphere",
        autodeskLink: "https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci1wcm90ZWN0ZWQvdDE3NTQ3NTIzNjlfMDhmZTE2MGUtNDg2NS00ZGFlLWI5MGQtODM4OTlkYzM0NDhiLnJ2dA?sheetId=NmE1ZGU3YmEtZGViZi1hYTU1LTkxYWItZTkyZjZlMDdjMTlm",
        overiewDesc: "Rising above the ordinary, GALAXY ATMOSPHERE is a masterpiece of refined living, offering an unparalleled residential experience in the heart of HiLITE City. Set across 8.64 acres of pristine greenery, this architectural marvel redefines grandeur and exclusivity, providing residents with a living space that is as expansive as it is exquisite. With 526 thoughtfully crafted apartments, ranging from 919 sq. ft. to 3150 sq. ft., Olympus is designed for those who seek sophisticated living with an uncompromised sense of space, privacy, and convenience.",
        imageLinks: [
            "images/Hilite/Hilite1.png",
            "images/Hilite/Hilite2.png"
        ]
    }
]

// Get the full path of the current page
let path = window.location.pathname;

// Extract only the file name (last part of the path)
let page = path.split("/").pop();

let mobileMenuFlag = 0;

function mobileMenuButn(){
    if(mobileMenuFlag == 0){
        mobileMenu.classList.add('mobile-menu-open');
        hamburgerMenuBtn.classList.add('hamburger-menu-open');
        mobileMenuFlag = 1;
    }else{
        mobileMenu.classList.remove('mobile-menu-open');
        hamburgerMenuBtn.classList.remove('hamburger-menu-open');
        mobileMenuFlag = 0;
    }
}
function mobileMenuCloseByLink() {
    mobileMenu.classList.remove('mobile-menu-open');
    hamburgerMenuBtn.classList.remove('hamburger-menu-open');
    mobileMenuFlag = 0;
}

const heroBtns = document.querySelectorAll(".new_hero_left_inner_button");
const firstHeroBtnWidth = heroBtns[0].offsetWidth;
heroBtns[1].style.width = `${firstHeroBtnWidth}px`;



featuredProjectCard.forEach((val) => {
    val.addEventListener("click", (event) => {
        console.log('anything');
    })
})


// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProperties(projects);
    setupEventListeners();
});


function displayProperties(propertiesToShow) {
    projectsGrid.innerHTML = '';
    
    if (propertiesToShow.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: #666;">No projetcs found</p>';
        return;
    }
    
    propertiesToShow.forEach(property => {
        const propertyCard = createPropertyCard(property);
        projectsGrid.appendChild(propertyCard);
    });
}

function createPropertyCard(property) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'featured-projects-cards col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12';

    const card = document.createElement('a');
    card.className = `featured-projects-card ${property.containerName}`;
    card.href = `project.html?id=${property.id}`;
    
    card.innerHTML = `
        <h2>${property.name}</h2>
    `;

    cardContainer.appendChild(card);
    
    return cardContainer;
}


window.addEventListener("scroll", () => {
    const newHeroRect = newHero.getBoundingClientRect();
    if(newHeroRect.bottom<40){
        navBarLinks.forEach(link => {
            link.classList.add("nav-bar-link-white");
        });
        hamburgerMenuStrip.forEach(strip => {
            strip.classList.add("hamburger-menu-strip-white");
        });
    }else{
        navBarLinks.forEach(link => {
            link.classList.remove("nav-bar-link-white");
        });
        hamburgerMenuStrip.forEach(strip => {
            strip.classList.remove("hamburger-menu-strip-white");
        });
    }


    if (window.scrollY > 0) {
        navBar.classList.add("nav-bar-scrolled");
    } else {
        navBar.classList.remove("nav-bar-scrolled");
    }
});


const length = heroImages.length;
let flag = 0;

function startHeroSlideShow() {
        if(flag === (length - 1)){
            flag = 0;
            heroImages[length - 1].classList.remove('visible');
            heroImages[flag].classList.add('visible');
        }
        else {
            flag++
            heroImages[flag - 1].classList.remove('visible');
            heroImages[flag].classList.add('visible');
        }
    setTimeout(startHeroSlideShow, 5000)
}
if(page == "index.html"){
    startHeroSlideShow();       
}
//edit
startHeroSlideShow();


// Export properties data for use in other pages

window.propertiesData = projects;
