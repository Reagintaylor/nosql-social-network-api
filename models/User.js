const mongoose = require('mongoose');


const thoughtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: Number,
});

const reactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: Number,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manager: managerSchema,
  employees: [employeeSchema],
  lastAccessed: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

const managerData = { name: 'Taylor', salary: 80000 };
const employeeData = [
  { name: 'Ann', salary: 40000 },
  { name: 'Liu', salary: 50000 },
];

Department.create(
  { name: 'Shoes', manager: managerData, employees: employeeData },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);

module.exports = Department;
