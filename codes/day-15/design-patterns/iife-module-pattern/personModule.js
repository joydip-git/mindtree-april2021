const personModule = (function () {
    return {
        person: function (name, id, salary) {
            this.name = name;
            this.id = id;
            this.salary = salary;
            this.print = function () {
                return `${this.name}, ${this.salary}`
            }
        }
    }
})();