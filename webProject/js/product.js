const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam)
fetch(`https://api.punkapi.com/v2/beers/${myParam}`) // 1
        .then((response) => {
            if (response.status !== 200) {  //  2
                console.error(`status: ${reponse.status}`);
                return;
            }
            response.json() // 3
            .then(data => populateElements(data))
        }).catch((err)=> console.error(`${err}`)); 

function populateElements(data){
    let beerImageElement = document.querySelector("#beer-img");
    beerImageElement.setAttribute("src", data[0].image_url);
    beerImageElement.setAttribute("style", "width: 150px; margin: auto;");
    let beerNameElement = document.querySelector("#beer-name");
    beerNameElement.textContent = data[0].name;
    let beerTaglineElement = document.querySelector("#beer-tagline");
    beerTaglineElement.textContent = data[0].tagline;
    let beerDateElement = document.querySelector("#beer-date");
    beerDateElement.textContent = data[0].first_brewed;
    let beerAbvElement = document.querySelector("#beer-abv");
    beerAbvElement.textContent = "ABV: " + data[0].abv;
    let beerDescriptionElement = document.querySelector("#beer-description");
    console.log(beerDescriptionElement);
    beerDescriptionElement.textContent =  "Description: " + data[0].description;
    let beerFoodPairingElement = document.querySelector("#beer-foodpairings");
    beerFoodPairingElement.textContent = "Try it with: " + data[0].food_pairing;
}