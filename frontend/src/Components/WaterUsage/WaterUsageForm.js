import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';


function WaterUsageForm () {
    const { addWaterUsage} = useGlobalContext()
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
        addWaterUsage(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    /*
    <div className="input-control">
            <input 
            type="text" 
            value={title}
            name={'title'} 
            placeholder="Water Usage Title"
            onChange={handleInput('title')}
            /> 
        </div>
    */

    return (
    <WaterUsageFormSytled onSubmit={handleSubmit}>

    <div className="selects input-control">
                <select 
                    required 
                    value={title} // This binds the dropdown to the `title` state
                    name="title" 
                    id="title" 
                    onChange={handleInput('title')} // Update 'title' in your state
                >
                    <option value="" disabled>Select the Water Usage</option>
                    <option value="Total Household Water Usage">Total Household Water Usage</option>
                    <option value="Bathroom Water Usage">Bathroom Water Usage</option>
                    <option value="Kitchen Water Usage">Kitchen Water Usage</option>
                    <option value="Laundry Water Usage">Laundry Water Usage</option>
                    <option value="Outdoor Water Usage">Outdoor Water Usage</option>
                    <option value="Water Loss Due to Leak]">Water Loss Due to Leak</option>
                    <option value="Behavioral and Habitual Water Usage">Behavioral and Habitual Water Usage</option>
                    <option value="other">Other</option>  
                </select>
            </div>

            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select the Icon</option>
                    <option value="total_household_water_usage">Total Household Water Usage</option>
                    <option value="bathroom_water_usage">Bathroom Water Usage</option>
                    <option value="kitchen_water_usage">Kitchen Water Usage</option>
                    <option value="laundry_water_usage">Laundry Water Usage</option>
                    <option value="outdoor_water_usage">Outdoor Water Usage</option>
                    <option value="water_loss_due_to_leak">Water Loss Due to Leak</option>
                    <option value="behavioral_and_habitual_water_usage">Behavioral and Habitual Water Usage</option>
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
                    name={'Add Water Usage'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>


    </WaterUsageFormSytled>
  )
}

const WaterUsageFormSytled = styled.form`
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
        justify-content: flex-end;
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

export default WaterUsageForm

