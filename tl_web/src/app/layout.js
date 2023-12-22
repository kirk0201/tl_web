import { Inter } from 'next/font/google'
import styles from '../styles/index.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <div className='w-1366'>
      <head>
        <title className={styles.test}>My tl site</title>
      </head>
      <header>
        <h1>My t1 site</h1>
      </header>
      {children}
      <footer>
        <div>footer</div>
      </footer>
    </div>
  )
}
