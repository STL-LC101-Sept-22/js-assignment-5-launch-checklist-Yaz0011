// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   // console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const planet = pickPlanet(listedPlanets);
       console.log(planet);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })


   let form = document.querySelector("form");
//    let launchStatus = document.querySelector("#launchStatus");
   let faultyItems = document.querySelector("#faultyItems");
   let pilotStatus =document.querySelector("#pilotStatus");
   let copilotStatus= document.querySelector("#copilotStatus");
   let fuelStatus =document.querySelector("#fuelStatus");
   let cargoStatus = document.querySelector("#cargoStatus")

   // using getElementById() only when the id attribute is available
   let launchStatus = document.getElementById('launchStatus');
   
   form.addEventListener("submit", function(e){
    e.preventDefault();
    let pilot = document.querySelector("input[name = 'pilotName' ]").value;
    let copilot= document.querySelector("input[name = 'copilotName']").value;
    let fuelLevel = document.querySelector("input[name ='fuelLevel']").value;
    let cargoMass = document.querySelector("input[name = 'cargoMass']").value;
    let response = formSubmission(document, null, pilot, copilot, fuelLevel, cargoMass);
    if (response == true) {
        launchStatus.innerHTML = "Shuttle is ready for launch.";
        launchStatus.style.color = "green";
        if (fuelLevel < 10000) {
            fuelStatus.innerHTML= "Fuel Level Too LOW!";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
        }
        else {
            fuelStatus.innerHTML= "Fuel level high enough for launch";
        }
        if(cargoMass> 10000) {
            cargoStatus.innerHTML="Cargo Level too HIGH!";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
        }
        else{
            cargoStatus.innerHTML ="Cargo Mass low enough for launch"
        }
        pilotStatus.innerHTML=(`Pilot ${pilot} is ready for Launch!`);
        copilotStatus.innerHTML=(`Copilot ${copilot} is ready for Launch!`);
        faultyItems.style.visibility = "visible";
        

    }
   })
});