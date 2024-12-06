
const { addIncome_goal, getIncome_goal, deleteIncome_goal } = require('../controllers/goal');
const { addExpense_WaterUsage, getExpense_WaterUsage, deleteExpense_WaterUsage } = require('../controllers/waterUsage');
const router = require('express').Router();
const { signup, login } = require('../controllers/authController');


router.post('/add-goal', addIncome_goal)
        .get('/get-goal', getIncome_goal)
        .delete('/delete-goal/:id', deleteIncome_goal)
        .post('/add-waterusage', addExpense_WaterUsage)
        .get('/get-waterusage', getExpense_WaterUsage)
        .delete('/delete-waterusage/:id', deleteExpense_WaterUsage)
        .post('/signup', signup)
        .post('/login', login)

module.exports = router;