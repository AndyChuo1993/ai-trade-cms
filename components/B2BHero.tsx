import { t } from '@/lib/i18n'
import { getLang } from '@/lib/i18n-server'
import Image from 'next/image'
export default function B2BHero() {
  const lang = getLang()
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            {t(lang, 'hero_title')}
          </h1>
          <p className="mt-6 text-cyan-400 text-2xl font-medium tracking-wide">
            {t(lang, 'hero_subtitle')}
          </p>
          <p className="mt-4 text-white/80 text-lg max-w-2xl font-light">
            {t(lang, 'meta_standard_definition')}
          </p>
          
          <div className="mt-12 flex gap-6">
            <a href="/contact" className="rounded-none bg-cyan-500 px-8 py-4 text-black font-bold text-lg hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              {t(lang, 'hero_cta_deploy')}
            </a>
            <a href="/case-studies" className="rounded-none border border-white/30 px-8 py-4 text-lg hover:border-cyan-500 hover:text-cyan-400 transition">
              {t(lang, 'hero_cta_view')}
            </a>
          </div>
        </div>
        <div className="relative hidden md:block h-[360px]">
          <div className="rounded-none border-l border-t border-cyan-500/30 p-4 relative h-full w-full">
             <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-white/20 z-20"></div>
             <div className="absolute bottom-0 left-0 w-20 h-20 border-l border-b border-white/20 z-20"></div>
            <Image
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
              alt="SunGene AI Platform UI"
              fill
              className="object-cover opacity-90 transition duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/90 via-[#0B1C2D]/40 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none mix-blend-overlay z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
