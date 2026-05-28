import Link from "next/link"
import { ArrowRight, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center md:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <Badge variant="outline" className="mb-6 gap-1.5 px-4 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        Next.js 16 + ShadcnUI 스타터킷
      </Badge>

      <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        더 빠르게{" "}
        <span className="text-primary">웹 앱</span>을<br />
        개발하세요
      </h1>

      <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        인증, 대시보드, 다크모드, 폼 검증까지 — 모든 필수 요소가 준비된
        프로덕션 레디 Next.js 스타터킷.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg" className="gap-2">
          <Link href="/dashboard">
            데모 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link href="/register">
            <Code2 className="h-4 w-4" />
            시작하기
          </Link>
        </Button>
      </div>

      <div className="mt-16 flex items-center gap-8 text-sm text-muted-foreground">
        {["Next.js 16", "TypeScript", "Tailwind v4", "ShadcnUI", "Zod"].map(
          (tech) => (
            <span key={tech} className="font-medium">
              {tech}
            </span>
          )
        )}
      </div>
    </section>
  )
}
