'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Employee = {
    id: number
    name: string
}

export default function AddLeavePage() {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [employeeId, setEmployeeId] = useState('')
    const [date, setDate] = useState('')
    const [actions, setActions] = useState('')
    const router = useRouter()

    useEffect(() => {
        fetch('/api/employees')
        .then((res) => res.json())
        .then((data) => setEmployees(data))
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await fetch('/api/leaves', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ employee_id: Number(employeeId), date, actions }),
        })
        router.push('/leaves/list')
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Registrar Ausencia</h1>
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
                <textarea
                value={actions}
                onChange={(e) => setActions(e.target.value)}
                placeholder="Motivo o acción tomada"
                className="w-full border p-2 rounded"
                required
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
                    Guardar Ausencia
                </button>
            </form>
        </div>
    )
}
