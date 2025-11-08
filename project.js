// Get property ID from URL parameters
function getPropertyIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search)
  return Number.parseInt(urlParams.get("id"))
}


const navBar = document.querySelector('.nav-bar');
const projectContainer = document.getElementById("projectContainer");


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

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    const propertyId = getPropertyIdFromUrl()
    const property = projects.find((p) => p.id === propertyId)

    if (property) {
        displayPropertyDetails(property)
    } else {
        propertyDetails.innerHTML = "<p>Property not found.</p>"
    }
})


function displayPropertyDetails(property) {

    projectContainer.innerHTML = `
        <section class="project-hero ${property.containerName}">
            <a id="projectHero3DLink" href="${property.autodeskLink}" class="project-hero-3d-container">
                <img src="images/360-degree.png" alt="">
                Click to view the 3D model
            </a>
            <h1 id="projectHeroHeading">${property.name}</h1>
        </section>

        <section class="project-overview container">
            <h2>OverView</h2>
            <p>${property.overiewDesc}</p>
        </section>

        <section class="project-plan">
            <img src="${property.imageLinks[0]}" alt="project-plan">
            <img src="${property.imageLinks[1]}" alt="project-plan">
        </section>
    `
}