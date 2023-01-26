
const Employee = require('./Employee')

class Engineer extends Employee {

    constructor(name, id, email, github) {   

        super(name, id, email);
        this.github;

}

empGithub () {
    return this.github;

}

empPosition () {

    return 'Position'

}
}
module.exports = Engineer;

