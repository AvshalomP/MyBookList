require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/');
const db = require('./models');
const cors = require('cors');

const app = express();
const PORT = 4000;

// allow cross-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
   console.log(`\nServing on port ${PORT}...`);
});