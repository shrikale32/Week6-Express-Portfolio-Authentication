var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/*POST home page */
router.post('/home', indexController.processHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login page  */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page  */
router.post('/login', indexController.processLoginPage);

/* GET to perform User Logout  */
router.get('/logout', indexController.performLogout);

module.exports = router;
