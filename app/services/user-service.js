module.exports = userService;

function userService(options) {
    let User

    if (!options) {
        return {'error' : 'Model is required'}
    };

    User = options;

    return {
        getAllUser: getAllUser,
        postUser: postUser,
    }

    function getAllUser(req, res) {
        return User.find();
    }

    function postUser(document) {
        let user = new User(document);
        return user.save();
    }
}