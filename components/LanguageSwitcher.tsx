'use client'
import { useEffect, useState } from 'react'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'zh-Hant' | 'en'>('zh-Hant')
  useEffect(() => {
    const v = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/)?.[1]
    if (v === 'en') setLang('en')
  }, [])
  const toggle = () => {
    const to = lang === 'zh-Hant' ? 'en' : 'zh-Hant'
    document.cookie = `lang=${to}; path=/; max-age=31536000; samesite=lax`
    window.location.reload()
  }
  return (
    <button onClick={toggle} className="text-white/80 hover:text-white" aria-label="language switch">
      {lang === 'zh-Hant' ? '繁中' : 'EN'}
    </button>
  )
}
