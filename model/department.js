const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    departmentid: String,
    name: String
});

const departmentModel = mongoose.model("department", departmentSchema);
module.exports = departmentModel;