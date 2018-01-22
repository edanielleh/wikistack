var express = require('express');
var router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./users');

// router.use('/wiki', wikiRouter);
router.use('/users', userRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('get to Get /wiki/');
  // res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  res.send('got to GET /wiki/add');
});


module.exports = router;
