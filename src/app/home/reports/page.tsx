'use client'

import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js'


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function ReportPage() {
    const [chartData, setChartData] = useState<ChartData<'bar'>>({
        labels: [],
        datasets: [],
    })

    useEffect(() => {
        fetch('/api/report')
        .then((res) => res.json())
        .then((data) => {
            setChartData({
                labels: data.labels,
                datasets: [
                    {
                    label: 'Turnos por Empleado',
                    data: data.dataset,
                    backgroundColor: '#3b82f6',
                    },
                ],
            })
        })
    }, [])

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Reportes de Turnos</h1>
            <div className="bg-white p-4 rounded shadow">
                <Bar data={chartData} />
            </div>
        </div>
    )
}