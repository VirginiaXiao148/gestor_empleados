'use client'

import { useEffect, useState } from 'react'

type Employee = {
    id: number
    name: string
    role: string
}

export default function EmployeeListPage() {
    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => {
        fetch('/api/employees')
        .then((res) => res.json())
        .then((data) => setEmployees(data))
    }, [])

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Empleados</h1>
            <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Nombre</th>
                        <th className="border px-4 py-2">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((e) => (
                        <tr key={e.id}>
                        <td className="border px-4 py-2">{e.id}</td>
                        <td className="border px-4 py-2">{e.name}</td>
                        <td className="border px-4 py-2">{e.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
