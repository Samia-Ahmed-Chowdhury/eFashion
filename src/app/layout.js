import { Inter } from 'next/font/google'
import './globals.css'
import CategoriesProvider from '@/provider/CategoriesProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'eFashion',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CategoriesProvider>
          <div>{children}</div>
        </CategoriesProvider>
      </body>
    </html>
  )
}
