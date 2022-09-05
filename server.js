const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');
const PORT = process.env.PORT || 3001;

// takes incoming POST data and converts it to key/value pairings
app.use(express.urlencoded({extended:true}));

// takes incoming POST data in the form of JSON and parses it into JavaScript object
app.use(express.json());

// file resources linked to localhost from public folder, nstruct the server to make these files static resources
app.use(express.static('public'));

app.use('/api/', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.`);
});