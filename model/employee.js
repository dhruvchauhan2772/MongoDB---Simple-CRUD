const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    employeeid: String,
    name: String,
    departmentid: String
});

const employeeModel = mongoose.model("employee", employeeSchema);
module.exports = employeeModel;