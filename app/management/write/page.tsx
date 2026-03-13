'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function WritePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    id: '', // Slug
    category: 'Market Analysis',
    lang: 'zh',
    content: '',
    image: '/articles/lead-gen-guide.svg'
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    
    // Parse content into array of paragraphs
    const contentArray = form.content.split('\n\n').filter(p => p.trim())
    
    const payload = {
        ...form,
        content: contentArray,
        date: new Date().toISOString().split('T')[0]
    }

    const res = await fetch('/api/articles/create', {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    
    if (res.ok) {
        alert('Article published!')
        router.push('/management/dashboard')
    } else {
        alert('Failed to publish')
    }
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-6 flex items-center justify-between">
         <h1 className="text-2xl font-bold">Write Article</h1>
         <Link href="/management/dashboard" className="text-blue-600">Back to Dashboard</Link>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium mb-1">Language</label>
                <select 
                    className="w-full p-2 border rounded"
                    value={form.lang}
                    onChange={e => setForm({...form, lang: e.target.value})}
                >
                    <option value="zh">Chinese (zh)</option>
                    <option value="en">English (en)</option>
                </select>
            </div>
             <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select 
                    className="w-full p-2 border rounded"
                    value={form.category}
                    onChange={e => setForm({...form, category: e.target.value})}
                >
                    <option>Market Analysis</option>
                    <option>Export Guide</option>
                    <option>Industry Analysis</option>
                    <option>Case Study</option>
                    <option>外貿開發指南</option>
                    <option>市場分析</option>
                    <option>產業分析</option>
                </select>
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input 
                required
                className="w-full p-2 border rounded"
                value={form.title}
                onChange={e => setForm({...form, title: e.target.value})}
            />
        </div>
        
        <div>
            <label className="block text-sm font-medium mb-1">Slug (ID) - Optional</label>
            <input 
                className="w-full p-2 border rounded"
                value={form.id}
                onChange={e => setForm({...form, id: e.target.value})}
                placeholder="auto-generated-from-title"
            />
        </div>
        
         <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input 
                className="w-full p-2 border rounded"
                value={form.image}
                onChange={e => setForm({...form, image: e.target.value})}
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-1">Content (Use double line break for new paragraph)</label>
            <textarea 
                required
                rows={15}
                className="w-full p-2 border rounded"
                value={form.content}
                onChange={e => setForm({...form, content: e.target.value})}
            />
        </div>

        <button 
            disabled={loading}
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700"
        >
            {loading ? 'Publishing...' : 'Publish Article'}
        </button>
      </form>
    </div>
  )
}
