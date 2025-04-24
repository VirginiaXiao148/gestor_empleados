'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddEmployeePage() {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch('/api/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, role }),
        })
        if (res.ok) {
            router.push('/employees/list')
        }
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Añadir Empleado</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
                required
                />
                <input
                type="text"
                placeholder="Rol"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border p-2 rounded"
                required
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Guardar
                </button>
            </form>
        </div>
    )
}
