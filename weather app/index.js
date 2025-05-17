const { json } = require("stream/consumers");

const userTab = document.querySelector(" [data-userWeather]");
const serachTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantLocationcontainer = document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const loadingscreen =document.querySelector(".loading-container");
const userinfo =document.querySelector(".user-info-conatiner");


let currTab= userTab;
const API_KEY ="d1845658f92b31c64bd94f06f7188c9c";
currTab.classList.add("current-tab");


// switch tab functin 

function switchTab(clickedTab){
      if(clickedTab!=currTab){
        currTab.classList.remove("current-tab");
        currTab=clickedTab;
        currTab.classList.add("current-tab")

        if(searchForm.classList.contains("active")){
          userinfo.classList,remove("active")
          grantLocationcontainer.classList.remove("active")
          searchForm.classList.add("active");
        }
        else{
          //at anothrt tabb 
          searchForm.classList.remove("active");
          userContainer.classList.remove("active");
          ///know at our waether tab and diplay weather 
          getfromsessionstorage();
        }
      }
}

userTab.addEventListener("click",() =>{
    // pass clicked tab as input 
    switchTab(userTab);
});

serachTab.addEventListener("click",()=>{
    // pass clicked tab as input 
    switchTab(serachTab);
});

/// cordinates check func

function getfromsessionstorage(){
  const localCordinates = sessionStorage.getItem("user-cordinates")
  if(!localCordinates){
    // n cordinates 
    grantLocationcontainer.classList.add("active")

  }
  else{
    const cordinates= JSON.parse(localCordinates);
    fetchUserWeatherInfo(cordinates);

  }


}

async function fetchUserWeatherInfo(cordinates){
  let {lat,long}=cordinates;
  // make invisble 

  grantLocationcontainer.classList.remove("active");
  //make loader vissibe 
  loadingscreen.classList.add("active");
  // api call 
   try{
    const response =await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`

    );
    const data= await response.json();
    loadingscreen.classList.remove("active");
    userinfo.classList.add("active");
    renderweatherinfo();

   }
   catch (err){
    loadingscreen.classList.remove("active");


  }
}
function renderweatherinfo(){
  // first fetch elemants 
  const cityName = document.querySelector("[data-cityName]");
  const countryIcon =document.querySelector(["data-country-icon"]);
  const desc =document.querySelector(["data-weatherdesc"]);
  const weatherIcon = document.querySelector("[data-waethericon]");
  const temp =document.querySelector("[data-temperature]");
  const windspeed = document.querySelector("[data-windspeed]");
  const humidity =document.querySelector("[data-himidity]");
  const cloud= document.querySelector("[data-cloud]");


  // fetch values 

   
}
