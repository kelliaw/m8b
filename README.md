# m8b

Hi everyone, and thank you for checking out my Magic 8 Ball project. The goal of my project was to create a magic 8 ball that could come up with a randomly selected answer. I hope to expand on this project as I gain new skills.

When you first check out my project, there is a responsive top nav with hamburger menu. As you scroll down, you will see the actual Magic 8 Ball. First, click on the 8 to receieve an alert prompting you to ask a question. When you have typed your question, click on the 8 again to reveal your answer. The answers are stored in an array and randomly retrieved. If you would like to try again, click on the button to reset the environment.

Moving further down the page, you will see a header to "Join Our Mailing List" and a form to be completed. The countdown is another feature of my project. Finally, the remaining part of the project is just for fun. I had 90's early internet vibe inspiration running through my head. 

I posted the data to an external API, which I've gone into further detail below.

How I set up the environment:

1. Open the project
2. Open terminal, npm init
3. npm install express nodemon -save
4. In package.json, "scripts", add "start": "nodemon index.js"
5. Open a new terminal, npm start. The node server should be running on http://localhost:2000

Project Requirements 

1. ----Post to an external API and show that it has saved/persisted---- 
After setting up the environment, head over to Postman (https://www.postman.com/postman/workspace/postman-public-workspace/request/create?requestId=c633d3ff-8ef8-45ab-b31c-77b653618967), type the localhost url http://localhost:2000/api/ and press send. At this point, you can GET all of the entries located in the answers.json file.

To POST, add this set of data to the body (body, raw, JSON): { "id": 7, "name": "Jacob Andrew Weaver", "email": "hellowesley@gmail.com", "date": "05/18/1988", "place": "Morehead, Kentucky", "time": "18:43 }. The data will populate into the answers.json array. All of the code that sets up the REST API is located in index.js.

2. ----Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application----
located in script.js:
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
  "Concentrate and ask again"];
  For the 8-ball piece of the project, click on the 8 and you will get an alert. This alert prompts you to ask your question. Once you have asked your question, press the 8 again to see your answer revealed. If you would like to try again, click on the button to reset the question bar and start the process over again. 

  These answers are stored in an array and when the function is called, it will randomly select one answer.

  3. ----Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)----
 In the "Join Our Mailing List" piece of the project, you will see a countdown section for the next Mercury Retrograde. I found this date on the internet (this is just for fun and I really don't know the validity of this date). This code can be found in script.js
