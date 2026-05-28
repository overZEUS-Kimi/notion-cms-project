"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  HelpCircle,
  LayoutDashboard,
  Settings,
  Users,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "대시보드" },
  { href: "/dashboard/analytics", icon: BarChart3, label: "분석" },
  { href: "/dashboard/users", icon: Users, label: "사용자", badge: "12" },
  { href: "/dashboard/settings", icon: Settings, label: "설정" },
  { href: "/dashboard/help", icon: HelpCircle, label: "도움말" },
]

interface DashboardSidebarProps {
  onNavigate?: () => void
}

export function DashboardSidebar({ onNavigate }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg"
          onClick={onNavigate}
        >
          <Zap className="h-5 w-5 text-primary" />
          <span>StarterKit</span>
        </Link>
      </div>

      <Separator />

      <nav className="flex-1 overflow-auto p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Button
              key={item.href}
              asChild
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-9",
                isActive && "font-medium"
              )}
            >
              <Link href={item.href} onClick={onNavigate}>
                <item.icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
                {item.badge && (
                  <Badge
                    variant="secondary"
                    className="ml-auto h-5 px-1.5 text-xs"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            </Button>
          )
        })}
      </nav>

      <Separator />

      <div className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="사용자" />
            <AvatarFallback className="text-xs">관리</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">관리자</p>
            <p className="text-xs text-muted-foreground truncate">
              admin@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
