import Link from 'next/link'
import Image from 'next/image'
import { Lang } from '@/lib/i18n'
import { getBlogPost, getBlogPosts } from '@/data/blog'
import JsonLd from '@/components/JsonLd'
import { cnText } from '@/lib/cnText'
import { notFound } from 'next/navigation'

function slugifyAnchor(s: string) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fa5\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function estimateReadTime(text: string) {
  const asciiWords = (text.match(/[A-Za-z0-9]+/g) || []).length
  const cjkChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length
  const wordLike = asciiWords + Math.ceil(cjkChars / 2)
  const minutes = Math.max(3, Math.ceil(wordLike / 200))
  return minutes
}

export async function generateStaticParams() {
  const langs = ['en', 'zh', 'cn']
  return getBlogPosts().flatMap((p) => langs.map((lang) => ({ lang, slug: p.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const baseUrl = 'https://sungenelite.com'
  const post = getBlogPost(slug)
  if (!post) notFound()
  return {
    title: `${cnText(lang, post.title[lang])} | SunGene`,
    description: cnText(lang, post.description[lang]),
    alternates: {
      canonical: `${baseUrl}/${lang}/blog/${slug}`,
      languages: {
        'zh-CN': `https://sungenelite.com/cn/blog/${slug}`,
        'zh-TW': `https://sungenelite.com/zh/blog/${slug}`,
        'en': `https://sungenelite.com/en/blog/${slug}`,
        'x-default': `https://sungenelite.com/zh/blog/${slug}`,
      },
    },
    openGraph: {
      title: cnText(lang, post.title[lang]),
      description: cnText(lang, post.description[lang]),
      type: 'article',
      url: `${baseUrl}/${lang}/blog/${slug}`,
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: cnText(lang, post.title[lang]) }],
    },
    twitter: { card: 'summary_large_image', title: cnText(lang, post.title[lang]), description: cnText(lang, post.description[lang]), images: [post.heroImage] },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params
  const isChinese = lang !== 'en'
  const post = getBlogPost(slug)
  if (!post) notFound()
  const tr = (value: string) => cnText(lang, value)

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sungenelite.com'
  const url = `${baseUrl}/${lang}/blog/${slug}`
  const anchors = post.sections.map((s) => ({ id: s.id, label: tr(s.heading[lang]), anchor: slugifyAnchor(tr(s.heading[lang])) }))
  const related = getBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title[lang],
    description: post.description[lang],
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'SunGene Co., LTD.' },
    publisher: { '@type': 'Organization', name: 'SunGene Co., LTD.' },
    image: `${baseUrl}${post.heroImage}`,
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: cnText(lang, f.q[lang]),
      acceptedAnswer: { '@type': 'Answer', text: cnText(lang, f.a[lang]) },
    })),
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Home' : (lang === 'cn' ? '首页' : '首頁'), item: `${baseUrl}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'en' ? 'Blog' : (lang === 'cn' ? '博客' : '部落格'), item: `${baseUrl}/${lang}/blog` },
      { '@type': 'ListItem', position: 3, name: tr(post.title[lang]), item: url },
    ],
  }

  const serviceHref = `/${lang}${post.internalLinks.servicePath}`
  const caseHref = `/${lang}${post.internalLinks.caseStudyPath}`
  const magnetHref = `/${lang}${post.internalLinks.leadMagnetPath}`

  const funnelImage = lang === 'en' ? '/articles/list-to-meeting-funnel-en.svg' : (lang === 'cn' ? '/articles/list-to-meeting-funnel-zh.svg' : '/articles/list-to-meeting-funnel-zh.svg')
  const channelsImage = lang === 'en' ? '/articles/buyer-channels-matrix-en.svg' : (lang === 'cn' ? '/articles/buyer-channels-matrix-zh.svg' : '/articles/buyer-channels-matrix-zh.svg')

  const combinedText = [post.title[lang], post.description[lang], ...post.sections.flatMap((s) => s.content[lang])].join(' ')
  const readMinutes = estimateReadTime(combinedText)
  const dateIso = new Date(post.date).toISOString().slice(0, 10)
  const author = lang === 'en' ? 'SunGene Research Team' : (lang === 'cn' ? 'SunGene 研究团队' : 'SunGene 研究團隊')
  const reviewer = lang === 'en' ? 'SunGene Export Advisors' : (lang === 'cn' ? 'SunGene 外贸顾问' : 'SunGene 外銷顧問')

  return (
    <main className="pt-28">
      <JsonLd data={[breadcrumb, articleSchema, faqSchema]} />

      <div className="mx-auto max-w-6xl px-6">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href={`/${lang}`} className="hover:underline">
            {lang === 'en' ? 'Home' : (lang === 'cn' ? '首页' : '首頁')}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}/blog`} className="hover:underline">
            {lang === 'en' ? 'Blog' : (lang === 'cn' ? '博客' : '部落格')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title[lang]}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            <header>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <div>{isChinese ? tr(`更新：${dateIso}`) : `Updated: ${dateIso}`}</div>
                <div>·</div>
                <div>{isChinese ? tr(`閱讀時間：約 ${readMinutes} 分鐘`) : `Read time: ~${readMinutes} min`}</div>
                <div>·</div>
                <div>{tr(author)}</div>
                <div>·</div>
                <div>{isChinese ? tr(`審稿：${reviewer}`) : `Reviewed by ${reviewer}`}</div>
              </div>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">{tr(post.title[lang])}</h1>
              <p className="mt-4 text-lg text-gray-600">{tr(post.description[lang])}</p>
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <Image src={post.heroImage} alt={post.title[lang]} width={1200} height={630} className="h-auto w-full" priority />
              </div>
            </header>

            <section className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-bold text-gray-900">{lang === 'en' ? 'Table of Contents' : (lang === 'cn' ? '目录' : '目錄')}</div>
              <ol className="mt-3 space-y-2 text-sm">
                {anchors.map((a) => (
                  <li key={a.id}>
                    <a href={`#${a.anchor}`} className="text-blue-900 hover:underline">
                      {a.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-10 space-y-12">
              {post.sections.map((s, idx) => {
                const anchor = slugifyAnchor(tr(s.heading[lang]))
                return (
                  <section key={s.id} id={anchor} className="scroll-mt-28">
                    <h2 className="text-2xl font-bold text-gray-900">{tr(s.heading[lang])}</h2>
                    <div className="mt-4 space-y-4 text-gray-700 leading-7">
                      {s.content[lang].map((p, i) => (
                        <p key={i}>{tr(p)}</p>
                      ))}

                      {idx === 2 && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6">
                          <div className="text-sm font-bold text-gray-900">{lang === 'en' ? 'Diagram: list → outreach → reply → meeting funnel (example)' : (lang === 'cn' ? '圖表：從资料到会议的轉換漏斗（示意）' : '圖表：從決策人資料到會議的轉換漏斗（示意）')}</div>
                          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                            <Image src={funnelImage} alt={lang === 'en' ? 'List-to-meeting funnel diagram' : (lang === 'cn' ? '资料到会议漏斗示意圖' : '資料到會議漏斗示意圖')} width={1200} height={630} className="h-auto w-full" />
                          </div>
                          <div className="mt-3 text-sm text-gray-600">
                            {isChinese
                              ? tr('這張圖用來幫你抓住最小可行流程：先讓資料可投遞、再用節奏跟進、把回覆分類別後推進下一步。')
                              : 'This visual helps you align the minimum viable workflow: deliverable list → cadence → triage → next step.'}
                          </div>
                        </div>
                      )}

                      {idx === 1 && (
                        null
                      )}

                      {idx === 3 && (
                        null
                      )}

                      {idx === 4 && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6">
                          <div className="text-sm font-bold text-gray-900">{lang === 'en' ? 'Chart: buyer discovery channels and when to use them (example)' : (lang === 'cn' ? '圖表：常見买家来源與适用场景（示意）' : '圖表：常見買家來源與適用情境（示意）')}</div>
                          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                            <Image src={channelsImage} alt={lang === 'en' ? 'Buyer discovery channels comparison' : (lang === 'cn' ? '买家来源比較圖' : '買家來源比較圖')} width={1200} height={630} className="h-auto w-full" />
                          </div>
                          <div className="mt-3 text-sm text-gray-600">
                            {isChinese
                              ? tr('你可以用這張表快速決定：先用哪個來源跑小規模驗證，再把有效的做法放大。')
                              : 'Use this to pick 1–2 channels for validation first, then scale the ones that work.'}
                          </div>
                        </div>
                      )}

                      {idx === post.sections.length - 2 && (
                        null
                      )}

                      {idx % 2 === 1 && (
                        <div className="rounded-xl border border-gray-200 bg-white p-6">
                          <div className="text-sm font-bold text-gray-900">{lang === 'en' ? 'Example table: minimal list-to-meeting workflow' : (lang === 'cn' ? '示意表：從资料到会议的最小流程' : '示意表：從決策人資料到會議的最小流程')}</div>
                          <div className="mt-4 overflow-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="text-left text-gray-500">
                                  <th className="py-2 pr-4">{lang === 'en' ? 'Stage' : (lang === 'cn' ? '階段' : '階段')}</th>
                                  <th className="py-2 pr-4">{lang === 'en' ? 'Input' : (lang === 'cn' ? '輸入' : '輸入')}</th>
                                  <th className="py-2">{lang === 'en' ? 'Output' : (lang === 'cn' ? '输出' : '輸出')}</th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-800">
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'en' ? 'ICP' : (lang === 'cn' ? '理想买家' : '理想買家')}</td>
                                  <td className="py-2 pr-4">{lang === 'en' ? 'market/industry/role/size' : (lang === 'cn' ? '市场/行业/角色/规模' : '市場/產業/角色/規模')}</td>
                                  <td className="py-2">{lang === 'en' ? 'buyer profile and filters' : (lang === 'cn' ? '买家畫像與筛选規則' : '買家畫像與篩選規則')}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'en' ? 'List' : (lang === 'cn' ? '资料' : '資料')}</td>
                                  <td className="py-2 pr-4">{lang === 'en' ? 'multi-source + validation' : (lang === 'cn' ? '多来源搜集 + 验证' : '多來源蒐集 + 驗證')}</td>
                                  <td className="py-2">{lang === 'en' ? 'deliverable contacts' : (lang === 'cn' ? '可投遞联系方式' : '可投遞聯絡方式')}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'en' ? 'Message' : (lang === 'cn' ? '訊息' : '訊息')}</td>
                                  <td className="py-2 pr-4">{lang === 'en' ? 'pain + proof + CTA' : (lang === 'cn' ? '痛点 + 证据 + 行動呼籲' : '痛點 + 證據 + 行動呼籲')}</td>
                                  <td className="py-2">{lang === 'en' ? 'replyable question' : (lang === 'cn' ? '可回复的問題' : '可回覆的問題')}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'en' ? 'Follow-up' : (lang === 'cn' ? '跟进' : '跟進')}</td>
                                  <td className="py-2 pr-4">{lang === 'en' ? '4–6 touches' : (lang === 'cn' ? '4–6 次節奏' : '4–6 次節奏')}</td>
                                  <td className="py-2">{lang === 'en' ? 'replies + triage' : (lang === 'cn' ? '有效回复與分类' : '有效回覆與分類別')}</td>
                                </tr>
                                <tr className="border-t">
                                  <td className="py-2 pr-4 font-semibold">{lang === 'en' ? 'Progress' : (lang === 'cn' ? '推進' : '推進')}</td>
                                  <td className="py-2 pr-4">{lang === 'en' ? 'summary/next steps' : (lang === 'cn' ? '需求摘要/下一步' : '需求摘要/下一步')}</td>
                                  <td className="py-2">{lang === 'en' ? 'meetings/samples/quotes' : (lang === 'cn' ? '会议/样品/报价' : '會議/樣品/報價')}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )
              })}
            </div>

            <section className="mt-12 rounded-xl bg-slate-900 p-8 text-white">
              <h2 className="text-2xl font-bold">{lang === 'en' ? 'Need help?' : (lang === 'cn' ? '需要协助？' : '需要協助？')}</h2>
              <p className="mt-2 text-slate-200">
                {lang === 'en'
                  ? 'If you want to discuss options or get initial advice, contact us.'
                  : (lang === 'cn' ? '如果你想了解合作方式或取得初步建议，欢迎与我们联系。' : '如果你想了解合作方式或取得初步建議，歡迎與我們聯絡。')}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400">
                  {lang === 'en' ? 'Contact' : (lang === 'cn' ? '联系我们' : '聯絡我們')}
                </Link>
                <Link href={magnetHref} className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
                  {lang === 'en' ? 'Market Entry Advice' : (lang === 'cn' ? '市场切入建议' : '市場切入建議')}
                </Link>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">{lang === 'en' ? 'FAQ' : (lang === 'cn' ? '常見問題' : '常見問題')}</h2>
              <div className="mt-6 space-y-4">
                {post.faq.map((f, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                    <div className="font-semibold text-gray-900">{tr(f.q[lang])}</div>
                    <div className="mt-2 text-gray-700 leading-7">{tr(f.a[lang])}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 mb-16">
              <h2 className="text-2xl font-bold text-gray-900">{lang === 'en' ? 'Related content' : (lang === 'cn' ? '相關內容' : '相關內容')}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/${lang}/blog/${r.slug}`} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
                    <div className="text-sm text-gray-500">{new Date(r.date).toISOString().slice(0, 10)}</div>
                    <div className="mt-2 font-bold text-gray-900">{tr(r.title[lang])}</div>
                    <div className="mt-2 text-gray-600">{tr(r.description[lang])}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={serviceHref} className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition">
                  {lang === 'en' ? 'View service' : (lang === 'cn' ? '查看服务' : '查看服務')}
                </Link>
                <Link href={caseHref} className="inline-flex items-center justify-center rounded-sm border border-blue-900 px-5 py-2.5 text-blue-900 font-medium text-sm hover:bg-blue-50 transition">
                  {lang === 'en' ? 'Case studies' : (lang === 'cn' ? '成功案例' : '成功案例')}
                </Link>
                <Link href={magnetHref} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                  {lang === 'en' ? 'Get market entry advice' : (lang === 'cn' ? '取得市场切入建议' : '取得市場切入建議')}
                </Link>
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-bold text-gray-900">{lang === 'en' ? 'Quick links' : (lang === 'cn' ? '快速入口' : '快速入口')}</div>
                <div className="mt-4 space-y-2 text-sm">
                  <Link href={serviceHref} className="block text-blue-900 hover:underline">
                    {lang === 'en' ? 'View service' : (lang === 'cn' ? '查看服务' : '查看服務')}
                  </Link>
                  <Link href={caseHref} className="block text-blue-900 hover:underline">
                    {lang === 'en' ? 'Case studies' : (lang === 'cn' ? '成功案例' : '成功案例')}
                  </Link>
                  <Link href={magnetHref} className="block text-blue-900 hover:underline">
                    {lang === 'en' ? 'Get market entry advice' : (lang === 'cn' ? '取得市场切入建议' : '取得市場切入建議')}
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="text-sm font-bold text-gray-900">{lang === 'en' ? 'On this page' : (lang === 'cn' ? '本頁目錄' : '本頁目錄')}</div>
                <ol className="mt-4 space-y-2 text-sm">
                  {anchors.map((a) => (
                    <li key={a.id}>
                      <a href={`#${a.anchor}`} className="text-blue-900 hover:underline">
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
