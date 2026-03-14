'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Lang } from '@/lib/i18n'

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const toggle = () => {
    if (!pathname) return

    const segments = pathname.split('/')
    const currentLang = segments[1]
    const targetLang = currentLang === 'zh' ? 'en' : 'zh'

    segments[1] = targetLang
    const nextPath = segments.join('/') || `/${targetLang}`
    const query = searchParams?.toString()

    router.push(query ? `${nextPath}?${query}` : nextPath)
  }

  return (
    <button
      onClick={toggle}
      type="button"
      className="text-sm font-medium text-gray-600 transition hover:text-blue-900"
      aria-label={lang === 'zh' ? '切換到英文' : 'Switch to Traditional Chinese'}
      title={lang === 'zh' ? '切換到英文' : 'Switch to Traditional Chinese'}
    >
      {lang === 'zh' ? 'EN' : '繁中'}
    </button>
  )
}
