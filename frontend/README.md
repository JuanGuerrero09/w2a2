# While we are away (FRONTEND)

## Current Status
---
![image](https://user-images.githubusercontent.com/77643820/226196861-bbfada80-4b11-48d7-b950-ed0e4df0b5d8.png)
![image](https://user-images.githubusercontent.com/77643820/226196871-4c3f0567-36f6-4a7a-989c-03d2423121b0.png)
![image](https://user-images.githubusercontent.com/77643820/226196894-d96b0287-68f2-4c98-a0ef-042b701cb89f.png)
---
![image](https://user-images.githubusercontent.com/77643820/226196946-e918ae11-2d9c-4f7d-9275-0391780fc92d.png)
![image](https://user-images.githubusercontent.com/77643820/226196658-b9a8a0d0-8630-4cd4-989d-41c87b07357a.png)
## Mock
![image](https://user-images.githubusercontent.com/77643820/226242634-f7fe66da-e76a-4516-b23a-b11528c758cb.png)
# But what is w2a2 (while we are away)? 
This is a full stack application created for long distance couples. In this folder we have the frontend files.
## Stack
- React (Typescript and Vite)
- Node js
- Express
- Mongo DB
(yes, MERN but backwards)
## Features
- Authentication in the frontend with the Login, Sign in and a Welcome Page, and in the backend managed with express-session
- CRUD with notes (and with countdowns, in progress)
## To add:
- The main feature of the app is add one partner and be able to share notes, in the backend the api with create notes and get notes (from author) is created, but it hasn't been created in the frontend yet
- The countdowns, I want that the couple is able to share how much time is left for certain dates (and how much time has passed since a date)
- Distance functionality: this one is simple, add a button to send the location to the app and calculate the distance between the couple
## Future to add:
This functionality is not the main, but is one that I would like to add in the future:
- Create draws to the partner, and have the posibility to download those from the browser 

## Frontend Dependencies
```
"dependencies": {
    "bootstrap": "^5.2.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.2",
    "react-countdown": "^2.3.5",
    "react-dom": "^18.2.0",
    "wouter": "^2.10.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react-swc": "^3.0.0",
    "typescript": "^4.9.3",
    "vite": "^4.1.0"
  }
```
