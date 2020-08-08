# Capstone_Project

## Concept

A working full-stack CRUD application using Ruby on Rails with React and Redux, allowing ALTTPR players to manage their items during game. ALTTPR is a hacked version of Legend of Zelda, A Link to the Past in which all of the items of the game are randomly shuffled around, forcing the player to progress through the game by finding required items in order to gain access to more items and beat the game, similar to a puzzle.  This tracker is meant to be used along side the game to keep track of what items a player has found and to provide a place to write notes about item locations or in other randomizer modes, to write about entrance locations/pairings. 

## The App
[Go To The Project](https://infallible-saha-79caf7.netlify.app/)

[Server was deployed on Netlify ](https://github.com/mendokuse3/capstone-server-netlify)
[Client was deployed on Heroku](https://github.com/mendokuse3/capstone-client-netlify)


## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- JSX
- Netlify
- Heroku
- React Context API

## Wireframe

<img src="https://github.com/mendokuse3/Capstone_Project/blob/master/Wireframe.png" alt text="wire frame">

## User Stories
As a User, I want to be able to: 
- keep track of items found in game by clicking on items
- write notes about item locations and other information in little cards
- edit and delete notes as desired/needed


## Approach
I split the app into a few different parts, setting some time to gather and organize images and data for the tracker portion of the app, as well as organizing the data for it.  After setting up the backend and a basic front end, I set aside about a week to try to learn redux and incorporate it into my app. The final few days were left to work on styling and adding any finishing touches, as well as stretch goals, which I did not have time to do.


## Challenges
- Learning redux ended up being far more difficult and taking far longer than I originally expected. I had expected to take about three days to learn it enough to add to my app, but after five or six days of coming to a complete stand still, I had to abort and spent another day learning the react context api before applying it. As a result, I did not have time to do any stretch goals.
- I had a bug with my dungeons in which every reset would increment the dungeon counter by one more than what it started as, but only after the dungeon had been clicked. I solved this by hardcoding in the counters to be 0.


## Things to revisit/Unsolved problems
- I would love to go back and add in user authentication. As it stands now, only one person could use the app at a time in theory, as every note that is submited by a user would render in the same place.  Having users sign in and having the notes tied to a user would allow for multiple different users use the app at the same time without having to discern their note from anothers.


