import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HoneypotAPI — Deploy Fake API Keys to Catch Security Breaches',
  description: 'Generate fake API keys with embedded tracking tokens. Get real-time alerts when attackers use them. Trace the breach source instantly.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="938dff68-58ba-4e54-9498-7968b3c3e487"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
