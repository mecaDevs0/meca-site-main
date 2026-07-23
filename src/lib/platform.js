const STORE_URLS = {
  ios: 'https://apps.apple.com/us/app/meca/id6743087361',
  android: 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente',
  ios_oficina: 'https://apps.apple.com/app/meca-oficina/id6476768852',
  android_oficina: 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_oficina',
};

export function getPlatform() {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'desktop';
}

export function getStoreUrl(campaign, app = 'cliente') {
  const platform = getPlatform();
  const baseKey = app === 'oficina'
    ? (platform === 'ios' ? 'ios_oficina' : 'android_oficina')
    : (platform === 'ios' ? 'ios' : 'android');

  const base = STORE_URLS[baseKey];
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}utm_source=site&utm_medium=web&utm_campaign=${campaign}`;
}

export function getClienteStoreUrls(campaign) {
  return {
    ios: `${STORE_URLS.ios}?utm_source=site&utm_medium=web&utm_campaign=${campaign}`,
    android: `${STORE_URLS.android}&utm_source=site&utm_medium=web&utm_campaign=${campaign}`,
  };
}

export function getOficinaStoreUrls(campaign) {
  return {
    ios: `${STORE_URLS.ios_oficina}?utm_source=site&utm_medium=web&utm_campaign=${campaign}`,
    android: `${STORE_URLS.android_oficina}&utm_source=site&utm_medium=web&utm_campaign=${campaign}`,
  };
}
