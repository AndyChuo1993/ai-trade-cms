import { Lang } from '@/lib/i18n'
import fs from 'node:fs'
import path from 'node:path'

export type Article = {
  id: string
  title: string
  category: string
  date: string
  image: string
  content: string[]
  sections?: { heading: string; content: string[] }[]
}

type ArticleRow = {
  id: string
  lang: 'zh' | 'en'
  title: string
  category: string
  date: string
  image: string
  content: string[]
  sections?: { heading: string; content: string[] }[]
}

const imageFallbacks: Record<string, string> = {
  'export-client-development-process-guide': '/images/resources/export-dev-guide-2026.svg',
  'how-to-build-overseas-buyer-list': '/images/resources/how-to-build-buyer-list.svg',
  'cold-email-writing-tips': '/images/resources/cold-email-structure.svg',
  'cold-email-common-mistakes': '/images/resources/cold-email-mistakes.svg',
  'europe-market-guide': '/images/resources/europe-market-guide.svg',
  'north-america-market-guide': '/images/resources/north-america-market-guide.svg',
  'japan-market-guide': '/images/resources/japan-market-guide.svg',
  'hardware-market-analysis': '/images/resources/hardware-export-guide.svg',
  'electronics-market-analysis': '/images/resources/electronics-export-guide.svg',
}

function resolveImage(id: string, image: string) {
  if (!image) return imageFallbacks[id] || '/banner/banner1.png'
  const normalized = image.startsWith('/') ? image.slice(1) : image
  const filePath = path.join(process.cwd(), 'public', normalized)
  if (fs.existsSync(filePath)) return image
  return imageFallbacks[id] || '/banner/banner1.png'
}

function readFromLocalFile(): ArticleRow[] {
  const filePath = path.join(process.cwd(), 'data/articles.json')
  if (!fs.existsSync(filePath)) return []
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const parsed = JSON.parse(fileContent)
    return Array.isArray(parsed) ? (parsed as ArticleRow[]) : []
  } catch {
    return []
  }
}

export function getArticles(lang: Lang): Article[] {
  const rows = readFromLocalFile()
  return rows
    .filter(r => r.lang === lang)
    .map(r => ({
      id: r.id,
      title: r.title,
      category: r.category,
      date: r.date,
      image: resolveImage(r.id, r.image),
      content: r.content,
      sections: r.sections,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticle(lang: Lang, id: string): Article | undefined {
  const rows = readFromLocalFile()
  const r = rows.find(x => x.lang === lang && x.id === id)
  if (!r) return undefined
  return {
    id: r.id,
    title: r.title,
    category: r.category,
    date: r.date,
    image: resolveImage(r.id, r.image),
    content: r.content,
    sections: r.sections,
  }
}
