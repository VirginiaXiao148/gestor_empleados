'use client'

import { useEffect, useState } from 'react'

type Shift = {
    id: number
    employee_name: string
    date: string
    start_time: string
    end_time: string
}

export default function ShiftListPage() {
    const [shifts, setShifts] = useState<Shift[]>([])

    useEffect(() => {
        fetch('/api/shifts')
        .then((res) => res.json())
        .then((data) => setShifts(data))
    }, [])

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Turnos</h1>
            <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">Empleado</th>
                        <th className="border px-4 py-2">Fecha</th>
                        <th className="border px-4 py-2">Inicio</th>
                        <th className="border px-4 py-2">Fin</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map((shift) => (
                        <tr key={shift.id}>
                        <td className="border px-4 py-2">{shift.employee_name}</td>
                        <td className="border px-4 py-2">{shift.date}</td>
                        <td className="border px-4 py-2">{shift.start_time}</td>
                        <td className="border px-4 py-2">{shift.end_time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
