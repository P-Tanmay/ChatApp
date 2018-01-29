const express = require('express');
const app = express();
<<<<<<< HEAD
const io = require('socket.io')();

app.use(express.static('public'));

// this is a routes and poimts to the home page

app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/users'));





// this is a route, this point at the firast homepage / root
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
//
//
// // set up a contact routes
// app.get('/contact', (req, res) => {
//   res.sendFile(__dirname + '/contact.html');
// });
//
// // set up aportfolio routes
// app.get('/portfolio', (req, res) => {
//   res.sendFile(__dirname + '/portfolio.html');
// });

const server = app.listen(3000, () => {
  console.log('app running on port 3000!');
});

io.attach(server);

io.on('connection', (socket) => {
  console.log('a user has connected! ');
  io.emit('connectMsg', { for: 'everyone', msg : `${socket.id} is here!`});

  socket.on('disconnect', () => {
    console.log('a user has disconnect!');
  });

=======

// this is a route, this point at the firast homepage / root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// set up a contact routes
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

// set up aportfolio routes
app.get('/portfolio', (req, res) => {
  res.sendFile(__dirname + '/portfolio.html');
});


app.listen(3000, () => {
  console.log('app running on port 3000!');
>>>>>>> b05a475f7e8d6fafd110498932ce6ae4c46dc8a8
});
