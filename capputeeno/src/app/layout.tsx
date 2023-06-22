import { DefaultProviders } from './components/DefaultProviders'
import { Header } from './components/Header'
import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({ subsets: ['latin'] })

export const metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno e-commerce next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>        
        <DefaultProviders>
          <Header/>
          {children}    
        </DefaultProviders>              
      </body>
    </html>
  )
}
