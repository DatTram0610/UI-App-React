const router = require('express').Router();
const userRoute = require('./user.route');
const route = require('./route');

router.use('/api/user', userRoute);


//Handle API 404
router.use('/api/*', function(req, res, next) {
    res.sendStatus(404)
});

// Loading one page application
router.use(route);

router.use(function(err, req, res, next) {
    // If there is not error, return general server message
    if(!err) {
        return next();
    };

    // Display Error
    console.error(err.stack);

    // Redirect to error page
    res.sendStatus(500);
});

module.exports = router;