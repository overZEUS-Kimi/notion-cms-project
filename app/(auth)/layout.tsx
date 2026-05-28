import Link from "next/link"
import { Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Zap className="h-5 w-5 text-primary" />
          <span>StarterKit</span>
        </Link>
        <ThemeToggle />
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        {children}
      </main>
    </div>
  )
}
