import db from "@/app/lib/db";

export async function POST(req: Request) {
    const { employee_id, date, start_time, end_time } = await req.json()

    const stmt = db.prepare(`
        INSERT INTO Shift (employee_id, date, start_time, end_time)
        VALUES (?, ?, ?, ?)
    `)

    stmt.run(employee_id, date, start_time, end_time)

    return Response.json({ ok: true })
}

export async function GET() {
    const stmt = db.prepare(`
        SELECT Shift.*, Employee.name as employee_name
        FROM Shift
        JOIN Employee ON Shift.employee_id = Employee.id
        ORDER BY date
    `)

    const shifts = stmt.all()
    return Response.json(shifts)
}
