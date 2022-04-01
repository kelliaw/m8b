 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Function for the 8-ball feature

  var answers = ["It is certain", 
  "It is decidedly so", 
  "Without a doubt", 
  "Yes - definitely",
  "You may rely on it", 
  "As I see it, yes", 
  "Most likely", 
  "Outlook good", 
  "Yes", "Signs point to yes",
  "Don't count on it", 
  "My reply is no",
  "My sources say no", 
  "Outlook not so good",
  "Very doubtful", 
  "Reply hazy, try again", 
  "Ask again later", 
  "Better not tell you now",
  "Cannot predict now", 
  "Concentrate and ask again", "I'm just a ball, you know?", "idk, follow ur heart :)"];

window.onload = function() {
var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var eightball = document.getElementById("eight-ball");
var question = document.getElementById("question");

eightball.addEventListener("click", function() {
if (question.value.length < 1) {
alert('What is your question?');
} else {
eight.innerText = "";
var num = Math.floor(Math.random() * Math.floor(answers.length));
answer.innerText = answers[num];
}
});
};


// Set the date to countdown
var countDownDate = new Date("May 10, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // When the count down finishes
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Mercury Retrograde is upon us, are you ready?";
  }
}, 1000);