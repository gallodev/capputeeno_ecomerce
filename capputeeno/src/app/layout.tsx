import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/Header'
import { FilterContextProvider } from './context/filterContext'
import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({ subsets: ['latin'] })

export const metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno e-commerce next.js',
}

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
          <FilterContextProvider>
            <Header/>
            {children}
          </FilterContextProvider>
      </body>
    </html>
  )
}
