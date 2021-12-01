# Frontend Tasks

The frontend is stored in the `/client` folder

## Preparation

Before writing our code, we should install our dependencies

From the `root` (/) of the project, in the terminal, type:

    - `cd client`
    - `npm i`

To run the frontend at any time, you can use the following command

    - `npm start`

## Task 1 - Read the code in your frontend application

Spend some time familiarising yourself with the frontend code in the `/client` folder

- `App.js` - is the root of our application
- `/components` - contains all the components for our application
- `/components/List` - contains the files for the `List` component
- `/components/List/index.js` - the root of the `List` component
- `/components/List/ListItem.js` - a subcomponent of the `List` component

> You will also notice CSS files with the name `module`, for example `App.module.css`
> 
> These are CSS modules. The content can be treated as an object when imported.
> 
> You can read more about CSS modules [here](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

Use the following questions to structure your analysis:

1. Is state being used anywhere?
2. What does the `map()` function in the `List` component do?
3. How are styles being used?
4. Are `props` being passed to any component?

## Task 2 - Tidying up and personalising App.js

Now you've got the code, spend some time personalising it

1. Spend some time modifying the text in `App.js`

2. Modify the styles in `App.module.css` to something you prefer

3. Remove the annoying GIF on the homepage 😛

## Task 3 - Tidying up and personalising App.js

1. Spend some time modifying the text in the `List` component (including its subcomponent)

2. Change the display of the buttons to something you prefer

## Task 4 - Using fetch in the List component

Open the files in the `/components/List` folder

1. Modify the root file in the `List` component (`index.js`) so that it calls the endpoint on your server

2. The result of the fetch should be used to set your local state, which has already been prepared for you (see `list` and `setList` in `index.js`) 

    > Use `fetch` or `axios` to make the request to the backend

You won't be able to see anything on your page yet, but you can use `console.log()` or the network tab in your browser to verify that data is being returned from the server

## Task 5 - Displaying data in the ListItem subcomponent

The root list component is already passing all the `props` from the server request to the `ListItem.js` subcomponent.

1. Extract the properties you want to display from the `props` object and display them using the JSX in the component

2. You should now be able to see some results on the website

## Task 6 - Styling with CSS modules

The site looks a little ugly, so, give it a makeover!

Now you have some data, you can spend more time styling it

1. Use the CSS modules to style the `List` component

## Task 7 - Adding behaviours to our buttons

Our buttons don't do anything when we click them, so let's change that

1. Add the `onClick` prop to each button and write a separate handler for each

2. For now, just use `console.log()` to ensure that your handler functions are being called, when you click on each button

## Task 8 - Adding more state to handle the `skip` value

So far, the data on our page is a little static. We want to be able to send a dynamic "skip" value to the backend, to get a new set of results.

1. Add a new state object to the root of your `List` component using the `useState` React hook. This will store the "skip" value. Initialise this state with the value of `0`.

2. In the handler function for the "previous" button, modify the state for the "skip" value so that if the user clicks "previous", the "skip" value goes back by an appropriate number (use the "limit" value you set in your database)

3. In the handler function for the "next" button, modify the state for the "skip" value so that if the user clicks "next", the "skip" value goes forward by an appropriate number (use the "limit" value you set in your database)

4. Test that your code works by using `console.log()` to display the updated value

## Task 9 - Make a new request

1. Now your handler functions work by modifying the "skip" state, add to your button handlers a new fetch request to request data from the backend - just like you did with the `useEffect` function.

2. Ensure the state for "list" is updated with the results of the `fetch` request

## Task 10 - Automatically hide the "previous" button

1. If the "skip" value of your state is `0`, use a JSX condition to hide the "previous" button
