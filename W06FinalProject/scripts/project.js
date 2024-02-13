const amiiboElement = document.querySelector("#amiibos");
let amiiboList = [];

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

const filterBy = (amiibos) => {
    reset();
    let filter = document.querySelector("#amiibotype").value;
    amiibos.forEach(amiibo => {
        if (amiibo.character.includes(filter))
        {
            let newAmiiboList = amiibos.filter((amiibo) => amiibo.character.includes(filter));
            displayAmiibos(newAmiiboList);
            console.log("This test works")
        } else 
        {
            displayAmiibos(amiibos);
            console.log("This test does not work")
        }
    });
}

getAmiibos();

document.querySelector("#submit").addEventListener("click", filterBy(amiiboList.amiibo));
