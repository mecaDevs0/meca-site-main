import AppRedirectClient from './AppRedirectClient';

export const metadata = {
  title: 'MECA - Baixe o App',
  description: 'Baixe o app MECA e agende a manutenção do seu carro com oficinas verificadas. Disponível para iOS e Android.',
  openGraph: {
    title: 'MECA - Baixe o App e Agende Sua Manutenção',
    description: 'Encontre oficinas verificadas, agende o serviço e pague com segurança pelo app MECA.',
    type: 'website',
  },
};

export default function AppRedirectPage() {
  return <AppRedirectClient />;
}
