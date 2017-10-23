const router = require('express').Router();
const path = require('path');
const siteController = require('../controllers/site-controller')();

module.exports = router;


router.get('/', siteController.getSite);
