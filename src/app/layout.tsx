import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import "@/styles/globals.scss";

// Script component
import Script from "next/script";

// google font
const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900']
});


// SEO
export const metadata: Metadata = {
  title: 'Auth Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossOrigin="anonymous"
        />

      </head>
      <body className={lato.className} suppressHydrationWarning={true}>
        <div className="container-fluid">
          <div className="row">
              {children}
          </div>
        </div>
      </body>
      <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
      />
    </html>
  )
}
