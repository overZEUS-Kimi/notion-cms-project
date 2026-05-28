import {
  LayoutDashboard,
  ShieldCheck,
  Palette,
  Zap,
  Database,
  FormInput,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: LayoutDashboard,
    title: "대시보드 레이아웃",
    description:
      "반응형 사이드바 + 헤더가 포함된 대시보드 레이아웃. 모바일에서는 Sheet 드로어로 자동 전환됩니다.",
  },
  {
    icon: ShieldCheck,
    title: "인증 페이지",
    description:
      "로그인/회원가입 폼이 react-hook-form + zod로 타입 안전하게 검증됩니다.",
  },
  {
    icon: Palette,
    title: "다크모드 지원",
    description:
      "next-themes와 Tailwind CSS v4의 CSS 변수 기반으로 라이트/다크/시스템 테마를 지원합니다.",
  },
  {
    icon: Zap,
    title: "서버 상태 관리",
    description:
      "@tanstack/react-query로 데이터 페칭, 캐싱, 백그라운드 리프레시를 자동으로 처리합니다.",
  },
  {
    icon: Database,
    title: "데이터 테이블",
    description:
      "@tanstack/react-table 기반의 재사용 가능한 테이블. 정렬, 필터링, 페이지네이션을 지원합니다.",
  },
  {
    icon: FormInput,
    title: "ShadcnUI 컴포넌트",
    description:
      "Button, Card, Dialog, Sheet 등 20+ ShadcnUI 컴포넌트가 미리 설치되어 있습니다.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            모든 것이 준비되어 있습니다
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            처음부터 다시 만들 필요 없이, 검증된 스택으로 바로 시작하세요.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
