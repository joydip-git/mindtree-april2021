class CampusPerson {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    print() {
        return this.name + ' ' + this.id;
    }
}
console.log(CampusPerson.prototype)
class CampusMinds extends CampusPerson {
    constructor(name, id, domain) {
        super(name, id)
        this.domain = domain
    }
    print() {
        let partialInfo = super.print();
        return partialInfo + ' ' + this.domain
    }
}
class CampusLead extends CampusPerson {
    constructor(name, id, teamName) {
        super(name, id)
        this.team = teamName
    }
    print() {
        let partialInfo = super.print();
        return partialInfo + ' ' + this.team
    }
}