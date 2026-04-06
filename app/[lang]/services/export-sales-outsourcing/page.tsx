import { Lang } from '@/lib/i18n'
import ServiceSeoPage from '@/components/ServiceSeoPage'
import { coreServices } from '@/data/coreServices'
import { cnText } from '@/lib/cnText'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const baseUrl = 'https://sungenelite.com'
  const service = coreServices.exportSalesOutsourcing
  const path = service.path || '/services/export-sales-outsourcing'
  return {
    title: cnText(lang, service.title[lang]),
    description: cnText(lang, service.description[lang]),
    alternates: {
      canonical: `${baseUrl}/${lang}${path}`,
      languages: {
        'zh-CN': `https://sungenelite.com/cn${path}`,
        'zh-TW': `https://sungenelite.com/zh${path}`,
        'en': `https://sungenelite.com/en${path}`,
        'x-default': `https://sungenelite.com/zh${path}`,
      },
    },
    openGraph: {
      title: cnText(lang, service.title[lang]),
      description: cnText(lang, service.description[lang]),
      url: `${baseUrl}/${lang}${path}`,
      type: 'website'
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const service = coreServices.exportSalesOutsourcing
  const withLang = {
    ...service,
    caseStudy: { ...service.caseStudy, link: `/${lang}${service.caseStudy.link}` },
    relatedLinks: service.relatedLinks?.map((x) => ({ ...x, href: `/${lang}${x.href}` })),
  }
  return <ServiceSeoPage lang={lang} service={withLang} />
}
