import React from 'react';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Chart2() {
    const { water_usages } = useGlobalContext();

    const data = {
        labels: water_usages?.map((usage) => dateFormat(usage.date)) || [],
        datasets: [
            {
                label: 'Water Usage Records (gallons)',
                data: water_usages?.map((usage) => usage.amount) || [],
                backgroundColor: 'green',
                borderColor: 'green',
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Water Usage Records Over Time',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Gallons',
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <Chart2Styled>
            <Line data={data} options={options} />
        </Chart2Styled>
    );
}

const Chart2Styled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart2;
