import React from 'react'
import styled from 'styled-components'
import { calender, comment, handholdingdrop, trash, moneybills, bathroom, kitchen, laundry, outdoorwater, taskchallenge} from '../../utils/icons';
import { leakprevention, waterother, leaking } from '../../utils/icons';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';

function Goalitem({
    id, 
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'total_household_water_usage_goal':
                return moneybills;
            case 'bathroom_water_saving_goal':
                return bathroom;
            case 'kitchen_water_saving_goal':
                return kitchen;
            case 'laundr_water_saving_goal':
                return laundry;
            case 'outdoor_water_saving_goal':
                return outdoorwater;
            case 'leak_prevention_goal':
                return leakprevention;
            case 'water_saving_challenge_goal':
                return taskchallenge;
            case 'other':
                return waterother;
            default:
                return ''
        }
    }

    const waterUsageCatIcon = () => {
        switch (category) {
            case 'total_household_water_usage':
                return moneybills;
            case 'bathroom_water_usage':
                return bathroom;
            case 'kitchen_water_usage':
                return kitchen;
            case 'laundry_water_usage':
                return laundry;
            case 'outdoor_water_usage':
                return outdoorwater;
            case 'water_loss_due_to_leak':
                return leaking;
            case 'behavioral_and_habitual_water_usage':
                return taskchallenge;
            case 'other':
                return waterother;
            default:
                return ''
        }
    }


    
  return (
    <GoalItemStyled indicator={indicatorColor}>
        <div className="icon">
            {type === 'waterusage' ? waterUsageCatIcon() : categoryIcon()}

        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{handholdingdrop} {amount}  Gallons </p>
                    <p>{calender} {dateFormat(date)}</p>
                    <p>
                        {comment}
                        {description}
                    </p>
                </div>

                <div className="btn-con">
                    <Button 
                        icon={trash}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color'}
                        color={'#fff'}
                        iColor={'#fff'}
                        hColor={'var(--color-green)'}
                        onClick={() => deleteItem(id)}
                     
                    />
                </div>
            </div>
        </div>
    </GoalItemStyled>
  )
}

const GoalItemStyled = styled.div`
   background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        width: 480px;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default Goalitem