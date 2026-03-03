import Link from 'next/link'
import ParticlesBackground from '@/components/ParticlesBackground'
import B2BHero from '@/components/B2BHero'
import StatsWall from '@/components/StatsWall'
import Problems from '@/components/Problems'
import SectionCards from '@/components/SectionCards'
import RichText from '@/components/RichText'
import { fetchHomeHero, fetchHomeStats, fetchModules, fetchPartners, fetchHomepage, fetchCaseStudies, fetchPageByPath } from '@/lib/cms'
import RenderBlocks from '@/components/pageBlocks/RenderBlocks'

import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'

export async function generateMetadata() {
  const lang = getLang()
  return {
    title: t(lang, 'meta_home_title'),
    description: t(lang, 'meta_home_desc'),
  }
}

export default async function Page() {
  const lang = getLang()
  const pageDoc = await fetchPageByPath('/')
  if (pageDoc?.layout && Array.isArray(pageDoc.layout) && pageDoc.layout.length > 0) {
    return (
      <main className="relative">
        <RenderBlocks blocks={pageDoc.layout} />
      </main>
    )
  }
  const [hero, stats, modules, partners, sections, cases] = await Promise.all([
    fetchHomeHero(),
    fetchHomeStats(),
    fetchModules(),
    fetchPartners(),
    fetchHomepage(),
    fetchCaseStudies()
  ])
  const cards: { title: string; desc: string; href: string }[] = []
  if (modules.procurementEnabled) cards.push({ title: t(lang, 'home_card_procurement_title'), desc: t(lang, 'home_card_procurement_desc'), href: '/services#procurement' })
  if (modules.aiPlatformEnabled) cards.push({ title: t(lang, 'home_card_ai_title'), desc: t(lang, 'home_card_ai_desc'), href: '/services#ai' })
  if (modules.odmOemEnabled) cards.push({ title: t(lang, 'home_card_odm_title'), desc: t(lang, 'home_card_odm_desc'), href: '/services#odm' })
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground className="opacity-60" />
      </div>
      {Array.isArray(sections) && sections.length > 0 ? (
        <>
          {sections.map((s: any, idx: number) => {
            const t = s.blockType
            if (t === 'hero') {
              return (
                <section key={idx} className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{s.title || 'AI-Driven Trade Growth Infrastructure'}</h1>
                      {s.subtitle && <p className="mt-3 text-white/80 text-lg">{s.subtitle}</p>}
                      <div className="mt-6 flex gap-3">
                        {s.ctaLabel && <a href={s.ctaUrl || '/contact'} className="rounded-md bg-cyan-500 px-6 py-3 text-black">{s.ctaLabel}</a>}
                      </div>
                    </div>
                  </div>
                </section>
              )
            }
            if (t === 'stats') {
              return (
                <section key={idx} className="mx-auto max-w-6xl px-6 py-16">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center text-white">
                      <div className="text-4xl font-semibold">{stats.countriesServed}</div>
                      <div className="mt-1 text-white/70">{t(lang, 'stats_countries')}</div>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center text-white">
                      <div className="text-4xl font-semibold">{stats.aiMatchRate}%</div>
                      <div className="mt-1 text-white/70">{t(lang, 'stats_match_rate')}</div>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center text-white">
                      <div className="text-4xl font-semibold">{stats.suppliers}</div>
                      <div className="mt-1 text-white/70">{t(lang, 'stats_suppliers')}</div>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-6 text-center text-white">
                      <div className="text-4xl font-semibold">{stats.clients}</div>
                      <div className="mt-1 text-white/70">{t(lang, 'stats_clients')}</div>
                    </div>
                  </div>
                </section>
              )
            }
            if (t === 'richText') {
              return (
                <section key={idx} className="mx-auto max-w-6xl px-6 py-12">
                  <div className="prose prose-invert max-w-none">
                    <RichText value={s.content} />
                  </div>
                </section>
              )
            }
            if (t === 'caseGrid') {
              const items = (cases || []).slice(0, s.limit || 3)
              return (
                <section key={idx} className="mx-auto max-w-6xl px-6 py-12">
                  <h2 className="text-3xl font-semibold">{t(lang, 'home_cases_title')}</h2>
                  <div className="mt-6 grid gap-6 md:grid-cols-3">
                    {items.map((c: any) => (
                      <article key={c.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <div className="text-xl font-semibold">{c.title}</div>
                        {c.summary && <p className="mt-2 text-white/80">{c.summary}</p>}
                        {c.result && <div className="mt-2 text-cyan-400">{c.result}</div>}
                      </article>
                    ))}
                  </div>
                </section>
              )
            }
            if (t === 'partnersGrid') {
              const items = (partners || []).slice(0, s.limit || 8)
              return (
                <section key={idx} className="mx-auto max-w-6xl px-6 py-12">
                  <h2 className="text-3xl font-semibold">{t(lang, 'home_partners_title')}</h2>
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((p: any) => (
                      <a key={p.id} href={p.website || '#'} className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-3 opacity-80 hover:opacity-100 transition">
                        {p.logoUrl ? <img className="max-h-12 object-contain" src={p.logoUrl} alt={p.name} /> : <span className="text-white/70">{p.name}</span>}
                      </a>
                    ))}
                  </div>
                </section>
              )
            }
            if (t === 'cta') {
              return (
                <section key={idx} className="mx-auto max-w-6xl px-6 py-12">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex items-center justify-between">
                    <div className="text-2xl font-semibold">{s.title || t(lang, 'home_cta_title')}</div>
                    {s.buttonLabel && <a href={s.buttonUrl || '/contact'} className="rounded-md bg-cyan-500 px-6 py-3 text-black">{s.buttonLabel}</a>}
                  </div>
                </section>
              )
            }
            return null
          })}
          <StatsWall />
          <Problems />
        </>
      ) : (
        <>
          <B2BHero />
          <StatsWall />
          <Problems />
          <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="mt-16 flex justify-center gap-6">
              <Link href="/solutions" className="rounded-none bg-cyan-500 px-8 py-4 text-black font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">
                {t(lang, 'infra_explore')}
              </Link>
              <Link href="/contact" className="rounded-none border border-white/30 px-8 py-4 hover:border-cyan-500 hover:text-cyan-400 transition">
                {t(lang, 'infra_consult')}
              </Link>
            </div>
          </section>
        </>
      )}
      
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold">{t(lang, 'plan_title')}</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-none border border-white/10 bg-white/5 p-8 hover:border-cyan-500/50 transition">
                <div className="text-xl font-bold mb-4 text-cyan-400">{t(lang, 'plan_1_name')}</div>
                <div className="text-sm text-gray-400 mb-6 min-h-[40px]">{t(lang, 'plan_1_target')}</div>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-2 text-white/90"><span className="text-cyan-500">✔</span> {t(lang, 'plan_1_content')}</li>
                </ul>
                <div className="pt-6 border-t border-white/10 text-sm text-gray-400">
                    {t(lang, 'plan_1_output')}
                </div>
            </div>
            <div className="rounded-none border border-cyan-500/30 bg-cyan-900/10 p-8 hover:border-cyan-500 transition relative">
                <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1">{t(lang, 'popular_badge')}</div>
                <div className="text-xl font-bold mb-4 text-white">{t(lang, 'plan_2_name')}</div>
                <div className="text-sm text-gray-400 mb-6 min-h-[40px]">{t(lang, 'plan_2_target')}</div>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-2 text-white/90"><span className="text-cyan-500">✔</span> {t(lang, 'plan_2_content')}</li>
                </ul>
                <div className="pt-6 border-t border-white/10 text-sm text-gray-400">
                    {t(lang, 'plan_2_output')}
                </div>
            </div>
            <div className="rounded-none border border-white/10 bg-white/5 p-8 hover:border-cyan-500/50 transition">
                <div className="text-xl font-bold mb-4 text-purple-400">{t(lang, 'plan_3_name')}</div>
                <div className="text-sm text-gray-400 mb-6 min-h-[40px]">{t(lang, 'plan_3_target')}</div>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-2 text-white/90"><span className="text-cyan-500">✔</span> {t(lang, 'plan_3_content')}</li>
                </ul>
                <div className="pt-6 border-t border-white/10 text-sm text-gray-400">
                    {t(lang, 'plan_3_output')}
                </div>
            </div>
        </div>
      </section>

      {/* Who We Are & FAQ Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
        {/* Header / Who We Are */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">{t(lang, 'who_we_are_title')}</h2>
           <p className="text-xl text-gray-300 leading-relaxed mb-8">{t(lang, 'who_we_are_text')}</p>
           <Link href="/about" className="inline-flex items-center text-cyan-400 font-bold hover:text-cyan-300 transition">
             {t(lang, 'nav_about')}
             <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </Link>
        </div>

        {/* FAQ Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">{t(lang, 'faq_title')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
             {/* FAQ Items */}
             <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition group h-full">
                <div className="text-cyan-400 font-bold mb-2 text-lg">01.</div>
                <h4 className="text-lg font-bold text-white mb-3">{t(lang, 'faq_compliance_q')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t(lang, 'faq_compliance_a')}</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition group h-full">
                <div className="text-cyan-400 font-bold mb-2 text-lg">02.</div>
                <h4 className="text-lg font-bold text-white mb-3">{t(lang, 'faq_integration_q')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t(lang, 'faq_integration_a')}</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition group h-full">
                <div className="text-cyan-400 font-bold mb-2 text-lg">03.</div>
                <h4 className="text-lg font-bold text-white mb-3">{t(lang, 'faq_deployment_q')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t(lang, 'faq_deployment_a')}</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition group h-full">
                <div className="text-cyan-400 font-bold mb-2 text-lg">04.</div>
                <h4 className="text-lg font-bold text-white mb-3">{t(lang, 'faq_roi_measure_q')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t(lang, 'faq_roi_measure_a')}</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition group h-full">
                <div className="text-cyan-400 font-bold mb-2 text-lg">05.</div>
                <h4 className="text-lg font-bold text-white mb-3">{t(lang, 'faq_difference_q')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t(lang, 'faq_difference_a')}</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition group h-full">
                <div className="text-cyan-400 font-bold mb-2 text-lg">06.</div>
                <h4 className="text-lg font-bold text-white mb-3">{t(lang, 'faq_enterprise_q')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t(lang, 'faq_enterprise_a')}</p>
             </div>
          </div>
          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: t(lang, 'faq_compliance_q'),
                    acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_compliance_a') }
                  },
                  {
                    '@type': 'Question',
                    name: t(lang, 'faq_integration_q'),
                    acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_integration_a') }
                  },
                  {
                    '@type': 'Question',
                    name: t(lang, 'faq_deployment_q'),
                    acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_deployment_a') }
                  },
                  {
                    '@type': 'Question',
                    name: t(lang, 'faq_roi_measure_q'),
                    acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_roi_measure_a') }
                  },
                  {
                    '@type': 'Question',
                    name: t(lang, 'faq_difference_q'),
                    acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_difference_a') }
                  },
                  {
                    '@type': 'Question',
                    name: t(lang, 'faq_enterprise_q'),
                    acceptedAnswer: { '@type': 'Answer', text: t(lang, 'faq_enterprise_a') }
                  }
                ]
              })
            }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t(lang, 'sol_title')}</h2>
        <p className="text-center text-xl text-gray-400 mb-16">{t(lang, 'sol_subtitle')}</p>
        
        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="group">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">01</span>
                        {t(lang, 'sol_m1_title')}
                    </h3>
                    <p className="text-gray-400 pl-11">{t(lang, 'sol_m1_desc')}</p>
                </div>
                <div className="group">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">02</span>
                        {t(lang, 'sol_m2_title')}
                    </h3>
                    <p className="text-gray-400 pl-11">{t(lang, 'sol_m2_desc')}</p>
                </div>
            </div>
            <div className="space-y-8">
                <div className="group">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">03</span>
                        {t(lang, 'sol_m3_title')}
                    </h3>
                    <p className="text-gray-400 pl-11">{t(lang, 'sol_m3_desc')}</p>
                </div>
                <div className="group">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">04</span>
                        {t(lang, 'sol_m4_title')}
                    </h3>
                    <p className="text-gray-400 pl-11">{t(lang, 'sol_m4_desc')}</p>
                </div>
            </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="text-3xl font-bold mb-8">{t(lang, 'ind_title')}</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-none border border-white/10 bg-white/5 p-8 text-xl font-semibold hover:border-cyan-500/50 transition">{t(lang, 'ind_1')}</div>
          <div className="rounded-none border border-white/10 bg-white/5 p-8 text-xl font-semibold hover:border-cyan-500/50 transition">{t(lang, 'ind_2')}</div>
          <div className="rounded-none border border-white/10 bg-white/5 p-8 text-xl font-semibold hover:border-cyan-500/50 transition">{t(lang, 'ind_3')}</div>
          <div className="rounded-none border border-white/10 bg-white/5 p-8 text-xl font-semibold hover:border-cyan-500/50 transition">{t(lang, 'ind_4')}</div>
          <div className="rounded-none border border-white/10 bg-white/5 p-8 text-xl font-semibold hover:border-cyan-500/50 transition">{t(lang, 'ind_5')}</div>
          <div className="rounded-none border border-white/10 bg-white/5 p-8 text-xl font-semibold hover:border-cyan-500/50 transition">{t(lang, 'ind_6')}</div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-white/90">{t(lang, 'partners_title')}</h3>
          <div className="w-full aspect-[21/9] border border-white/10 bg-[#0B1C2D] relative overflow-hidden">
             <img className="w-full h-full object-contain p-8 md:p-16 opacity-90 hover:opacity-100 transition duration-500" src="/partner/partner-1.png" alt="Partners" />
          </div>
        </div>
      </section>
    </main>
  )
}
<h1>Deploy Test 1</h1>
