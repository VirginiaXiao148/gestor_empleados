'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Employee = {
    id: number
    name: string
}

export default function AddShiftPage() {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [employeeId, setEmployeeId] = useState('')
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const router = useRouter()

    useEffect(() => {
        fetch('/api/employees')
            .then((res) => res.json())
            .then((data) => setEmployees(data))
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await fetch('/api/shifts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                employee_id: Number(employeeId),
                date,
                start_time: startTime,
                end_time: endTime,
            }),
        })
        router.push('/shifts/list')
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Añadir Turno</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <select
                className="w-full border p-2 rounded"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
                >
                <option value="">Seleccionar empleado</option>
                {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                    {emp.name}
                    </option>
                ))}
                </select>
                <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border p-2 rounded"
                required
                />
                <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full border p-2 rounded"
                required
                />
                <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full border p-2 rounded"
                required
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
                Guardar Turno
                </button>
            </form>
        </div>
    )
}
