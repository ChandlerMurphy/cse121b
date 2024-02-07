/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.innerHTML = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("alt", temple.location);
        
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });    
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
};

/* reset Function */
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
}

/* filterTemples Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            let utahTempleList = temples.filter((temple) => temple.location.includes("Utah"));
            displayTemples(utahTempleList);
            break;
        case "notutah":
            let notUtahTempleList = temples.filter((temple) => temple.location.includes("Utah") == false);
            displayTemples(notUtahTempleList);
            break;
        case "older":
            let olderTempleList = temples.filter((temple) => temple.dedicated < "1950, 0, 1");
            displayTemples(olderTempleList);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {sortBy(templeList)});