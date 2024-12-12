import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../Form/Form'
import Goalitem from '../Goalitem/Goalitem'

function Goal() {
   const {addGoal, goals, getGoal, deleteGoal, totalGoal, getGoalsByCategory} = useGlobalContext()

   useEffect(() => {
      getGoal()
   }, [getGoal])

   const totalGallonsByCategory = getGoalsByCategory()



  return (
    <GoalStyled>
           <InnerLayout>
                <h1>Aqua Goal</h1>
                <h2 className="total-goal"> Keep Water Usage below: <span>{totalGoal()}</span>  gallons </h2>
                <div className="goal-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="goals">
                          {goals.map((goal_present) => {
                            const {_id, title, amount, date, category, description, type} = goal_present;
                            return <Goalitem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount}
                                date={date}
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteGoal}
                            />
                          })}

                    </div>
                </div>
          </InnerLayout>
    </GoalStyled>
  )
}

const GoalStyled = styled.div`
   display: flex;
    overflow: auto;
    .total-goal{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;

        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .goal-content{
        display: flex;
        gap: 2rem;
        .goals{
            flex: 1;
        }
    }
`;


export default Goal;