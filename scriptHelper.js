// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.querySelector("#missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
   if (!testInput||testInput=="")
    return "Empty";
   else if(isNaN(testInput))
    return "Not a Number";
    else{
        return "Is a Number";
    } 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot)== "Empty"||(validateInput(copilot)=="Empty")||(validateInput(fuelLevel)=="Empty")||(validateInput(cargoLevel)=="Empty")){
    alert("All Fields Are Required");
    return false;
   }
   else if (validateInput(fuelLevel)!="Is a Number"||(validateInput(cargoLevel)!="Is a Number") || (validateInput(pilot) != "Not a Number") || (validateInput(copilot) != "Not a Number")) {
    alert("Make Sure to enter valid information in each field!")
    return false;
   }
   return true;
}

async function myFetch() {
    let planetsReturned;

    await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
        planetsReturned = response.json();
    });
            
    return planetsReturned;
}

function pickPlanet(planets) {
    // rand * max + min: 0-5 rand * 5 + 0
    const rand = Math.random();
    const index = Math.floor(rand * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
