'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [inquiries, setInquiries] = useState<any[]>([])
  
  useEffect(() => {
    fetch('/api/inquiries')
      .then(res => res.json())
      .then(data => {
          if (Array.isArray(data)) setInquiries(data)
      })
      .catch(console.error)
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Inquiries</h1>
        <div className="space-x-4">
             <Link href="/" className="text-gray-600 hover:underline" target="_blank">View Site</Link>
             <Link href="/management/write" className="bg-green-600 text-white px-4 py-2 rounded">
              Write Article
            </Link>
        </div>
      </div>
      <div className="bg-white shadow rounded overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">Name</th>
              <th className="p-4">Company</th>
              <th className="p-4">Email</th>
              <th className="p-4">Type</th>
              <th className="p-4">Message</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((item, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-4 text-sm whitespace-nowrap">{item.date ? new Date(item.date).toLocaleDateString() : '-'}</td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4">{item.company || '-'}</td>
                <td className="p-4 text-blue-600">{item.email}</td>
                <td className="p-4 text-sm bg-gray-50">{item.type}</td>
                <td className="p-4 text-sm max-w-xs truncate" title={item.message}>{item.message || '-'}</td>
              </tr>
            ))}
            {inquiries.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-500">No inquiries yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
