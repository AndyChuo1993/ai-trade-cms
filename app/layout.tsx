import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'SunGene',
  description: 'SunGene website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">{children}</body>
    </html>
  )
}
