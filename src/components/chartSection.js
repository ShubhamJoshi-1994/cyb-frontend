import React from 'react';
import {Bar} from 'react-chartjs-2';

function ChartSection() {
    const state = {
        labels: ['Cost as of Today', 'Cost in 10 Years'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [5000, 7000]
            }
        ]
    }

    return (
        <Bar
            data={state}
            height={100}
            options={{
                title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:16
                },
                legend:{
                    display:true,
                    position:'right'
                },
                maintainAspectRatio: false ,
                scales: {
                    xAxes: [{
                        barPercentage: 0.4
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }}
        />
    )
}

export default ChartSection;