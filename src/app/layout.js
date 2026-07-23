import { Ubuntu } from 'next/font/google'
import './globals.css'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  metadataBase: new URL('https://www.mecabr.com'),
  title: 'MECA - O conserto do seu carro na palma da mão',
  description: 'Conecte-se com as melhores oficinas da sua região. Agende serviços, compare preços e tenha total controle do seu veículo com o app MECA.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'MECA - O conserto do seu carro na palma da mão',
    description: 'Conecte-se com as melhores oficinas da sua região. Agende serviços, compare preços e tenha total controle do seu veículo com o app MECA.',
    url: 'https://www.mecabr.com',
    siteName: 'MECA',
    images: [
      {
        url: '/logo-512.png',
        width: 512,
        height: 512,
        alt: 'MECA Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'MECA - O conserto do seu carro na palma da mão',
    description: 'Conecte-se com as melhores oficinas da sua região. Agende serviços, compare preços e tenha total controle do seu veículo com o app MECA.',
    images: ['/logo-512.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MECA',
              url: 'https://www.mecabr.com',
              logo: 'https://www.mecabr.com/logo-512.png',
              sameAs: [
                'https://www.instagram.com/mecabr',
                'https://www.linkedin.com/company/mecabr',
              ],
              description: 'Conecte-se com as melhores oficinas da sua região. Agende serviços, compare preços e tenha total controle do seu veículo com o app MECA.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'MECA',
              url: 'https://www.mecabr.com',
            }),
          }}
        />
        {/* Prevent FOUC: read theme from localStorage before first paint */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('meca-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else if(!t){document.documentElement.classList.add('dark')}}catch(e){}})();`
        }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17215013580" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-17215013580');gtag('event','conversion',{'send_to':'AW-17215013580/NccNCNH9o_UaEMyF4ZBA'});`
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
