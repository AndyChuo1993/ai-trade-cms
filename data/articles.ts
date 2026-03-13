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
      image: r.image,
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
    image: r.image,
    content: r.content,
    sections: r.sections,
  }
}
