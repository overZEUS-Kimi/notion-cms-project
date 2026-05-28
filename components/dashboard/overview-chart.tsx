"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  { month: "1월", 방문자: 4200, 전환: 380 },
  { month: "2월", 방문자: 5800, 전환: 520 },
  { month: "3월", 방문자: 5200, 전환: 490 },
  { month: "4월", 방문자: 7100, 전환: 640 },
  { month: "5월", 방문자: 6800, 전환: 610 },
  { month: "6월", 방문자: 8300, 전환: 780 },
  { month: "7월", 방문자: 9100, 전환: 850 },
]

export function OverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>방문자 현황</CardTitle>
        <CardDescription>최근 7개월 방문자 및 전환 추이</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              className="text-muted-foreground"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              className="text-muted-foreground"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="방문자"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="url(#colorVisitors)"
            />
            <Area
              type="monotone"
              dataKey="전환"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              fill="url(#colorConversions)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
