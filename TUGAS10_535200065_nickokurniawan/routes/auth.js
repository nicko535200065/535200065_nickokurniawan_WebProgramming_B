const express = require('express');

const router = express.Router();

router.get('/login', async (req, res) => {
  res.render('pages/login');
});

module.exports = router;

// routes
const auth = require('./routes/auth');
app.use('/auth', auth);

const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('ok');
});

module.exports = router;

router.post('/login', async (req, res) => {
  // get user input
  const username = req.body.username;
  const password = req.body.password;

  if (username === "admin" && password === "admin") {
    // TODO: implement sessions to check user is logged-in

    // redirect to member area
    res.redirect('/');
  } 
  else {
    // TODO: render the login page with error information
  }
});

router.get('/login', async (req, res) => {
  // if the user has logged-in, redirect to index
  if (req.session.user) {
    res.redirect('/');
  } else {
  res.render('pages/login');
}
});

router.get('/logout', async (req, res) => {
  // destroy all session
  req.session.destroy();

  // redirect to login
  res.redirect('/auth/login');
});

router.get('/login', async (req, res) => {
  if (req.session.user) {
    res.redirect('/');
  } else {
    res.render('pages/login', { layout: false });
  }
});

router.post('/login', async (req, res) => {
  // get user input
  const username = req.body.username;
  const password = req.body.password;

  if (username === "admin" && password === "admin") {
    // implement sessions to check user is logged-in
    req.session.user = "admin";

    // redirect to member area
    res.redirect('/');
  } 
  else {
    // render the login page with error information
    res.render('pages/login', { layout: false, error: 'Wrong username or password.' });
  }
});
