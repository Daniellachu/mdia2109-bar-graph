import { useState, useEffect } from "react"
import styles from './BarChart.module.css'

import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart(){

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels:["Non-mortgage loans","Non-banks","Mortgage loans","Total credit liabilities of households"],
            datasets: [
                {
                    label:"September 2023",
                    data: [724120,208355,2093270,2817390],
                    borderColor: '#B0D0D3',
                    backgroundColor: '#B0D0D3'
                },
                {
                    label:"September 2022",
                    data: [726854,209367,2077538,2804392],
                    borderColor: '#FFCAD4',
                    backgroundColor: '#FFCAD4'
                },
                
                {
                    label:"September 2021",
                    data: [700344,209190,1910888,2611232],
                    borderColor: '#f7af9d',
                    backgroundColor: '#f7af9d'
                },
                {
                    label:"September 2020",
                    data: [704502,212863,1733738,2438240],
                    borderColor: '#C08497',
                    backgroundColor: '#C08497'
                },
            ]
        })

        setChartOptions({
            plugins:{
                legend:{
                    position:'top'
                },
                title:{
                    display:true,
                    text:"Credit liabilities of households"
                }
            },

            maintainAspectRatio:false,
            responsive:true
        })

    }, [])

    return(
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions}></Bar>
            </div>
        </>
    )
}