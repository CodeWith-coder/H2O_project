import React, { useContext, useState } from "react"
import axios from 'axios'  //request from the server


const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [goals, setGoals] = useState([])
    const [water_usages, setWaterUsages] = useState([])
    const [error, setError] = useState(null)

     //calculate goals
     const addGoal = async (goal) => {
        const response = await axios.post(`${BASE_URL}add-goal`, goal)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getGoal()
    }

    const getGoal = async () => {
        const response = await axios.get(`${BASE_URL}get-goal`)
        setGoals(response.data)
        console.log(response.data)
    }

    const deleteGoal = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-goal/${id}`) 
        getGoal()
    }

    //function to calculate the total goal
    const totalGoal = () => {
        let totalGoal = 0;
        goals.forEach((goal) => {
            totalGoal = totalGoal + goal.amount
        })
        return totalGoal;
    }

   // totalGoal()


    //calculate water Usate
    const addWaterUsage = async (waterusage) => {
    const response = await axios.post(`${BASE_URL}add-waterusage`, waterusage)
            .catch((err) =>{
                setError(err.response.data.message)
            })
         getWaterUsage()
    }

    const getWaterUsage = async () => {
        const response = await axios.get(`${BASE_URL}get-waterusage`)
        setWaterUsages(response.data)
        console.log(response.data)
    }

    const deleteWaterUsage = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-waterusage/${id}`) 
        getWaterUsage()
    }

    //function to calculate the total goal
    const totalWaterUsage = () => {
        let totalGoal = 0;
        water_usages.forEach((waterusage) => {
            totalGoal = totalGoal + waterusage.amount
        })
        return totalGoal;
    }

    const totalWaterUsageByCategory = () => {
        return water_usages.reduce((acc, { category, amount }) => {
            acc[category] = (acc[category] || 0) + amount;
            return acc;
        }, {});
    };

    const getGoalsByCategory = () => {
        const goalsByCategory = goals.reduce((acc, goal) => {
          acc[goal.category] = (acc[goal.category] || 0) + goal.amount;
          return acc;
        }, {});
        return goalsByCategory;
      };


    return (
        <GlobalContext.Provider value={{
            addGoal,
            getGoal, 
            goals, 
            deleteGoal, 
            totalGoal,

            water_usages,
            addWaterUsage,
            getWaterUsage,
            deleteWaterUsage,
            totalWaterUsage,
            totalWaterUsageByCategory,
            getGoalsByCategory
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext= () => {
    return useContext(GlobalContext)
}