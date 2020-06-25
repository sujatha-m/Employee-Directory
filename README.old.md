# Employee-Directory
The Employee Directory application UI into components, manage component state, and respond to user events.


## Discription
Primary goal of app was to use React for the first time. The app takes in a set of random employees from the API Random User Generator (randomuser.me). It stores the random employees in context. The employees are mapped over and displayed in a table format. The user is able to sort the employees by first name or age by clicking on the column name. The user is also able to search by the users first name with the search input.

This project was bootstrapped with Create React App.
This app utilizes an API to populate random users and then create a directory. Other users on the app can search for employees by "name" and also organize each field (Name, Email, DOB) in ascending or descending order.

## features
The WebApp complies to following features. These are as follows -

View all employees and filter them based on contact details
update details of individual employees
Add employee to the platform
Real time notification that hold for 3 sec to notify any network failure or some action success. These notifications hide on click, and their timer is paused on hovering over them.

### Go to git directory and clone repo
$ npm install (to install all dependecies)
$ npm run start or npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.