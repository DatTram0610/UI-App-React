module.exports = addFunction;

function addFunction() {
    return {
        add: add
    }

    function add(a, b) {
        return (a + b);
    };
}