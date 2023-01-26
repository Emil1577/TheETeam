//getting all employees

class Employee {

    constructor(name, id, email) {   //not every employee has github office number and school

        this.name = name;
        this.id = id;
        this.email = email;
    }

    empName() {
        return this.name;

    }

    empId() {

        return this.id;
    }

    empEmail() {

        return this.email;

    }

    empPosition() {

        return 'Position'

    }
}
module.exports = Employee;
