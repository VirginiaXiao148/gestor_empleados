'use client'

import { useEffect, useState } from 'react'

type Leave = {
    id: number
    employee_name: string
    date: string
    actions: string
}

export default function LeaveListPage() {
    const [leaves, setLeaves] = useState<Leave[]>([])

    useEffect(() => {
        fetch('/api/leaves')
        .then((res) => res.json())
        .then((data) => setLeaves(data))
    }, [])

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Ausencias</h1>
            <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border px-4 py-2">Empleado</th>
                    <th className="border px-4 py-2">Fecha</th>
                    <th className="border px-4 py-2">Motivo</th>
                </tr>
                </thead>
                <tbody>
                {leaves.map((leave) => (
                    <tr key={leave.id}>
                    <td className="border px-4 py-2">{leave.employee_name}</td>
                    <td className="border px-4 py-2">{leave.date}</td>
                    <td className="border px-4 py-2">{leave.actions}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
