import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LectureText: local lecture transcription and study notes",
  description:
    "LectureText turns a lecture recording on your computer into notes you can study without the video. No account needed.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
