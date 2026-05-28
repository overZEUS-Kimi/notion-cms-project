import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground md:py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-foreground/10 to-transparent" />

          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            지금 바로 시작해보세요
          </h2>
          <p className="mb-8 text-lg opacity-90 max-w-xl mx-auto">
            설정에 시간을 낭비하지 말고 중요한 기능 개발에 집중하세요.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 font-semibold"
            >
              <Link href="/register">
                무료로 시작하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/dashboard">데모 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
