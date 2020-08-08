import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import { useSelector } from 'react-redux'

function ChartSection() {
    const [costToday, setCostToday] = useState(0);
    const [costAfterTenYears, setCostAfterTenYears] = useState(0);

    const allExpensesSum = useSelector((state) => state.all_expenses_sum);
    const recoveryPeriod = useSelector((state) => state.recovery_period);
    const balanceAmount = useSelector((state) => state.expenses_minus_other_expenses);

    useEffect(() => {
        setTimeout(() => {
            setCostToday(balanceAmount)
        }, 3000);
    }, [balanceAmount])

    useEffect(() => {
        if(recoveryPeriod) {
            let value = (allExpensesSum*1.2)/recoveryPeriod;
            setTimeout(() => {
                setTimeout(setCostAfterTenYears(value), 3000);
            }, 3000);
            
        }
    }, [recoveryPeriod, allExpensesSum])


    const state = {
        labels: ['Cost as of Today', 'Cost in 10 Years'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [costToday, costAfterTenYears]
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
                    text:'',
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