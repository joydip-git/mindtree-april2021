function campusPerson(name, id) {
    this.name = name;
    this.id = id;
}
campusPerson.prototype.print = function () {
    return this.name + ' ' + this.id;
}
function campusMinds(name, id, domain) {
    campusPerson.call(this, name, id)
    this.domain = domain
    this.print = function () {
        let partialInfo = campusPerson.prototype.print.apply(this);
        return partialInfo + ' ' + this.domain
    }
}
function campusLead(name, id, teamName) {
    campusPerson.call(this, name, id)
    this.team = teamName
    this.print = function () {
        let partialInfo = campusPerson.prototype.print.apply(this);
        return partialInfo + ' ' + this.team
    }
}
const saadCampusMind = new campusMinds('Saad', 1, 'MERN Stack')
console.log(saadCampusMind.print())

const joydipLead = new campusLead('Joydip', 2, 'Webtech MERN Stack Team')
console.log(joydipLead.print())