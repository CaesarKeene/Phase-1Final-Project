// Declaring variables 

const generalButton = document.getElementById("general");
const sportsButton = document.getElementById("sports");
const searchButton = document.getElementById("searchButton");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

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

});

searchButton.addEventListener("click",function(){

});