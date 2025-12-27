import { Navbar } from "@/components/navbar"


export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-bold">
          Welcome to ShareULBI
        </h1>
        <p className="mt-2 text-muted-foreground">
          Home page content goes here.
        </p>
      </main>
    </>
  )
}
