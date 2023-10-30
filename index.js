document.addEventListener("DOMContentLoaded", function () {

// Declaring variables 

const generalButton = document.getElementById("general");
const sportsButton = document.getElementById("sports");
const searchButton = document.getElementById("searchButton");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");



// Array that stores the news data 
let newsdataArray = [];

// Defining APIs 

const API_KEY = "77024c19bab14cb98a48bd564d0aa020";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" 
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};

// Event listeners for the specific buttons
generalButton.addEventListener("click",function(){
    newsType.innerHTML="<h4>General News</h4>";
    fetchGeneralNews();
});

sportsButton.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports</h4>";
    fetchSportsNews();
});

searchButton.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchHeadlines = async () => {
    const response = await fetch (HEADLINES_NEWS+API_KEY);
    newsdataArray = [];
    if(response.status >=200 && response.status < 300) {   // use of http status codes 
        const myJson = await response.json();
        newsdataArray = myJson.articles;

    } else {
        //handling of  errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch (GENERAL_NEWS+API_KEY);
    newsdataArray = [];
    if(response.status >=200 && response.status < 300) {   
        const myJson = await response.json();
        newsdataArray = myJson.articles;

    } else {
        //handling of  errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch (SPORTS_NEWS+API_KEY);
    newsdataArray = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson); 
        newsdataArray = myJson.articles;

    } else {
        //handle of errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchQueryNews = async () => {
    const response = await fetch(SEARCH_NEWS+newsQuery.value+"&apikey="+API_KEY);
    newsdataArray = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsdataArray = myJson.articles;
    } else {
        //handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

function displayNews () {

    newsdetails.innerHTML = "";

    if(newsdataArray.length == 0) {
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsdataArray.forEach(news => {

        let col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        let card = document.createElement('div');
        card.classname = "p-2";

        let image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        let cardBody = document.createElement('div');

        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title; 
        
    
        let description = document.createElement('p');
        description.className = "text-muted";
        description.innerHTML = news.description;

        let link = document.createElement('a');
        link.className = "btn btn-primary";
        link.setAttribute("target","_blank");
        link.href = news.url;
        link.innerHTML="Read More";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);

    });
 }

});