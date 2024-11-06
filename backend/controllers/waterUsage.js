
const ExpenseSchema_WaterUsageSchema = require("../models/WaterUsage_Model.js")

// Methood for Saving data (To Database)
exports.addExpense_WaterUsage = async(req, res) => {
    const {title, amount, category, description, date} = req.body

    const income_goal = ExpenseSchema_WaterUsageSchema({
         title,
         amount,
         category,
         description,
         date
    })

    try {
        //validations database
        if(!title || !category || !description || !date) {
            return res.status(400).json({message: 'All field are required'})
        }
        if(amount <= 0 ||  !amount === 'number') {
            return res.status(400).json({message: 'Must be a positive number'})
        }
        await income_goal.save()
        res.status(200).json({message: 'WaterUsage Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
      
    console.log(income_goal)
}

//Method for retriving data
exports.getExpense_WaterUsage= async(req, res) => {
    try {
        const income = await ExpenseSchema_WaterUsageSchema.find().sort({createdAt: -1})
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
        
    }
}


//Method for deleting data
exports.deleteExpense_WaterUsage = async(req, res) => {
    const {id} = req.params;
 
    ExpenseSchema_WaterUsageSchema.findByIdAndDelete(id)
        .then((incomes) => {
            res.status(200).json({message: 'WaterUsage Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}