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
----Post to an external API and show that it has saved/persisted----
After setting up the environment, head over to Postman and type the localhost url http://localhost:2000/api/ and press send. At this point, you can GET all of the entries located in the answers.json file. 

To POST, add this set of data to the body:
        {
        "id": 7,
        "name": "Jacob Andrew Weaver", 
        "email": "hellowesley@gmail.com",
        "date": "05/18/1988",
        "place": "Morehead, Kentucky",
        "time": "18:43
        }
The localhost url must be http://localhost:2000/. The data will repopulate in the answers.json file.

npm install axios

Where to look for project requirements:
