import { useState, useEffect } from "react"
import styles from './DoughnutChart.module.css'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function DoughnutChart(){

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState({})

    const labels = ['Total Internet users aged 16 years and over','Internet users aged 16 to 24 years','Internet users aged 25 to 44 years','Internet users aged 45 to 64 years','Internet users aged 65 years and over'];

    useEffect(()=> {
        setChartData({
            labels,
            datasets: [
                {
                    label:"2012",
                    data: [80,88,84.7,73.4,70.2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                }
            ],
        })
        
        setChartOptions({
            plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Internet use by frequency of use, age group and sex',
            },
            maintainAspectRatio:false,
            responsive:true
            }
        })

    })

    return(
        <>
            <div className={styles.container}>
                <Doughnut data={chartData} options={chartOptions} ></Doughnut>
            </div>
        </>
    )

        
          
}