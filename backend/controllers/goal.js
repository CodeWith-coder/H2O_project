
const incomeSchema_goalSchema = require("../models/goalModel")

// Methood for Saving data (To Database)
exports.addIncome_goal = async(req, res) => {
    const {title, amount, category, description, date} = req.body

    const income_goal = incomeSchema_goalSchema({
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
        res.status(200).json({message: 'Goal Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
      
    console.log(income_goal)
}

//Method for retriving data
exports.getIncome_goal = async(req, res) => {
    try {
        const income = await incomeSchema_goalSchema.find().sort({createdAt: -1})
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
        
    }
}


//Method for deleting data
exports.deleteIncome_goal = async(req, res) => {
    const {id} = req.params;
 
    incomeSchema_goalSchema.findByIdAndDelete(id)
        .then((incomes) => {
            res.status(200).json({message: 'Goal Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}