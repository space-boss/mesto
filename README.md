# MESTO. Student project for Yandex.Praktikum

### Description

Simple interactive gallery where users can share pictures. This is a student project created during multiple sprints of a web development course of Yandex Practicum - different layers of functionality were added to the project over time. Project is written in JavaScript, data is loaded from and onto external API provided by Yandex. 

### [Have a look at the project on GitHub Pages](https://space-boss.github.io/mesto/)

### Functionality
* Adding new cards to the grid
* Deleting cards created by the user
* Editing user profile information
* Form validation on the client side
* Communication with external API to fetch and patch/delete data

### Technologies used
* Adaptive layout using flexbox and grid positioning
* Nested file structure according to BEM methodology
* Asynchronous JavaScript
* Object oriented programming
* DOM API
* Fetch API
* Webpack
* Browser form validation

### Install the project
```
  git clone https://github.com/space-boss/mesto.git

  cd mesto

  npm i webpack --save-dev

  npm run build

  npm run dev
```

### Project history
As the project was being created over multiple sprints followed by codу reviews and fixes, here's its rough roadmap.

:seedling: **Sprint 4 of the course:** A basic structure of the project was created. First functionality on JavaScript included opening and closing of popups and changing user information on client side. Created adaptive layout of a project. 

:seedling: **Sprint 5 of the course:** Extending project functionality: now it's possible to add cards to the grid, delete and like them. Elements are added to the layout via toggling DOM elements with JavaScript. At this point all changes are done locally in the browser, the project didn't have its own backend yet.

:seedling: **Sprint 6 of the course:** This sprint's task was to focus on form validation. Now the inputs are validated according to the rules given in html. The user gets a feedback about mistakes of input and form cannot be submitted unless the inputs have passed the check. Also different ways of closing the popups are added.

:seedling: **Sprint 7 of the course:** Massive code refactoring to use objects and train the basics of object oriented programming. Now card and form validation components are treated as objects. Card uses following functions as methods: creating an element from the template, setting eventListeners, toggling likes and popup view. Validation object recieves settings of a validated form, has methods of showing and hiding error spans, checking validity and changing the visual style of the button. 

:deciduous_tree: **Sprint 8 of the course:** The work with objects and modules continues. The main bulk of a functionality is turned into components and moved out of index.js. The constants are added to index.js via file imports using relative paths. The project is compiled using webpack. Images are optimised for the build. 

### Further improvements
In the subsequent sprints the project was refactored using react ([link to the repository](https://github.com/space-boss/mesto-react)) and the backend was written for it ([backend repository](https://github.com/space-boss/express-mesto)).
