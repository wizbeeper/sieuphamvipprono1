const express = require('express');
const router = express.Router();
const {
    listEmployees,
    addEmployeePage,
    createEmployee,
    editEmployeePage,
    updateEmployee,
    deleteEmployee,
} = require('../controllers/employee.controller');

router.get('/', listEmployees);
router.get('/add', addEmployeePage);
router.post('/add', createEmployee);
router.get('/edit/:id', editEmployeePage);
router.post('/edit/:id', updateEmployee);
router.get('/delete/:id', deleteEmployee);

module.exports = router;