import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Competitor Feature Launch Alerter — Get notified when competitors ship new features',
  description: 'Monitor competitor websites, changelogs, and social media for feature announcements. Get instant alerts via email or Slack when your competitors ship something new.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0a6f30a1-26f2-415c-8532-f026a7152393"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
