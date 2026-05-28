import { Separator } from "@/components/ui/separator"

const stats = [
  { value: "20+", label: "ShadcnUI 컴포넌트" },
  { value: "6+", label: "검증된 라이브러리" },
  { value: "4", label: "완성된 페이지" },
  { value: "100%", label: "TypeScript" },
]

export function StatsSection() {
  return (
    <section id="stats" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground font-medium">
                {stat.label}
              </span>
              {index < stats.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden md:block absolute"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
