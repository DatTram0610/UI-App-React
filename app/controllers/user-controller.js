const path = require('path');
const userModel = require('../models/user-model');
// const response = require('../responses');
const userService = require('../services/user-service')(userModel);
const addFunction = require('../services/test')();


module.exports = userController;

function userController() {

    return {
        getAllUser: getAllUser,
        getUserById: getUserById,
        postUser: postUser, 
        updateById: updateById,
        removeById: removeById,
        add: add
    };

    function add (req, res) {
        var result = addFunction.add(2, 3);
        res.status(200).json(result);
    }

    function getAllUser(req, res) {
        userService
            .getAllUser(req, res)
            .then (users => {
                // debugger;
                // var result = new response.SuccessResponse();
                // result.data = users;
                // res.status(200).json(result);
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(500).json('Getting All Users Error!');
                // res.status(500).json(new response.ErrorResponse(error));
            })
    };

    function getUserById(req, res) {
        let queryCondition = {
            _id: req.params.id
        };

        userService.getUserById(queryCondition)
            .then(user => {
                res.status(200).json(user);
            })
            .catch(error => {
                res.status(500).send('Getting User By Id Error!');
            })
    };

    function postUser (req, res) {
        userService
            .postUser(req.body)
            .then(user => {
                res.status(200).json(user);
            })
            .catch(error => {
                res.status(500).send('Inserting User Error!');
            })
    };

    function updateById (req, res) {
        let queryCondition = {
            _id: req.params.id
        };

        userService.updateById(queryCondition, req.body) 
            .then(user => {
                res.status(200).json(user);
            })
            .catch(error => {
                res.status(500).send('Update User By Id Error!');
            })
    }

    function removeById(req, res) {
        let queryCondition = {
            _id: req.params.id
        }

        userService.removeById(queryCondition)
            .then(user => {
                res.status(200).json(user);
            })
            .catch(error => {
                res.status(500).send('Delete User By Id Error!')
            })
    }
};