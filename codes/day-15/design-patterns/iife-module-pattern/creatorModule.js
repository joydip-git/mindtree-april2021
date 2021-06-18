//IIFE
var creatorModule = (
    function () {
        //this object creates another object
        let obj = {
            getInstance: function () {
                var instance = {}
                return instance;
            }
        }
        return obj;
    }
)();