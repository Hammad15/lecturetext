import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LectureText: local lecture transcription and study notes",
  description:
    "LectureText turns a lecture recording on your computer into notes you can study without the video. Clean and simple. No account or subscription needed.",
  openGraph: {
    siteName: "LectureText",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          data-goatcounter="https://lecturetext.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
