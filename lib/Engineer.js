
const Employee = require('./Employee')

class Engineer extends Employee {

    constructor(name, id, email, github) {   

        super(name, id, email);
        this.github = github;

        

}

getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}




}
module.exports = Engineer;

