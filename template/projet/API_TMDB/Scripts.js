let search = "S" //variable pour stocker la recherche   
let page = "1" //variable pour stocker le n° de page
let postAPIKEY = "&language=fr-FR&query="+search+"&page="+page+"&include_adult=false" //le query pour la recherche
let filmURL = '/Affiche_Film.html?' //variable qui va stocker le lien de redirection du film
const apikey = "073268cfc6dbb0866ef067ce0bf49c10" // clef d'API
const intstruction = "https://api.themoviedb.org/3/search/movie?api_key=" //intrusction pour cibler l'API
const img = "https://image.tmdb.org/t/p/original/" //lien nécéssaire à l'insertion d'image

function affichageFilm(lesFilms){
    lesFilms.forEach(element => { 
        if(element.poster_path != null){
            document.getElementById("Container").innerHTML = document.getElementById("Container").innerHTML
        + "<div class='film'>" //onmouseout='hoverOff()' onmouseover='hoverOn()'
        + "<div class='title' style='height:20px'>" + element.title + "</div>"
        + `<div class='image'> <a href='Affiche_Film.html?${element.id}'> <img src="${img+element.poster_path}"></a> </div>`
        + "</div>"
        }
        else{console.log('no image')}
    });
}


const getFilm = async() =>{
    const Film = await fetch(intstruction+apikey+postAPIKEY);
    const FilmArr = await Film.json();
    affichageFilm(FilmArr.results)
}

function SearchFilm(){
    page = 1
    if(document.getElementById("searchBar").value != ""){search = document.getElementById("searchBar").value}
    else{search = "S"}
    postAPIKEY = "&language=fr-FR&query="+search+"&page="+page+"&include_adult=false"
    document.getElementById("Container").innerHTML = ""
    getFilm()
}

function previousPage(){
    if(page > 1){
        page = page -1
    postAPIKEY = "&language=fr-FR&query="+search+"&page="+page+"&include_adult=false"
    document.getElementById("Container").innerHTML = ""
    getFilm()
    }
}

function nextPage(){
    page = page +1
    postAPIKEY = "&language=fr-FR&query="+search+"&page="+page+"&include_adult=false"
    document.getElementById("Container").innerHTML = ""
    getFilm()
}

function resetPage(){
    search = "S"
    page = "1"
    postAPIKEY = "&language=fr-FR&query="+search+"&page="+page+"&include_adult=false"
    document.getElementById("Container").innerHTML = ""
    document.getElementById("searchBar").value=""
    getFilm()
}

function afficheFilm(){
    let search = window.location.search.substr(1)
    getHomePage(search)
}

const getHomePage = async(id) =>{
    const affiche = await fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=073268cfc6dbb0866ef067ce0bf49c10");
    const afficheJson = await affiche.json();
    if(afficheJson.homepage){ // redirection vers une homepage (s'il elle existe)
        window.location.replace(afficheJson.homepage);
    }
    else{ // redirection vers une page contenant les infos du film 


       /*  let TradURL = encodeURIComponent(afficheJson.overview)
        let langues = '&target=fr&source=en'
        const data = "q="+TradURL+langues;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                const JSONTranslate = JSON.parse(this.responseText);
                console.log(JSONTranslate.data.translations[0].translatedText)
            }
        });

        xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        //xhr.setRequestHeader("Accept-Encoding", "application/gzip");
        xhr.setRequestHeader("X-RapidAPI-Key", "f513792b3dmshc915a76fe715275p16d658jsn1eee11c2917b");
        xhr.setRequestHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");

        xhr.send(data); */
    
    
        document.getElementById("affiche").innerHTML = `<div class='image'><img src="${img+afficheJson.backdrop_path}" : ' ${afficheJson.tagline} '></div>`
        + "<div class='title'>" + afficheJson.title + "</div>"
        + "<p class='date'> Date de sortie : " + afficheJson.release_date + "</div>"
        + "<p class='note'> Note : " + afficheJson.vote_average + "/10 parmis "+afficheJson.vote_count+" votants</div>"
        + "<p id='description' class='description'> Description : <br> " 
        + afficheJson.overview /*JSONTranslate.data.translations[0].translatedText*/ + "</div>"

    }
}

    


/*


*/