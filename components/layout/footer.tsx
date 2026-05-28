import Link from "next/link"
import { Zap } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  제품: [
    { href: "/#features", label: "기능" },
    { href: "/dashboard", label: "데모" },
    { href: "/login", label: "로그인" },
  ],
  개발: [
    { href: "https://nextjs.org", label: "Next.js" },
    { href: "https://ui.shadcn.com", label: "ShadcnUI" },
    { href: "https://tailwindcss.com", label: "Tailwind CSS" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <span>StarterKit</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Next.js 16 + TypeScript + Tailwind CSS v4 + ShadcnUI 기반의
              빠른 웹 개발 시작점.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StarterKit. MIT 라이선스.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js & ShadcnUI
          </p>
        </div>
      </div>
    </footer>
  )
}
