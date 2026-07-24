import WorkshopClient from './WorkshopClient'

export function generateStaticParams() {
  return [{ id: 'index' }]
}

export const metadata = {
  title: 'Oficina MECA - Agende pelo App',
  description: 'Confira esta oficina verificada no MECA. Agende serviços automotivos com segurança pelo app.',
  openGraph: {
    title: 'Oficina MECA - Agende pelo App',
    description: 'Confira esta oficina verificada no MECA. Agende serviços automotivos com segurança pelo app.',
    type: 'website',
  },
}

export default function WorkshopPage() {
  return <WorkshopClient />
}
