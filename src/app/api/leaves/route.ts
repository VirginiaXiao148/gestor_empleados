import db from "@/app/lib/db";

export async function POST(req: Request) {
    const { employee_id, date, start_time, end_time } = await req.json();
    const stmt = db.prepare("INSERT INTO Leave (employee_id, date, reason) VALUES (?, ?, ?)");
    const info = stmt.run(employee_id, date, start_time, end_time);
    return Response.json({ id: info.lastInsertRowid, employee_id, date, start_time, end_time });
}