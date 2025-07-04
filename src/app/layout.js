import { Ubuntu } from 'next/font/google'
import './globals.css'; // ESTA LINHA É ESSENCIAL

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'MECA - Oficinas de confiança na palma da mão',
  description: 'Quem vai de MECA, vai além!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
