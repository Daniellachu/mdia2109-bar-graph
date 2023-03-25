import { useState, useEffect } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './PieChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(){

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ['January 2019', 'January 2020','January 2021','January 2022','January 2023'],
            datasets: [
                {
                    label: 'Sales',
                    data: [1654977, 2010270, 4423771,3479172,3315790],
                    backgroundColor: [
                        '#d6f6dd',
                        '#dac4f7',
                        '#f4989c',
                        '#ebd2b4',
                        '#acecf7'
                    ],
                    borderColor: [
                        '#d6f6dd',
                        '#dac4f7',
                        '#f4989c',
                        '#ebd2b4',
                        '#acecf7'
                    ],
                    borderWidth: 1,
                },
            ],
        })

        setChartOptions({
            plugins:{
                legend:{
                },
                title:{
                    display:true,
                    text:"Monthly retail trade e-commerce sales"
                }
            },

            maintainAspectRatio:false,
            responsive:true
        })
    })

    return(
        <>
            <div className={styles.container}>
                <Pie data={chartData} options={chartOptions}></Pie>
            </div>
        </>
    )
    
  
}


