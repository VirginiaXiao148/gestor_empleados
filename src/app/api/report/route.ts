import db from "@/app/lib/db";

export async function GET() {
    const stmt = db.prepare(`
        SELECT Employee.name, COUNT(*) as total
        FROM Shift
        JOIN Employee ON Shift.employee_id = Employee.id
        GROUP BY Employee.id
    `)
    const data = stmt.all()
    if (!data) {
        return Response.json({ error: "No data found" }, { status: 404 })
    }
    // Transform the data into a format suitable for charting
    const labels = data.map((item) => item.name)
    const dataset = data.map((item) => item.total)

    return Response.json({ labels, dataset })
}