# Fullstack Pagination

![Page turning](https://media.giphy.com/media/xT77Y1T0zY1gR5qe5O/source.gif)

This assignment combines both frontend and backend. You will build a simple website which implements pagination concepts.

What you will be doing:

> - Handling pagination in the backend with Mongoose
> - Creating a UI to handle pagination in the frontend with React

This project assumes you already have had experience with:

> - Mongoose Schemas and models
> - Querying data from a collection
> - Building routes and endpoints in Express
> - Some basic React knowledge

## Folder structure and preparation

There are 2 folders:

1. `/client` - this contains the `create-react-app` built React frontend
   - This will run on port `3000`
    
2. `/server` - this contains the backend code
   - This will run on port `3001`

## Tasks

1. Complete the [Backend Tasks](./server/BACKEND_TASKS.md)
2. Complete the [Frontend Tasks](./client/FRONTEND_TASKS.md)

## Bonus Tasks

### Bonus 1 - Adding sorting options

Your users may want greater control over how to display the data, for example, sorting by price

##### Frontend

1. Update your UI to include new buttons to sort by. These buttons should link back to specific criteria that your collection provides.

##### Backend

1. You will have to update your backend to receive a sorting parameter, alongside the skip parameter

2. You should validate in the backend that the parameter you receive is valid
