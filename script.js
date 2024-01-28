const searchInput = document.getElementById('search-input');

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`

}
