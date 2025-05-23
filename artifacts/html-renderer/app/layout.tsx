import React from "react"
import "./globals.css"

export const metadata = {
  title: "HTML Renderer",
  description: "A simple HTML renderer for Compoder",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
