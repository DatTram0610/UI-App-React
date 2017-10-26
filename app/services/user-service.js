module.exports = userService;

function userService(options) {
    let User

    if (!options) {
        return { 'error': 'Model is required' }
    };

    User = options;

    return {
        getAllUser: getAllUser,
        getUserById: getUserById,
        postUser: postUser,
        updateById: updateById,
        removeById: removeById
    }

    function getAllUser(req, res) {
        return User.find();
    };

    function getUserById(queryCondition) {
        return User.findOne(queryCondition)
    }

    function postUser(document) {
        let user = new User(document);
        return user.save();
    };

    function updateById(queryCondition, document) {
        return User.findOneAndUpdate(queryCondition, document, {
            new: true
        });
    };

    function removeById(queryCondition) {
        return User.findOneAndRemove(queryCondition);
    };

    // function getUserById(queryCondition) {
    //     return User.findOneAndRemove(queryCondition);
    // };

}