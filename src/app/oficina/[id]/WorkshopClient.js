'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const API_URL = 'https://api.mecabr.com'
const APP_STORE_URL = 'https://apps.apple.com/br/app/meca-servi%C3%A7os-automotivos/id6504260756'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.mecabr.meca_app_cliente'

export default function WorkshopClient() {
  const params = useParams()
  const workshopId = params?.id
  const [workshop, setWorkshop] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!workshopId || workshopId === 'index') return
    fetch(`${API_URL}/workshop/${workshopId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setWorkshop(data.data)
        } else {
          setError('Oficina não encontrada')
        }
      })
      .catch(() => setError('Erro ao carregar oficina'))
      .finally(() => setLoading(false))
  }, [workshopId])

  if (workshopId === 'index') {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Oficinas MECA</h1>
          <p style={styles.subtitle}>Baixe o app para encontrar oficinas verificadas perto de você</p>
          <div style={styles.buttons}>
            <a href={APP_STORE_URL} style={styles.button}>App Store</a>
            <a href={PLAY_STORE_URL} style={styles.buttonOutline}>Google Play</a>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.spinner} />
          <p style={{ color: '#999', marginTop: 16 }}>Carregando oficina...</p>
        </div>
      </div>
    )
  }

  if (error || !workshop) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>{error || 'Oficina não encontrada'}</h1>
          <p style={styles.subtitle}>Baixe o app MECA para encontrar oficinas perto de você</p>
          <div style={styles.buttons}>
            <a href={APP_STORE_URL} style={styles.button}>App Store</a>
            <a href={PLAY_STORE_URL} style={styles.buttonOutline}>Google Play</a>
          </div>
        </div>
      </div>
    )
  }

  const rating = workshop.rating ? parseFloat(workshop.rating).toFixed(1) : null
  const serviceCount = workshop.services?.length || workshop.service_count || 0
  const galleryImage = workshop.gallery_images?.[0]?.image_url || workshop.profile_image_url

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {galleryImage && (
          <img
            src={galleryImage}
            alt={workshop.name}
            style={styles.image}
          />
        )}

        <div style={styles.content}>
          <div style={styles.badge}>Oficina Verificada</div>

          <h1 style={styles.workshopName}>{workshop.name}</h1>

          <div style={styles.metaRow}>
            {rating && (
              <span style={styles.rating}>⭐ {rating}</span>
            )}
            {serviceCount > 0 && (
              <span style={styles.meta}>{serviceCount} serviços</span>
            )}
            {workshop.city && (
              <span style={styles.meta}>📍 {workshop.city}{workshop.state ? `, ${workshop.state}` : ''}</span>
            )}
          </div>

          {workshop.address && (
            <p style={styles.address}>{workshop.address}</p>
          )}

          {workshop.services && workshop.services.length > 0 && (
            <div style={styles.servicesSection}>
              <h3 style={styles.servicesTitle}>Serviços disponíveis</h3>
              <div style={styles.servicesList}>
                {workshop.services.slice(0, 6).map((s, i) => (
                  <span key={i} style={styles.serviceChip}>
                    {s.name || s.service_name}
                  </span>
                ))}
                {workshop.services.length > 6 && (
                  <span style={styles.serviceChip}>+{workshop.services.length - 6} mais</span>
                )}
              </div>
            </div>
          )}

          <div style={styles.cta}>
            <p style={styles.ctaText}>Agende pelo app MECA</p>
            <div style={styles.buttons}>
              <a href={APP_STORE_URL} style={styles.button}>
                App Store
              </a>
              <a href={PLAY_STORE_URL} style={styles.buttonOutline}>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <a href="https://www.mecabr.com" style={styles.footerLink}>www.mecabr.com</a>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    background: 'linear-gradient(135deg, #0A0A0A 0%, #1a1a2e 100%)',
    fontFamily: "'Ubuntu', sans-serif",
  },
  card: {
    background: '#1A1A1A',
    borderRadius: '24px',
    overflow: 'hidden',
    maxWidth: '480px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
  },
  content: {
    padding: '24px',
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(0, 201, 119, 0.15)',
    color: '#00c977',
    fontSize: '12px',
    fontWeight: '600',
    padding: '4px 12px',
    borderRadius: '20px',
    marginBottom: '12px',
  },
  workshopName: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 12px',
  },
  metaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '12px',
  },
  rating: {
    fontSize: '14px',
    color: '#FFD700',
    fontWeight: '600',
  },
  meta: {
    fontSize: '14px',
    color: '#999',
  },
  address: {
    fontSize: '14px',
    color: '#888',
    margin: '0 0 20px',
  },
  servicesSection: {
    marginBottom: '24px',
  },
  servicesTitle: {
    color: '#ccc',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  servicesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  serviceChip: {
    background: 'rgba(255,255,255,0.08)',
    color: '#ddd',
    fontSize: '12px',
    padding: '6px 12px',
    borderRadius: '16px',
  },
  cta: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: '20px',
  },
  ctaText: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '12px',
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
  },
  button: {
    display: 'inline-block',
    background: '#00c977',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
  },
  buttonOutline: {
    display: 'inline-block',
    border: '2px solid #00c977',
    color: '#00c977',
    padding: '10px 22px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '8px',
  },
  subtitle: {
    color: '#999',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '24px',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '3px solid rgba(255,255,255,0.1)',
    borderTop: '3px solid #00c977',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto',
  },
  footer: {
    marginTop: '24px',
    textAlign: 'center',
  },
  footerLink: {
    color: '#666',
    fontSize: '12px',
    textDecoration: 'none',
  },
}
