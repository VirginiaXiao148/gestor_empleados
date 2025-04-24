import db from '@/app/lib/db'

export async function POST(req: Request) {
    const { name, role } = await req.json()
    const stmt = db.prepare('INSERT INTO Employee (name, role) VALUES (?, ?)')
    const info = stmt.run(name, role)
    return Response.json({ id: info.lastInsertRowid, name, role })
}

export async function GET() {
    const stmt = db.prepare('SELECT * FROM Employee')
    const employees = stmt.all()
    return Response.json(employees)
}
