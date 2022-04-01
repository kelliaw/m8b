# m8b

Hi everyone, and thank you for checking out my Magic 8 Ball project.

I worked through a lot of the video demos with my project, which I will note down below where and when they were utilized. The goal of my project was to create a magic 8 ball that could come up with a randomly selected answer, create a form that posts to the API, and have an area where you can get all subscribers. This was a fun little project that gave me quite a few headaches, and I hope to expand on this project as I gain new skills.

How I set up the environment:

1. Open the project
2. Open terminal, npm init
3. npm install express nodemon -save
4. In package.json, "scripts", add "start": "nodemon index.js"
5. Open a new terminal, npm start. The node server should be running on http://localhost:2000


Project Requirements 

1. ----Post to an external API and show that it has saved/persisted---- 
After setting up the environment, head over to Postman and type the localhost url http://localhost:2000/api/ and press send. At this point, you can GET all of the entries located in the answers.json file.

To POST, add this set of data to the body: { "id": 7, "name": "Jacob Andrew Weaver", "email": "hellowesley@gmail.com", "date": "05/18/1988", "place": "Morehead, Kentucky", "time": "18:43 }. The data will populate into the answers.json array. All of the code that sets up the REST API is located in index.js.

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
  For the 8-ball piece of the project, there is an area to type your question and click on the ball to see your answer. One of these responses from the array will randomly populate inside of the ball. Then, if you would like to try again, the reset button clears the question and allows you to ask another. This code can be found in script.js
  
  3. ----Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)----
 In the "Join Our Mailing List" piece of the project, you will see a countdown section for the next Mercury Retrograde. This code can be found in script.js
