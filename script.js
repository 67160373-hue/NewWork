let currentStep = 0;

const steps = document.querySelectorAll(".step");

function showJourney(){

document.getElementById("popup").style.display="block";

steps[currentStep].classList.add("active");

}

function nextStep(){

steps[currentStep].classList.remove("active");

currentStep++;

if(currentStep<steps.length){

steps[currentStep].classList.add("active");

}

}

function closeJourney(){

document.getElementById("popup").style.display="none";

steps.forEach(step=>step.classList.remove("active"));

currentStep=0;

}