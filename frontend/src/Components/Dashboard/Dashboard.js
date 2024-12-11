import React, { useState } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart'; // Chart for goals
import Chart2 from '../Chart/Chart2'; // Chart for water usage
import { useGlobalContext } from '../../context/globalContext';
import Goalitem from '../Goalitem/Goalitem';

function Dashboard() {
    const { goals, deleteGoal, totalGoal, water_usages, totalWaterUsage } = useGlobalContext();
    
    // State to track which data to show
    const [showWaterUsage, setShowWaterUsage] = useState(false);

    // Toggle function
    const toggleData = () => {
        setShowWaterUsage((prev) => !prev);
    };

    return (
        <DashboardStyled>
            <InnerLayout>
                <button className="toggle-button" onClick={toggleData}>
                    {showWaterUsage ? "Show Goals" : "Show Water Usage"}
                </button>

                <div className="left-column">
                    {showWaterUsage ? (
                        <>
                            <h2 className="total-water-usage">
                                Total Water Used: <span>{totalWaterUsage()}</span> gallons
                            </h2>
                            <div className="chart-con">
                                <Chart2 />
                            </div>
                            <div className="water-usage-content">
                                <h2>Your Water Usage Records</h2>
                                <div className="water-usages">
                                    {water_usages.length > 0 ? (
                                        water_usages.map((usage) => {
                                            const { _id, title, amount, date, category, description } = usage;
                                            return (
                                                <Goalitem
                                                    key={_id}
                                                    id={_id}
                                                    title={title}
                                                    description={description}
                                                    amount={amount}
                                                    date={date}
                                                    category={category}
                                                    indicatorColor="var(--color-green)"
                                                    deleteItem={deleteGoal} // if applicable
                                                />
                                            );
                                        })
                                    ) : (
                                        <p>No water usage records yet.</p>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="total-goal">
                                Keep Water Usage below: <span>{totalGoal()}</span> gallons
                            </h2>
                            <div className="chart-con">
                                <Chart />
                            </div>
                            <div className="goal-content">
                                <h2>Your Goals</h2>
                                <div className="goals">
                                    {goals.length > 0 ? (
                                        goals.map((goal) => {
                                            const { _id, title, amount, date, category, description, type } = goal;
                                            return (
                                                <Goalitem
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
                                            );
                                        })
                                    ) : (
                                        <p>No goals yet. Add some to track your progress!</p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    display: flex;
    flex-direction: column; /* Change to column for button placement */
    gap: 1rem; /* Adjust gap */
    
    .toggle-button {
        background-color: var(--color-green);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s;

        &:hover {
            background-color: darkgreen; /* Darker shade on hover */
        }
    }

    .left-column,
    .right-column {
        flex: 1;
        display: flex;
        flex-direction: column; /* Ensure it stacks vertically */
    }

    .total-goal,
    .total-water-usage {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06);
        border-radius: 10px;
        padding: 0.5rem;
        margin: 0.5rem 0;
        font-size: 1.4rem;
        gap: 0.25rem;

        span {
            font-size: 1.6rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .chart-con {
        width: 100%; /* Set width to 100% to fill the container */
        max-width: 800px; /* Optional max width to limit size on large screens */
        height: 400px; /* Set a fixed height for the charts */
        margin: 0 auto; /* Center the charts horizontally */
        overflow: hidden; /* Hide overflow if necessary */
    }

    .goal-content,
    .water-usage-content {
        margin-top: 1rem;

        h2 {
            margin-bottom: 0.5rem;
            font-size: 1.4rem;
        }

        .goals,
        .water-usages {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* Show 4 items in a row */
            gap: 1rem;
            justify-items: center; /* Center items within each grid cell */
        }

        /* Ensure that the grid adjusts for smaller screens */
        @media (max-width: auto) {
            .goals,
            .water-usages {
                grid-template-columns: repeat(2, 1fr); /* Show 3 items in a row for medium screens */
            }
        }

        @media (max-width: auto) {
            .goals,
            .water-usages {
                grid-template-columns: repeat(2, 1fr); /* Show 2 items in a row for smaller screens */
            }
        }

        @media (max-width: auto) {
            .goals,
            .water-usages {
                grid-template-columns: 1fr; /* Show 1 item in a row for very small screens */
            }
        }
    }
`;






export default Dashboard;