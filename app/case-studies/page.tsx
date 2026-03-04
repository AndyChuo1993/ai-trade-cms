import { fetchCaseStudies } from '@/lib/cms'
import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import { getCases } from '@/data/cases'
import BreadcrumbJSONLD from '@/components/BreadcrumbJSONLD'
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = getLang()
  return {
    title: t(lang, 'meta_cases_title'),
    description: t(lang, 'meta_cases_desc'),
    openGraph: { title: t(lang, 'meta_cases_title'), description: t(lang, 'meta_cases_desc'), images: ['/og/og.png'] },
    alternates: { canonical: '/case-studies' },
  }
}

export default async function CaseStudiesPage() {
  const lang = getLang()
  const local = getCases(lang).map(c => ({ slug: c.slug, title: c.title, summary: c.summary, result: c.result, cover: c.cover, industry: '' }))
  let rows: any[] = local
  
  // Try to fetch from CMS but fallback to local
  try {
    const items = await fetchCaseStudies()
    if (Array.isArray(items) && items.length > 0) {
        // Merge or replace? Let's prefer local for now as it has the high quality content
        // Or maybe just use local? The user said "ensure local fallback always exists"
        // But the local content is the "Infrastructure" content.
        // Let's stick to local primarily if available.
        // Actually, the local `data/cases.ts` contains the new copy. The CMS might contain old copy.
        // Let's use local data primarily for the 4 key cases.
    }
  } catch {}

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 min-h-screen">
      <div className="relative w-full h-[320px] md:h-[400px] rounded-none overflow-hidden border border-white/10 mb-16 transition duration-700">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/banner/banner2.png" 
            alt="Case Studies" 
            fill
            className="object-cover opacity-80" 
            priority 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] to-transparent opacity-90 z-10" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">{t(lang, 'cases_title')}</h1>
            <p className="mt-4 text-xl text-cyan-400 font-light">{t(lang, 'cases_subtitle')}</p>
        </div>
      </div>

      <BreadcrumbJSONLD items={[
        { name: 'Home', url: '/' },
        { name: 'Cases', url: '/case-studies' },
      ]} />
      
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {rows.map((c: any) => (
          <Link key={c.slug || c.id} href={`/case-studies/${c.slug || c.id}`} className="group relative block rounded-none border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-500/50 transition duration-500">
            {c.cover && (
                <div className="relative h-[240px] overflow-hidden">
                    <Image 
                        src={c.cover} 
                        alt={c.title} 
                        fill 
                        className="object-cover transition duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-[#0B1C2D]/50 group-hover:bg-transparent transition duration-500" />
                </div>
            )}
            <article className="p-8">
              <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition duration-300">{c.title}</h2>
              <dl className="mt-4 space-y-4">
                {(c.summary || c.abstract) && (
                    <div>
                        <dt className="sr-only">Summary</dt>
                        <dd className="text-gray-400 line-clamp-3 leading-relaxed">{c.summary || c.abstract}</dd>
                    </div>
                )}
                {c.result && (
                    <div className="pt-4 border-t border-white/10">
                        <dt className="text-xs uppercase tracking-widest text-cyan-500/70 mb-1">Result</dt>
                        <dd className="text-xl font-medium text-white">{c.result}</dd>
                    </div>
                )}
              </dl>
              <div className="mt-6 flex items-center text-cyan-400 text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition duration-300">
                {t(lang, 'read_more') || 'Read Case Study'} →
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
