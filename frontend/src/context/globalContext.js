import React, { useContext, useState } from "react"
import axios from 'axios'  //request from the server


const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [goals, setGoals] = useState([])
    const [water_usages, setWater_usages] = useState([])
    const [error, setError] = useState(null)

     //calculate goals
     const addGoal = async (goal) => {
        const response = await axios.post(`${BASE_URL}add-goal`, goal)
            .catch((err) =>{
                setError(err.response.data.message)
            })
       // getGoals()
    }

    const getGoal = async () => {
        const response = await axios.get(`${BASE_URL}get-goal`)
        setGoals(response.data)
        console.log(response.data)
    }

    getGoal()

    return (
        <GlobalContext.Provider value={{
            addGoal,
            getGoal, 
            goals
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext= () => {
    return useContext(GlobalContext)
}