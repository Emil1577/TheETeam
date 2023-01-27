//getting all employees

class Employee {

    constructor(name, id, email) {   //not every employee has github office number and school

        this.name = name;
        this.id = id;
        this.email = email;
    }


	getName() {
		return this.name;
	}



	getEmail() {
		return this.email;
	}



}
module.exports = Employee;
