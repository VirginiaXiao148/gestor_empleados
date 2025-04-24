import sqlite from 'better-sqlite3'

const db = sqlite('database/db.sqlite');

export default db

// Create the Employee table if it doesn't exist
db.prepare(`
    CREATE TABLE IF NOT EXISTS Employee (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT NOT NULL
    );
`).run()

// Create the Shift table if it doesn't exist
db.prepare(`
    CREATE TABLE IF NOT EXISTS Shift (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        employee_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        start_time TEXT NOT NULL,
        end_time TEXT NOT NULL,
        FOREIGN KEY (employee_id) REFERENCES Employee(id)
    );
`).run()

// Create the Leave table if it doesn't exist
db.prepare(`
    CREATE TABLE IF NOT EXISTS Leave (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        employee_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        reason TEXT NOT NULL,
        FOREIGN KEY (employee_id) REFERENCES Employee(id)
    );
`).run()