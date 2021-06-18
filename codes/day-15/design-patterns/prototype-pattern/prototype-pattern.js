var carFunctionalitiesBluePrint = {
    start: function () {
        console.log('start')
    },
    stop: function () {
        console.log('stop')
    }
}

var marutiCar = Object.create(carFunctionalitiesBluePrint)
marutiCar.start()
marutiCar.stop()
console.log(marutiCar.__proto__)

function car(name) {
    this.modelName = name
}
car.prototype.start = function () {
    console.log('start')
}
car.prototype.stop = function () {
    console.log('stop')
}
var marutiWagonR = new car('WagonR')
console.log(marutiWagonR.__proto__)

var hyundaiCreta = new car('Hyundai Creta VXI')
console.log(hyundaiCreta.__proto__)

