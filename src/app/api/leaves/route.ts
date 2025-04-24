import db from "@/app/lib/db";

export async function POST(req: Request) {
    const { employee_id, date, actions } = await req.json()

    const stmt = db.prepare(`
        INSERT INTO Leave (employee_id, date, actions)
        VALUES (?, ?, ?)
    `)
    stmt.run(employee_id, date, actions)

    return Response.json({ ok: true })
}

export async function GET() {
    const stmt = db.prepare(`
        SELECT Leave.*, Employee.name as employee_name
        FROM Leave
        JOIN Employee ON Leave.employee_id = Employee.id
        ORDER BY date
    `)
    const leaves = stmt.all()
    return Response.json(leaves)
}
