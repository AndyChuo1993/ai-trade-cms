import { Lang } from '@/lib/i18n'
import { Check, Minus } from 'lucide-react'

interface ComparisonRow {
  feature: { zh: string; en: string }
  leadGen: { zh: string; en: string } | boolean
  outreach: { zh: string; en: string } | boolean
  outsourcing: { zh: string; en: string } | boolean
}

const rows: ComparisonRow[] = [
  {
    feature: { zh: '適合企業', en: 'Best For' },
    leadGen: { zh: '已有業務團隊，缺名單', en: 'Has sales team, needs leads' },
    outreach: { zh: '想主動開發，缺方法', en: 'Wants outreach, lacks method' },
    outsourcing: { zh: '無外貿團隊，缺人手', en: 'No export team, lacks staff' },
  },
  {
    feature: { zh: '交付內容', en: 'Deliverables' },
    leadGen: { zh: 'Excel/CSV 客戶名單', en: 'Excel/CSV Lead List' },
    outreach: { zh: '有興趣的潛在客戶 (Leads)', en: 'Interested Leads' },
    outsourcing: { zh: '詢盤、樣品單、訂單', en: 'Inquiries, Samples, Orders' },
  },
  {
    feature: { zh: '包含聯絡人資訊', en: 'Contact Info' },
    leadGen: true,
    outreach: true,
    outsourcing: true,
  },
  {
    feature: { zh: '代發開發信', en: 'Email Sending' },
    leadGen: false,
    outreach: true,
    outsourcing: true,
  },
  {
    feature: { zh: 'LinkedIn 開發', en: 'LinkedIn Outreach' },
    leadGen: false,
    outreach: true,
    outsourcing: true,
  },
  {
    feature: { zh: '回覆詢盤', en: 'Inquiry Response' },
    leadGen: false,
    outreach: false,
    outsourcing: true,
  },
  {
    feature: { zh: '報價與談判', en: 'Quotation & Neg.' },
    leadGen: false,
    outreach: false,
    outsourcing: true,
  },
  {
    feature: { zh: '週期', en: 'Cycle' },
    leadGen: { zh: '一次性交付 (3-5天)', en: 'One-time (3-5 days)' },
    outreach: { zh: '專案制 (1-3個月)', en: 'Project (1-3 months)' },
    outsourcing: { zh: '長期訂閱 (6個月+)', en: 'Retainer (6 months+)' },
  },
]

export default function ServiceComparison({ lang }: { lang: Lang }) {
  const renderCell = (cell: { zh: string; en: string } | boolean) => {
    if (typeof cell === 'boolean') {
      return cell ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
      )
    }
    return lang === 'zh' ? cell.zh : cell.en
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 font-bold text-gray-900 w-1/4">
              {lang === 'zh' ? '比較項目' : 'Feature'}
            </th>
            <th className="p-4 font-bold text-blue-900 bg-blue-50 w-1/4 text-center border-t-4 border-t-blue-600">
              {lang === 'zh' ? '名單開發' : 'Lead Gen'}
            </th>
            <th className="p-4 font-bold text-green-900 bg-green-50 w-1/4 text-center border-t-4 border-t-green-600">
              {lang === 'zh' ? '主動開發' : 'Cold Outreach'}
            </th>
            <th className="p-4 font-bold text-indigo-900 bg-indigo-50 w-1/4 text-center border-t-4 border-t-indigo-600">
              {lang === 'zh' ? '外貿外包' : 'Outsourcing'}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 font-medium text-gray-900">
                {lang === 'zh' ? row.feature.zh : row.feature.en}
              </td>
              <td className="p-4 text-center text-gray-600 bg-blue-50/30">
                {renderCell(row.leadGen)}
              </td>
              <td className="p-4 text-center text-gray-600 bg-green-50/30">
                {renderCell(row.outreach)}
              </td>
              <td className="p-4 text-center text-gray-600 bg-indigo-50/30">
                {renderCell(row.outsourcing)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
