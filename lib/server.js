import express from 'express'; // Include express to be able to use it in this file
import config from './config'; // Configuration file
import serverRender from './serverRender';

// Initialize express
const app = express();

// Middleware to be able to serve static files from the public directory
app.use(express.static('public'));

//Set EJS as our view engine
app.set('view engine', 'ejs');

// new route, when / is requested, it will server index template from ejs (view folder)
app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

// Where express is going to listen
// port: port number, imported from config file
// listenHandler, function
app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
