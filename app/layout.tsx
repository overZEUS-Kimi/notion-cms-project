import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { QueryProvider } from "@/components/providers/query-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: {
    default: "Next.js 스타터킷",
    template: "%s | Next.js 스타터킷",
  },
  description:
    "Next.js 16 + TypeScript + Tailwind CSS v4 + ShadcnUI 기반의 웹 개발 스타터킷",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className="h-full"
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </QueryProvider>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
