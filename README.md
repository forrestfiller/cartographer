
# Google Maps SPA

This SPA is written in ```Node.js``` and ```React-Redux```.

The application provides users with the ability to interact with a map through a restrained user interface. 

Users can post comments (with an uploaded image) that are automatically tied to a geographic location depending on where they have dragged the map before posting.

The project is currently live, although under active development. There is a slight lag in uptime as the deployment is running on a **Heroku** instance which is asleep until the site is visited. Thereafter the speed of the SPA shouldn’t be an issue.

**Note**: *This README is incomplete and in progress as well*

It is located here: [**ff-googlemaps**](https://ff-googlemaps.herokuapp.com/)

[![Build Status](https://travis-ci.org/forrestfiller/googlemaps.svg?branch=master)](https://travis-ci.org/forrestfiller/googlemaps)

### Build Instructions

- *TODO*

### Features

- **Interactive map**: as users drag the map around, user posts appear and disappear based upon the latitude and longitude of the posts. For example, if there was a post made about something in lower Manhattan, as the map was dragged into that neighborhood, the post with associated image would be immediately rendered. Just as when the map is dragged away from an area, posts disappear.

- The project was initiated with the **the Express Generator** (with **hogan-middleware**).

- **Sign-up / Login**: new users can register, and returning users can authenticate.  Passwords are hashed (with **bcryptjs**) and stored securely in a **MongoDB** (with  **mongoose**) linked to the server (hosting through **Heroku**). Failed attempts to authenticate or errors including missing information (such as an a user leaving the password field empty and submitting) are caught and an alert is issued to the user.

- **Posts**: once authenticated or registered, users are able to enter text into an input field and attach an image (with **react-dropzone**) by clicking on a button. If someone tries to post when they haven’t yet authenticated or registered, an alert pops up to inform the user that they need to register or login before posting.

- This core of this project is the custom **REST API** written in **ES2015**. The backend architecture is in a modular format. **Promises** are used (with **bluebird**), and partially implemented **CRUD** operations (*update and delete are not currently implemented at this time*) are handled through controllers, which in turn are registered in an index file to be referenced in my routes. The project architecture is set up in this fashion in order to ensure that the project contains:

o succinct and readable code
o the API is well-insulated from project specific nomenclature/functionality

- The frontend of this project is written in **ES2016** using the **React** framework with **Redux**, using **webpack**, and **gulp** in conjunction with a local server until deployment.

- I export the frontend to my **index.hjs** via my frontend **app.js** as “Root”. Which is fed by the **React-Redux** project. It is responsive, fast, and smooth.

- Deployment optimizations with **gulp**




