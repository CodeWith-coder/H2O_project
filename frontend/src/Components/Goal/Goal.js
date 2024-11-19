import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../Form/Form'

function Goal() {
   const {addGoal, goals, getGoal} = useGlobalContext()
  return (
    <GoalStyled>
           <InnerLayout>
                <h1>Goal</h1>
                <div className="goal-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="goals">

                    </div>
                </div>
          </InnerLayout>
    </GoalStyled>
  )
}

const GoalStyled = styled.div`

`;


export default Goal;