import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import { getArticle } from '@/data/articles'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { lang: Lang, id: string } }) {
  const { lang, id } = params
  const article = getArticle(lang, id)
  if (!article) return { title: 'Not Found' }
  
  return {
    title: `${article.title} | SunGene`,
    description: article.content[0]?.slice(0, 150) || '',
    alternates: {
      canonical: `/${lang}/resources/${id}`,
    },
    openGraph: {
      title: `${article.title} | SunGene`,
      description: article.content[0]?.slice(0, 150) || '',
      type: 'article',
      publishedTime: article.date,
    }
  }
}

export default function Page({ params }: { params: { lang: Lang, id: string } }) {
  const { lang, id } = params
  const article = getArticle(lang, id)

  if (!article) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'SunGene'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SunGene',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo/sungene.png`
      }
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Article Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {article.title}
          </h1>
          <div className="text-gray-500 font-medium">
            {article.date}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-lg prose-blue mx-auto text-gray-700">
            {/* Intro paragraphs */}
            {article.content.map((p, idx) => (
              <p key={idx} className="mb-6 leading-relaxed">
                {p}
              </p>
            ))}

            {/* Sections */}
            {article.sections && article.sections.map((section, idx) => (
              <div key={idx} className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-blue-50 border border-blue-100 p-8 rounded-sm text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {lang === 'zh' ? '希望深入了解此主題？' : 'Want to learn more?'}
            </h3>
            <p className="text-blue-800 mb-8 max-w-xl mx-auto">
              {lang === 'zh' 
                ? 'SunGene 團隊擁有豐富的市場開發經驗，我們可以協助您制定更精準的外貿策略。' 
                : 'SunGene team has extensive market development experience. We can help you formulate a more precise export strategy.'}
            </p>
            <Link 
              href={`/${lang}/contact`} 
              className="inline-block bg-blue-900 text-white font-bold py-3 px-8 rounded-sm hover:bg-blue-800 transition duration-300"
            >
              {lang === 'zh' ? '聯繫我們' : 'Contact Us'}
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <Link href={`/${lang}/resources`} className="text-gray-500 hover:text-blue-600 font-medium transition flex items-center justify-center gap-2">
                ← {lang === 'zh' ? '返回資源中心' : 'Back to Resources'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
