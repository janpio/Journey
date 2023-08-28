import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './components/Providers.jsx'
import Appbar from './components/Appbar.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
<<<<<<< HEAD
=======
          
>>>>>>> 1e10a0cb6505f64a9423c7954ff72e03718175bc
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
