import { Inter, Barlow } from 'next/font/google'
import Header from '@/components/Header'
import MainContainer from '@/containers/MainContainer'
import BottomNavbar from '@/components/BottomNavbar'
import styles from './layout.module.scss'
import '../styles/globals.scss'
import 'cal-sans'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['400', '500', '700', '900']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={barlow.className}>
      <body>
        <MainContainer as='main' className={styles.main}>
          <Header />
          <section className={styles.hero}>{children}</section>
        </MainContainer>
      </body>
    </html>
  )
}
