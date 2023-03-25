import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'
import BarChart2 from '@/components/DoughnutChart'
import DoughnutChart from '@/components/DoughnutChart'


export default function Home() {
  return (
    <>
      <Head>
        <title>Graphs & Charts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1> Graphs Dashboard</h1>
        <ul> Charts used
          <li>Bar Chart</li>
          <li>Pie Chart</li>
          <li>Doughnut Chart</li>
        </ul>
        <BarChart/>
        <PieChart/>
        <DoughnutChart/>
      </main>
    </>
  )
}