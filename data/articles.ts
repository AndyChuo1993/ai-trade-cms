
import { Lang } from '@/lib/i18n'
import fs from 'fs'
import path from 'path'

export type Article = {
  id: string
  title: string
  category: string
  date: string
  image: string
  content: string[]
  sections?: { heading: string; content: string[] }[]
  lang?: string // Added for flat structure support
}

function readArticles(): Article[] {
  try {
    const filePath = path.join(process.cwd(), 'data/articles.json')
    if (!fs.existsSync(filePath)) {
      return []
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error('Error reading articles:', error)
    return []
  }
}

export function getArticles(lang: Lang) {
  const allArticles = readArticles()
  return allArticles
    .filter(a => a.lang === lang)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticle(lang: Lang, id: string) {
  const allArticles = readArticles()
  return allArticles.find(a => a.lang === lang && a.id === id)
}
