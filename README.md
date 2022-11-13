# First Chair Colorado

## Abstract

Are you looking to book a family ski trip but dont know where to start?  Are you a local to the Rocky Mountains looking for a quick 1 stop spot for all your ski resort info? First Chair Colorado has got you covered.  This was a solo project assigned by the [Turing School of Software and Design](https://turing.edu/) designed to challege us with the technologies that were used in Mod 3. These technologies include React, React Router, and Cypress. The project was completed in a 5 day push, requiring roughly 50 hours to complete in its current state. After coming up short while looking for an API that would suit this project, I decided to create my own with Express.js.  This allowed me to store data for 30 Colorado Ski resorts, as well as a list of 20+ top runs in the state that would be visible to a user when they visit the page 
 
Deployed UI link (https://first-chair.vercel.app/)
Deployed resort API link (https://first-chair-api.herokuapp.com/api/v1/resorts)
Deployed ski run API link (https://first-chair-api.herokuapp.com/api/v1/runs)

![Main page user flow](https://user-images.githubusercontent.com/101376200/201545765-3fd4c730-6b2e-4870-8761-843cd5ed5b07.gif)
![Single Resort Details](https://user-images.githubusercontent.com/101376200/201545841-46de97ae-be22-47c1-9944-6e4c14df7667.gif)
![Pass Filter](https://user-images.githubusercontent.com/101376200/201545897-02ca4995-5bb0-4867-91e2-d3ecfb2175cc.gif)
![Run ticklist](https://user-images.githubusercontent.com/101376200/201545930-bf880506-e93f-4e5a-bb27-63425b8d6813.gif)


## Technologies Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) |
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) |
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) |
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) |
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) |
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) |
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) |
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 

## Setup
Clone, that's right, _clone_ not fork. You will use this repo multiple times, but you can only fork a repository once. So here is what you need to do to clone the repo and still be able to push changes to your repo:

1. Clone down this repo. Since you don't want to name your project "webpack-starter-kit", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Remove the default remote: `git remote rm origin` (notice that `git remote -v` not gives you back nothing)
1. Create a new repo on GitHub with the name of `[what you want to name the repo]` to be consistent with naming
1. Copy the address that you would use to clone down this repo - something like `git@github.com:...`
1. Add this remote to your cloned down repo: `git remote add origin [address you copied in the previous step]` - do not include the brackets

Now try to commit something (just add a line in the README) and push it up to your new repo. If everything is setup correctly, you should see the changes on GitHub.

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with the Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## Project Specs
The project specs and rubric for First Chair Colorado can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)

 ## Challenges
- React Router
- Async JavaScript

## Wins
- Functioning GET/POST/DELETE methods through Express.js server
- Accessibility

## Future Extensions
- Add up to date weather API for each resorts current weather. All free API versions that I attempted to use had a limit of 2 locations to fetch data from at a single time
