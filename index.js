// Declaring variables 

const generalButton = document.getElementById("general");
const sportsButton = document.getElementById("sports");
const searchButton = document.getElementById("searchButton");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");



//Array 
let newsdataArray = [];

// Defining APIs 

const API_KEY = "77024c19bab14cb98a48bd564d0aa020";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" 
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="


generalButton.addEventListener("click",function(){
    fetchGeneralNews();
});

sportsButton.addEventListener("click",function(){
    fetchSportsNews();
});

searchButton.addEventListener("click",function(){
    fetchQueryNews();
});

const fetchGeneralNews = async () => {
    const response = await fetch (GENERAL_NEWS+API_KEY);
    newsdataArray = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsdataArray = myJson.articles;

    } else {
        //handle errors
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
        //handle errors
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