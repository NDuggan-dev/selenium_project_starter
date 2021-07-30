let searchButton = document.querySelector('#search-button');

let searchBar = document.querySelector("#search-bar")

let searchList = document.querySelector('#search-list');


let searchResults = () => {
    let searchResult = searchBar.value;
    console.log(searchResult);

}

searchButton.addEventListener('click', searchResults);


