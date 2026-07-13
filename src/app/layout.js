import { Ubuntu } from 'next/font/google'
import './globals.css'

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
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC: read theme from localStorage before first paint */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('meca-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else if(!t){document.documentElement.classList.add('dark')}}catch(e){}})();`
        }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17215013580" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-17215013580');`
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5R8BDL5B');`
        }} />
      </head>
      <body className={ubuntu.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5R8BDL5B"
            height="0"
            width="0"
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
