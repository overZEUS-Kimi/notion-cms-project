import { Users, DollarSign, Activity, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { StatsCard } from "@/components/dashboard/stats-card"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { RecentActivityTable } from "@/components/dashboard/recent-activity-table"

const statsData = [
  {
    title: "총 사용자",
    value: "24,521",
    description: "전월 대비 +1,230명",
    icon: Users,
    trend: { value: 5.3, isPositive: true },
  },
  {
    title: "월 매출",
    value: "₩18.4M",
    description: "전월 대비 +₩2.1M",
    icon: DollarSign,
    trend: { value: 12.9, isPositive: true },
  },
  {
    title: "활성 세션",
    value: "1,893",
    description: "현재 접속 중",
    icon: Activity,
    trend: { value: 3.1, isPositive: true },
  },
  {
    title: "에러율",
    value: "0.24%",
    description: "전주 대비 -0.08%",
    icon: AlertCircle,
    trend: { value: 0.8, isPositive: false },
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">대시보드</h2>
        <p className="text-muted-foreground">
          서비스 현황을 한눈에 파악하세요
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="analytics">분석</TabsTrigger>
          <TabsTrigger value="settings">설정</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <OverviewChart />
          <RecentActivityTable />
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <div className="rounded-lg border p-6 space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              분석 데이터를 불러오는 중...
            </p>
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-4">
          <div className="rounded-lg border p-6">
            <p className="text-sm text-muted-foreground">
              설정 패널 — 여기에 설정 컴포넌트를 추가하세요.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
