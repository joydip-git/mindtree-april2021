/*
const calculationObject = {
    add: function (a, b) {
        return (a + b)
    },
    subtract: function (a, b) {
        return (a - b)
    }
}
const calculationModule = (
    function () {
        return calculationObject
    }
)();
*/

const calculationModule = (
    function () {
        return {
            add: function (a, b) {
                return (a + b)
            },
            subtract: function (a, b) {
                return (a - b)
            }
        }
    }
)();