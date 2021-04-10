const employee = require('./Employee')

class Manager extends employee {
	constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getRole() {
		return 'Manager'
	}
}

module.exports = Manager;