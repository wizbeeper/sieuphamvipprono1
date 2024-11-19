const Employee = require('../models/employee.model');


exports.listEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.render('index', { employees });
    } catch (error) {
        res.status(500).send('Error loading employees');
    }
};


exports.addEmployeePage = (req, res) => {
    res.render('add');
};


exports.createEmployee = async (req, res) => {
    try {
        const { name, email, position, salary } = req.body;
        const newEmployee = new Employee({ name, email, position, salary });
        await newEmployee.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error adding employee');
    }
};


exports.editEmployeePage = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.render('edit', { employee });
    } catch (error) {
        res.status(500).send('Error loading employee');
    }
};


exports.updateEmployee = async (req, res) => {
    try {
        const { name, email, position, salary } = req.body;
        await Employee.findByIdAndUpdate(req.params.id, { name, email, position, salary });
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error updating employee');
    }
};


exports.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error deleting employee');
    }
};