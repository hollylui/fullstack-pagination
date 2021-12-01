# Snippets

Small pieces of code to help you with this assignment

##### Schema template
```javascript
// don't forget to rename the variable!
const MySchema = new mongoose.Schema({
});
```

##### Model template

```javascript
const Model = mongoose.model();
```

##### router with one GET request

```javascript
const express = require('express');
const router = express.Router()

// capture all GET requests to route
router.get('/', (request, response) => {
});

module.exports = router;
```

##### router GET request with parameters
```javascript
// replace "/path" with your own path
// replace ":param1" with your own param
// add as many params as you need
router.get('/path/:param1', (request, response) => {
    const params = request.params;
});
```

##### router GET request with query parameters
```javascript
// replace "/path" with your own path
router.get('/path', (request, response) => {
    const query = request.query;
});
```

##### Using a Route application
```javascript
// don't forget to import your router if you stored it in a separate file!
// replace "/path" with your own path
// replace "router" with the reference to your router

app.use('/path', router);
```
