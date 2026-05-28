import { type LucideIcon, TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          {trend && (
            <Badge
              variant="outline"
              className={cn(
                "gap-1 text-xs",
                trend.isPositive
                  ? "border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                  : "border-red-200 text-red-700 dark:border-red-800 dark:text-red-400"
              )}
            >
              {trend.isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {Math.abs(trend.value)}%
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
