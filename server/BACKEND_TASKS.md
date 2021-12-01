# Backend Tasks

The backend is stored in the `/server` folder

You can find code snippets [here](./SNIPPETS.md)

## Preparation

Before writing our code, we should install our dependencies

From the `root` (/) of the project, in the terminal, type:

   - `cd server`
   - `npm i`

This will automatically install the following packages:
   - express
   - mongoose
   - dotenv

To run the backend at any time, you can use the following command

   - `node server.js`

##### If you have nodemon installed

   - `nodemon server.js`

## Task 1 - Choosing a dataset

For this task, you may choose from any of the sample datasets provided by MongoDB Atlas. Choose one and make a note of it. We will refer to this as your **chosen dataset** throughout this assignment.

We would recommend one of the following:

- Database Name: `sample_geospatial`, Collection: `shipwrecks`
- Database Name: `sample_restaurants`, Collection: `restaurants`
- Database Name: `sample_mflix`, Collection: `movies`
- Database Name: `sample_training`, Collection: `inspections`

> Important! This task assumes you already have the sample data loaded in your account. If you have not done this, follow the instructions on [loading the sample data](./LOADING_SAMPLE_DATA.md)

## Task 2 - Write a .env file

> Note: For this assignment, we already assume you have a MongoDB server, and know how to access your credentials.

1. Create a file in your root folder called `.env`. This file will contain all the connection information for accessing your database.

2. Copy and paste the text in the file `.env.example`, into your `.env` file

3. For the key `DB_NAME`, refer to the **database name** of your **chosen dataset**

4. For the other keys, fill in the details as provided to you by your MongoDB service.
    - DB_HOST=
    - DB_USER=
    - DB_PASS=

## Task 3 - Creating your schema

Analyse the data in the **collection** of your **chosen dataset**

Ask yourself, what fields are being used, what datatypes are being used?

1. In the `/models` folder, create a file named after the name of the **collection** of your **chosen dataset**

   > Hint: Because this file will ultimately contain the model, use a capitalised name, for example `Shipwreck`

2. Inside this file, write a schema based on your findings

   > Hint: You do not need to include ALL the fieldnames! For example, you can leave out the more complicated or boring ones

## Task 4 - Creating the model

1. Create a model from your schema

   > Hint: The `mongoose.model()` method takes 4 parameters, but we are really only interested in the first 3:
   >  1. The name of the model
   >  2. A reference to the Schema
   >  3. (optional) the name of the collection

2. Because your collection already exists, use the 3rd parameter to directly reference the name of the **collection** from your **chosen dataset**. This way, you will be certain the model will respond to the data already stored in your dataset.
   
   > Example: If your collection is called **'shipwrecks'**, use **'shipwrecks'** as the 3rd parameter

3. Export your model using the node modules standard

## Task 5 - Create your route

1. In the `/routes` folder, create a file which will be the name of your route. Choose whichever name you feel is appropriate.

   > Hint: Don't forget to import `express`!
   
   > Hint: Don't forget to use `express.Router()` to create your `router` object!

2. Import and use the route you just created into `server.js`

   > Hint: You will need `app.use()`

## Task 6 - Write an endpoint to list all the data in our collection

We will create an endpoint to list all the data from the **collection** of our **chosen dataset**

1. In the route you created in the previous task, import the model you created in Task 4

2. Create an endpoint with the method `GET`. Give the endpoint an appropriate path (or none, if you prefer)

3. Inside the handler for this endpoint use the model you created to query the collection the model is associated with. You will want to return all the results.

   > Hint: Remember to use `find()` with no parameters to return EVERYTHING
   
   > Hint: Remember, these model methods return promises. So handle the promise with the `then()` methods or use the preferred `async / await`

4. Send your results back to the client with `response.send()`

5. Add error handlers with `try / catch` or `catch()` to handle any errors you might get. Send a different response code and message to the client, if there is an error.

## Task 7 - Sorting our results

You may want to sort the results by a specific field

1. Use the `sort({ field : criteria})` method to sort the results returned from your query, where `field` is the field you want to sort by and `criteria` is `"asc"`, `"desc"`, `"ascending"`, `"descending"`, `1`, or `-1`.

## Task 8 - Limiting our results

Warning! Your collection has thousands of results! You should not return everything the server finds.

1. Use the `limit(n)` method to limit the results returned from your query, where `n` is the number of results you will return.

2. What number will you use?

## Task 9 - Skipping indexes from our results

Being able to skip indexes is critical for any application which uses pagination.

1. Add a parameter or query parameter to your endpoint. This parameter will be the value representing how many indexes our query should skip, before counting the returned results.

   > Hint: Remember, you can use `request.params` or `request.query` to access this value

2. Use the `skip(n)` method to tell our query to skip a certain number of records, where `n` is the number of results you will skip.

> Important! `skip()` expects a number, but each property in `request.params` is a string. You should convert this into a number before you can use it in `skip()`

## Task 10 - Selecting certain fields

Still too much data!

1. Choose some fields you wish to return and use the `select()` method to limit your results to those fields. For example:
   `select('date')` will limit your results to the `date` field from your collection 

> Hint: You can pass in a single string or an array of strings

## Task 11 - Setting up CORS

To prevent problems with the Same Origin Security Policy, we will use the CORS middleware

1. Install the npm package cors

2. Import and add cors to your middleware stack.
   
This will prevent the dreaded same origin policy error in your browser.

> Note: Remember to run your middleware before any of your routes!

## Task 12 - Running and testing our API

Now everything is setup, test your API with a testing tool such as Postman or Insomnia, (or any other tool).

Validate that the results you receive are what you would expect.

Now move onto the [frontend tasks](../client/FRONTEND_TASKS.md) 🥳
