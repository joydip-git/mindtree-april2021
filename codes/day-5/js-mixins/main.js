const { messenger } = require("./messenger")
const { Trainer } = require("./trainer")

//mixin (Mix messenger in Trainer)
Object.assign(Trainer.prototype, messenger)
console.log(Trainer.prototype)
console.log(new Trainer('anil', 1, 'JS'))

class Sample {
    constructor() { }
}
Object.assign(Sample.prototype, messenger)
console.log(new Sample())