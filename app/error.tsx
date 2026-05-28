"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center px-4">
      <div>
        <p className="text-8xl font-bold text-destructive/30">오류</p>
        <h1 className="mt-4 text-2xl font-bold">문제가 발생했습니다</h1>
        <p className="mt-2 text-muted-foreground">
          {error.message || "예기치 않은 오류가 발생했습니다. 다시 시도해 주세요."}
        </p>
      </div>
      <Button onClick={reset}>다시 시도</Button>
    </div>
  )
}
