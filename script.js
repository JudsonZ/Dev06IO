//instantiation of variables from button and inputs
var submit = document.getElementById("submitButton")
var usrNameInput = document.getElementById("userInput");
var usrQuest = document.getElementById("usrQuestInput");
var outputBox = document.getElementById("outputArea");
//parsing to integer in order to calculate data
var shrubberies = document.getElementById("shrubberyCount");
//why cant i parse smh
var shrubberiesNum = Number(shrubberies.value);
//console.log("variables instantiated");


//add event listener to submit button
submit.addEventListener("click",myFunction);
console.log("event listener in place");

//function definition
function myFunction()
{ 
  outputBox.innerHTML = "Hello Noble Knight" + usrNameInput.value + "how is your quest: " + usrQuestInput.value + "We will take "+ shrubberies.value +" as tribute";
  
  if(shubberiesNum < 0)
    {
      outputBox.innerHTML ="NI! Return with a shrubbery or dont return at all";
    }
}