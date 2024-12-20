import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';


function Form () {
    const { addGoal, getGoal} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;
  
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        //setError('')
    }

    

    const handleSubmit = e => {
        e.preventDefault()
        addGoal(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
    <FormSytled onSubmit={handleSubmit}>

      <div className="selects input-control">
            <select 
                required 
                value={title} // This binds the dropdown to the `title` state
                name="title" 
                id="title" 
                onChange={handleInput('title')} // Update 'title' in your state
            >
                <option value="" disabled>Select the Goal</option>
                <option value="Total Household Water Usage Goal">Total Household Water Usage Goal</option>
                <option value="Bathroom Water-Saving Goal">Bathroom Water-Saving Goal</option>
                <option value="Kitchen Water-Saving Goal">Kitchen Water-Saving Goal</option>
                <option value="Laundry Water-Saving Goal">Laundry Water-Saving Goal</option>
                <option value="Outdoor Water-Saving Goal">Outdoor Water-Saving Goal</option>
                <option value="Leak-Prevention Goal">Leak-Prevention Goal</option>
                <option value="Water-Saving Challenge Goal">Water-Saving Challenge Goal</option>
                <option value="other">Other</option>
            </select>
        </div>

        <div className="selects input-control">
                <select required 
                    value={category} 
                    name="category" 
                    id="category" 
                    onChange={handleInput('category')}>
                    <option value=""  disabled >Select the Icon</option>
                    <option value="total_household_water_usage_goal">Total Household Water Usage Goal</option>
                    <option value="bathroom_water_saving_goal">Bathroom Water-Saving Goal</option>
                    <option value="kitchen_water_saving_goal">Kitchen Water-Saving Goal</option>
                    <option value="laundr_water_saving_goal">Laundry Water-Saving Goal</option>
                    <option value="outdoor_water_saving_goal">Outdoor Water-Saving Goal</option>
                    <option value="leak_prevention_goal">Leak-Prevention Goal</option>
                    <option value="water_saving_challenge_goal">Water-Saving Challenge Goal</option>
                    <option value="other">Other</option>  
                </select>
            </div>

        <div className="input-control">
            <input value={amount}  
                type="text" 
                name={'amount'} 
                placeholder={'Volume of Water (Gallons)'}
                onChange={handleInput('amount')} 
                />
            </div>

            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter the Month'
                    selected={date}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    onChange={(month) => {
                        setInputState({...inputState, date: month})
                    }}
                />
            </div>

            
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add a Description' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>

            <div className="submit-btn">
            <Button 
                    name={'Add the Goal'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>


    </FormSytled>
  )
}

const FormSytled = styled.form`
     display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }

         .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-start;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default Form

