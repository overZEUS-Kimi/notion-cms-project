"use client"

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"
import { useState } from "react"
import { ArrowUpDown } from "lucide-react"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type ActivityStatus = "완료" | "진행중" | "실패"

interface Activity {
  id: string
  user: string
  action: string
  status: ActivityStatus
  date: Date
  amount?: string
}

const statusVariant: Record<ActivityStatus, "default" | "secondary" | "destructive"> = {
  완료: "default",
  진행중: "secondary",
  실패: "destructive",
}

const data: Activity[] = [
  { id: "1", user: "김민수", action: "결제 완료", status: "완료", date: new Date("2026-05-25"), amount: "₩120,000" },
  { id: "2", user: "이지은", action: "회원가입", status: "완료", date: new Date("2026-05-25") },
  { id: "3", user: "박서준", action: "파일 업로드", status: "진행중", date: new Date("2026-05-24") },
  { id: "4", user: "최유나", action: "결제 시도", status: "실패", date: new Date("2026-05-24"), amount: "₩55,000" },
  { id: "5", user: "정하준", action: "프로필 수정", status: "완료", date: new Date("2026-05-23") },
  { id: "6", user: "강소영", action: "구독 갱신", status: "완료", date: new Date("2026-05-23"), amount: "₩29,900" },
]

const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "user",
    header: "사용자",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("user")}</span>
    ),
  },
  {
    accessorKey: "action",
    header: "활동",
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      const status = row.getValue("status") as ActivityStatus
      return (
        <Badge variant={statusVariant[status]}>{status}</Badge>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "금액",
    cell: ({ row }) => row.getValue("amount") ?? "—",
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        날짜
        <ArrowUpDown className="ml-2 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) =>
      format(row.getValue("date"), "MM. dd. (EEE)", { locale: ko }),
  },
]

export function RecentActivityTable() {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
        <CardDescription>최근 6건의 사용자 활동 내역</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
