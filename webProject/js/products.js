let i = 1;
let j = 1;
while(i <= 4){
    fetch(`https://api.punkapi.com/v2/beers/${j}`) // 1
        .then((response) => {
            if (response.status !== 200) {  //  2
                console.error(`status: ${reponse.status}`);
                j++;
                return;
            }
            response.json() // 3
            .then(data => populateElements(data))
        }).catch((err)=> console.error(`${err}`)); 
        i++; // 4
        j++;// 5
}

function populateElements(data){
    let productElements = document.querySelector("#products-element");

    let divColElement = document.createElement("div");
    divColElement.setAttribute("class", "col-md-3");
    divColElement.setAttribute("style", "padding-left: 40px;");
    productElements.appendChild(divColElement);

    let divCardElement = document.createElement("div");
    divCardElement.setAttribute("class", "card");
    divCardElement.setAttribute("style", "width: 18rem;");
    divColElement.appendChild(divCardElement);

    let imgElement = document.createElement("img");
    imgElement.setAttribute("class", "card-img-top");
    imgElement.setAttribute("style", "width: 75px; margin: auto;");
    imgElement.setAttribute("src", data[0].image_url);
    imgElement.setAttribute("alt", "Card image cap");
    divCardElement.appendChild(imgElement);

    let divCardBodyElement = document.createElement("div");
    divCardBodyElement.setAttribute("class", "card-body");
    divCardElement.appendChild(divCardBodyElement);

    let cardTitleElement = document.createElement("h5");
    cardTitleElement.setAttribute("class", "card-body");
    cardTitleElement.textContent = data[0].name + " - " + data[0].tagline;
    divCardBodyElement.appendChild(cardTitleElement);

    let cardTextElement = document.createElement("p");
    cardTextElement.setAttribute("class", "card-text");
    cardTextElement.textContent = data[0].description;
    divCardBodyElement.appendChild(cardTextElement);

    let cardButtonElement = document.createElement("a");
    cardButtonElement.setAttribute("href", `product.html?id=${data[0].id}`);
    cardButtonElement.setAttribute("class", `btn btn-primary`);
    cardButtonElement.textContent = "More Information";
    divCardBodyElement.appendChild(cardButtonElement);

}