const amiiboElement = document.querySelector("#amiibos");
let amiiboList = [];
let newAmiiboList = [];

const displayAmiibos = async (amiibos) => {
    amiibos.forEach(amiibo => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.innerHTML = amiibo.character;
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", amiibo.image);
        imgElement.setAttribute("alt", amiibo.name);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        amiiboElement.appendChild(articleElement);
    });
};

const getAmiibos = async () => {
    const response = await fetch("https://www.amiiboapi.com/api/amiibo/");
    if (response.ok) {
        amiiboList = await response.json();
        displayAmiibos(amiiboList.amiibo);
    }
}

const reset = () => {
    document.querySelector("#amiibos").innerHTML = "";
}

const filterBy = async () => {
    reset();
    let filter = document.querySelector("#amiibotype").value;
    amiiboList.amiibo.forEach(amiibo => {
        if (amiibo.character.includes(filter))
        {
            newAmiiboList.push(amiibo);
        }
        displayAmiibos(newAmiiboList);
        newAmiiboList.length= 0;
    });
}

getAmiibos();

document.querySelector("#submit").addEventListener("click", filterBy);