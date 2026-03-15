import { Lang } from '@/lib/i18n'
import { permanentRedirect } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    alternates: { canonical: `/${lang}/export-market-analysis` },
    robots: { index: false, follow: true },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  permanentRedirect(`/${lang}/export-market-analysis`)
}
