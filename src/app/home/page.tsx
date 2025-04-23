import Link from "next/link"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Juan Rafael Toledo</h1>
        <p className="mt-4 text-lg">Welcome to my Next.js app!</p>

        <Link href="huchas" className="mt-4 text-blue-500 hover:underline">
            Huchas
        </Link>
        <Link href="maquinas" className="mt-4 text-blue-500 hover:underline">
            Maquinas
        </Link>
        </main>
    )
}