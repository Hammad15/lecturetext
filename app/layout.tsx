import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LectureText",
  description:
    "Other tools help you jump back into the video. This one helps you stop needing the video.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
