 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

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