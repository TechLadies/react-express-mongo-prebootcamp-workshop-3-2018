# TechLadies Bootcamp 4 Pre-bootcamp Workshop #3: React, Express and MongoDB basics

## Homework
For those on Macs who came to workshop 2 and ended up installing NodeJS through Homebrew instead of asdf as documented in the setup guide, you can take the time to install NodeJS properly!

First you have to uninstall the node you installed through Homebrew by running the following commands in your terminal:

```bash
brew uninstall node;
brew prune;
rm -f /usr/local/bin/npm /usr/local/lib/dtrace/node.d;
rm -rf ~/.npm;
```

Now you can follow the [setup guide instructions to install NodeJS with asdf!](https://github.com/TechLadies/bootcamp-4-technical-task/blob/master/setup-guide.md#nodejs-and-npm)

## Pre-requisites
You should have come for workshop 2 and built a simple Todo app following the code [here](https://github.com/spinningarrow/react-todo-list). We will be extending whatever you built in workshop 2.

## What we will cover during this workshop
Here's a breakdown of the workshop contents along with links to relevant reading material for those who have time to dig deeper!

### Refresher (~30min)
Concepts:
1. Revisiting what you've learnt about React so far.

Hands-on:
1. Extending the todo app to add new todos

### More React (~2hrs)
Concepts:
1. Understanding the DOM (Document Object Model)
    - Reading: [What is the DOM?](https://css-tricks.com/dom/)
2. React and the Virtual DOM
    - Reading: [React: The Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom)
3. State and Props of a React Component

Hands-on:
1. Breaking out our Todo app into multiple components
    - Adding a Header component
    - Adding an About component
    - Passing a `title` prop to our Todo component

Concepts:
1. When does a React component re-render
2. React Component lifecycle
    - React docs: [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

Hands-on:
1. Making an API call on `componentDidMount` to show a random cat image
    - Reading: [The Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

Concepts:
1. Client-side routing
    - Reading: [Server-side vs Client-side routing](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)

Hands-on:
1. Implementing client-side routing with React Router

### NodeJS and Express (~2hrs)
Setup:
- Install express generator: `npm i -g express-generator`
- Install mongodb: `brew install mongodb` or `choco install mongodb`

Concepts:
1. Front-end, Back-end, Full-stack
2. API calls and HTTP methods
    - Reading: [What is an API? In English, please](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82)
    - Reading: [Hyper Text Protocol Explained](https://www.lifewire.com/hypertext-transfer-protocol-817944)
    - Reading: [7 HTTP methods every web developer should know](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)

Hands-on:
1. Creating a simple express application which returns a list of todos
2. Fetching todos from the server

Concepts:
1. Routing
    - Reading: [Basic routing in Express](https://expressjs.com/en/starter/basic-routing.html)
    - Reading: [Express Routing guide](https://expressjs.com/en/guide/routing.html)
2. Middleware:
    - Reading: [Writing middleware in Express](https://expressjs.com/en/guide/writing-middleware.html)
    - Reading: [Using middleware in Express](https://expressjs.com/en/guide/using-middleware.html)
  3. RESTful routes
    - Reading: [Restful Routing](https://medium.com/@thejasonfile/restful-routing-2056f799223e)

Hands-on:
1. Nesting routers
2. Add create endpoint for todo
3. Saving new todo to the server

Concepts:
1. Persistence layer
2. Databases and MongoDB
    - Reading: [Introduction to Databases](https://en.wikiversity.org/wiki/Introduction_to_Databases)
    - Reading: [The Definitive Guide to NoSQL databases](https://www.toptal.com/database/the-definitive-guide-to-nosql-databases)
    - Reading: [Introduction to MongoDB](https://docs.mongodb.com/manual/introduction/)

Hands-on:
1. Sign-up for an mLab account
2. Exploring the mongo console and CRUD operations
    - Reading: [MongoDB CRUD operations](https://docs.mongodb.com/manual/crud/)

Concepts:
1. ORM (Object Relational Mapping) and ODM (Object Document Mapping)
    - Reading: [What is an ORM?](https://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it)
    - Reading: [Mongoose Quick start](http://mongoosejs.com/docs/index.html)

Hands-on:
1. Connecting our Express app to MongoDB with Mongoose
2. Defining a Todo schema in Mongoose
3. Saving Todos to the database

**Extras**

Topics to touch on if time permits:
1. Explaning ES5, ES6, ES7, JS versioning, and Babel
2. Explaining the spread operator
3. Explaning asynchronous JS and async/await
4. Error handling in Express
5. Implementing other CRUD endpoints
